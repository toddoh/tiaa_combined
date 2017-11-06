from pymongo import MongoClient
from parser_twitter import parse_aggregated
from datetime import datetime, timedelta
import numpy as np
import nltk
from nltk.stem.porter import PorterStemmer

print('Initiating cluster unit...')
print('Clustering unit: Setting up MongoClient kevin@main')
client = MongoClient('mongodb://kevin:eHAdpMJze8XubCUWGXo@23.239.14.16:27017/main')
db = client['main']

theme_blacklists = ['periscope', 'pbs', 'newshour', 'npr']

def cluster_articles(item, mode=None):
    collection = db['aggregator_' + item]

    print('Clustering unit: Start loading articles from database: {0} mode'.format(mode))
    if mode is None:
        last_hour_date_time = datetime.now() - timedelta(hours=24)
        unix_time = last_hour_date_time.strftime("%s")
        print(unix_time)

        cursor = list(collection.find({"ts": {"$gt": int(unix_time) }}).sort([('_id', 1)]))
    elif mode == 'unlimited':
        cursor = list(collection.find({}).sort([('_id', 1)]).limit(3000))
        # cursor = list(collection.find({}).sort([('_id', 1)]))
        print(len(cursor))

    if len(cursor):
        print('Clustering unit: Processing loaded articles...')
        parsed_article_title = []
        parsed_article_text = []

        for article in cursor:
            if isinstance(article['title'], str):
                if isinstance(article['text'], str):
                    parsed_article_title.append(article['title'])
                    parsed_article_text.append(article['text'])

        parsed_article_dict = dict(zip(parsed_article_title, parsed_article_text))
        print('Clustering unit: Finished processing loaded articles')

        parsed_data = parse_aggregated(parsed_article_dict, 20)
        origin_data_raw = cursor

        # print(parsed_data[0])
        parsed_data_themes = []
        for index, item in enumerate(parsed_data[0]):
            converted_np = np.array(parsed_data[0][index]).tolist()
            tokens = []
            for token in converted_np:
                tokens.append(token[0])

            parsed_data_themes.append(tokens)

        parsed_articlecluster_flattened = [val for sublist in parsed_data[1].values() for val in sublist]
        parsed_articlecluster_raw = []
        for title in parsed_articlecluster_flattened:
            filter = next((item for item in origin_data_raw if item["title"] == title), False)
            if filter:
                parsed_articlecluster_raw.append(filter)

        parsed_articlecluster = []
        stemmer = PorterStemmer()

        def stem_words(words_list, stemmer):
            return [stemmer.stem(word) for word in words_list]

        for index, item in enumerate(parsed_data_themes):
            zip_data = {}
            theme_data = []

            for token in item:
                title_tokens = nltk.word_tokenize(' '.join(parsed_data[1][index]))
                title_stems = stem_words(title_tokens, stemmer)
                title_token_zip = dict(zip(title_stems, title_tokens))

                matched_token = title_token_zip.get(token)
                # print('Target token: {0} / Matched: {1} / Tokens Dict: {2}'.format(token, matched_token, title_token_zip))
                if isinstance(matched_token, str):
                    theme_data.append(matched_token)
                elif isinstance(matched_token, list):
                    theme_data.append(matched_token[0])
                else:
                    theme_data.append(token)

            theme_data_l = [x.lower() for x in theme_data]
            if any(x in theme_data_l for x in theme_blacklists):
                print('Clustring unit: there is one or more blacklisted words in themes')
            else:
                zip_data['theme'] = theme_data
                zip_data['articles'] = parsed_data[1][index]

                parsed_articlecluster.append(zip_data)

        print(parsed_articlecluster)

        print(len(parsed_articlecluster_raw))
    else:
        print('Clustering unit: The collection is empty, unable to process.')
