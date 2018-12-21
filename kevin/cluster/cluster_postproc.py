import json
from lib import detect_peaks
import os
from whoosh.index import create_in
from whoosh.fields import *
import whoosh.qparser
import pytz
from sklearn.decomposition import NMF, LatentDirichletAllocation
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import HashingVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.pipeline import make_pipeline

def postprocess(type):
    datapath = './dataset/' + type + '/'
    cluster_index_datapath = './cluster/' + type + '/'
    result_file = datapath + 'result.json'
    with open(result_file) as data_file:
        result_data = json.load(data_file)

    all_results = []

    for group in result_data:
        pick_list = []
        pick_months = []
        pick_toparticles = []
        peak_indexes_months = []
        pick_theme = ' '.join(group['theme'])
        lda_theme = []
        # print('CLUSTER_POSTPROC: theme: ', pick_theme)

        for item in group['groups']:
            all_documents = []
            all_documents_title = []
            all_documents_text = []
            if type == 'today':
                schema = Schema(title=TEXT(stored=True), path=ID(stored=True), content=TEXT(stored=True))
            else:
                schema = Schema(title=TEXT(stored=True), path=ID(stored=True))

            os.makedirs(cluster_index_datapath + "indexes", exist_ok=True)
            ix = create_in(cluster_index_datapath + "indexes", schema)
            writer = ix.writer()

            for article in item['articles']:
                if type == 'today':
                    writer.add_document(title=article['title'], path=article['_id'], content=article['text'])
                    all_documents.append(article)
                else:
                    writer.add_document(title=article['title'], path=article['_id'])

            writer.commit()

            with ix.searcher() as searcher:
                query = whoosh.qparser.QueryParser("title", ix.schema, group=whoosh.qparser.OrGroup).parse(pick_theme)
                results = searcher.search(query, limit=30)

                if len(results):
                    article_pick = results
                    for a in article_pick:
                        all_documents_title.append(a['title'])
                        if type == 'today':
                            all_documents_text.append(a['content'])

            pick_list.append(len(item['articles']))
            pick_months.append(item['month'])
            print('Total: {0}, Month: {1}, Query Result: {2}'.format(pick_list, pick_months, len(all_documents_title)))
            querytext = ' '.join(group['theme'])

            article_pick = []
            toparticles_matched = []
            toparticles_matched_text = []
            with ix.searcher() as searcher:
                query = whoosh.qparser.QueryParser("title", ix.schema, group=whoosh.qparser.OrGroup).parse(querytext)
                results = searcher.search(query)

                if len(results):
                    for a in results:
                        for article in item['articles']:
                            if a['path'] == article['_id']:
                                toparticles_matched_text.append(article['title'])

                    article_pick = results[0:5]
                    for a in article_pick:
                        for article in item['articles']:
                            if a['path'] == article['_id']:
                                #if 'text' in article:
                                    # del article['text']
                                toparticles_matched.append(article)
                                toparticles_matched_text.append(article['title'])

            pick_toparticles.append(toparticles_matched)
            
            print('CLUSTER_POSTPROC: Extracting features from the dataset')
            from nltk.corpus import stopwords 
            from nltk.stem.wordnet import WordNetLemmatizer
            import string
            stop = set(stopwords.words('english'))
            exclude = set(string.punctuation) 
            lemma = WordNetLemmatizer()

            def clean(doc):
                stop_free = " ".join([i for i in doc.lower().split() if i not in stop])
                punc_free = ''.join(ch for ch in stop_free if ch not in exclude)
                normalized = " ".join(lemma.lemmatize(word) for word in punc_free.split())
                return normalized

            def clean_text(raw_text):
                letters_only = re.sub('[^a-zA-Z]', ' ', str(raw_text))
                words = letters_only.lower().split()
                cachedStopWords = set(stopwords.words("english"))
                cachedStopWords.update(['periscope', 'pbs', 'newshour', 'npr', 'watch', 'bloomberg', 'says', 'abc', 'news'])
                useful_words = [x for x in words if x not in cachedStopWords]

                useful_words_string = ' '.join(useful_words)
                return useful_words_string

            doc_clean = [clean_text(doc).split() for doc in toparticles_matched_text] 

            import gensim
            from gensim import corpora

            dictionary = corpora.Dictionary(doc_clean)
            doc_term_matrix = [dictionary.doc2bow(doc) for doc in doc_clean]

            Lda = gensim.models.ldamodel.LdaModel
            ldamodel = Lda(doc_term_matrix, num_topics=3, id2word = dictionary, passes=50)
            # print(ldamodel.print_topics(num_topics=3, num_words=5))
            for idx, topic in  ldamodel.show_topics(formatted=False, num_words=3, num_topics=3):
                lda_theme.append([w[0] for w in topic])

        print('CLUSTER_POSTPROC: Detect peaks with minimum height and distance filters.')
        peak_indexes = detect_peaks.detect_peaks(pick_list, mph=7, mpd=2).tolist()

        for item in peak_indexes:
            peak_indexes_months.append(pick_months[int(item)])

        result_pick_data = {}
        result_pick_data['theme'] = group['theme']
        result_pick_data['topics'] = lda_theme #group['theme']
        result_pick_data['ne'] = group['namedentity']
        result_pick_data['list'] = pick_list
        result_pick_data['months'] = pick_months
        result_pick_data['toparticles'] = pick_toparticles
        result_pick_data['all'] = all_documents
        result_pick_data['peaks'] = peak_indexes_months

        then = datetime.datetime.now(pytz.utc)
        timeest = str(then.astimezone(pytz.timezone('US/Eastern')))
        result_pick_data['timestamp'] = timeest
        all_results.append(result_pick_data)
        print('CLUSTER_POSTPROC: Postprocessing finished: {0}'.format(lda_theme))


        time_file = datetime.datetime.now(pytz.timezone('US/Eastern'))
        time_file_string = time_file.strftime("%Y%m%d-%H%M")
    if type == 'today':
        os.makedirs('../analysis_assets/' + type + '/', exist_ok=True)
        final_datapath_today = '../analysis_assets/' + type + '/' + type + '_data.json'
        with open(final_datapath_today, 'w') as f:
            json.dump(all_results, f, indent=4, sort_keys=True)

        os.makedirs('../analysis_assets/' + type + '/', exist_ok=True)
        final_datapath_today = '../analysis_assets/' + type + '/' + type + '_' + time_file_string + '_data.json'
        with open(final_datapath_today, 'w') as f:
            json.dump(all_results, f, indent=4, sort_keys=True)
    else:
        final_datapath = '../analysis_assets/' + type + '/' + 'result.json'
        with open(final_datapath + 'result.json', 'w') as f:
            json.dump(all_results, f, indent=4, sort_keys=True)

