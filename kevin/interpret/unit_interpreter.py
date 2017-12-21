import json
import numpy as np
import pprint
from interpret import detect_peaks
from interpret.parser_articles import parse_aggregated
from fuzzywuzzy import fuzz
from fuzzywuzzy import process
import nltk
from nltk.stem.porter import PorterStemmer

def interpret(type):
    result_file = '../dataset/' + type + '_result.json'
    with open(result_file) as data_file:
        result_data = json.load(data_file)

    all_results = []
    for group in result_data:
        pick_list = []
        pick_months = []
        pick_toparticles = []
        peak_indexes_months = []
        pick_theme = ' '.join(group['theme'])
        print('Interpreter: theme: ', pick_theme)

        for item in group['groups']:
            all_documents = []
            for article in item['articles']:
                all_documents.append(article['title'])

            pick_list.append(len(item['articles']))
            pick_months.append(item['month'])
            print(pick_list, pick_months, len(all_documents))

            if len(all_documents) <= 15:
                pick_toparticles.append([])

                print('@@@@@@@@ ERRRR')
                continue
            else:
                parsed_data = parse_aggregated(all_documents, 1, 15)

            print('+++++++ PARSING')
            parsed_data_themes = []
            for index, parseditem in enumerate(parsed_data[0]):
                converted_np = np.array(parsed_data[0][index]).tolist()
                tokens = []
                for token in converted_np:
                    tokens.append(token[0])

                parsed_data_themes.append(tokens)

            #print('Interpreter: all key themes:')
            #print(parsed_data_themes)

            stemmer = PorterStemmer()

            def stem_words(words_list, stemmer):
                return [stemmer.stem(word) for word in words_list]

            for index, themeitem in enumerate(parsed_data_themes):
                zip_data = {}
                theme_data = []

                for token in themeitem:
                    title_tokens = nltk.word_tokenize(' '.join(parsed_data[1][index]))
                    title_stems = stem_words(title_tokens, stemmer)
                    title_token_zip = dict(zip(title_stems, title_tokens))

                    matched_token = title_token_zip.get(token)
                    # print('Target token: {0} / Matched: {1} / Tokens Dict: {2}'.format(token, matched_token, title_token_zip))
                    if isinstance(matched_token, str):
                        if len(matched_token) > 1:
                            theme_data.append(matched_token)
                    elif isinstance(matched_token, list):
                        if len(matched_token[0]) > 1:
                            theme_data.append(matched_token[0])
                    else:
                        if len(token) > 1:
                            theme_data.append(token)

            print(theme_data)

            noduplicates = []
            for theme in theme_data:
                if theme not in group['theme']:
                    noduplicates.append(theme)

            if len(noduplicates) <= 0:
                query = ' '.join(theme_data)
            else:
                query = ' '.join(noduplicates)

            article_pick = process.extract(query, all_documents)
            print(query, article_pick)

            toparticles_matched = []
            for index, picked in enumerate(article_pick):
                converted_np = np.array(article_pick[index]).tolist()
                for article in item['articles']:
                    if converted_np[0] == article['title']:
                        toparticles_matched.append(article)

            pick_toparticles.append(toparticles_matched)
            print(toparticles_matched)
            print('########## DONE: {0}'.format(item['month']))

        print('Interpreter: Detect peaks with minimum height and distance filters.')
        peak_indexes = detect_peaks.detect_peaks(pick_list, mph=7, mpd=2).tolist()
        print(dict(zip(pick_months, pick_list)))

        print('Interpreter: Peaks are: %s' % peak_indexes)
        for item in peak_indexes:
            print('Interpreter: Peaks are: %s' % pick_months[int(item)])
            peak_indexes_months.append(pick_months[int(item)])

        result_pick_data = {}
        result_pick_data['theme'] = pick_theme
        result_pick_data['list'] = pick_list
        result_pick_data['months'] = pick_months
        result_pick_data['toparticles'] = pick_toparticles
        result_pick_data['peaks'] = peak_indexes_months

        print(result_pick_data)
        all_results.append(result_pick_data)
        print('--------- CLUSTER DONE: {0}'.format(group['theme']))

    with open('../interpret/' + type + '_result.json', 'w') as f:
        json.dump(all_results, f, indent=4, sort_keys=True)


# run task
interpret('trumptimemachine')