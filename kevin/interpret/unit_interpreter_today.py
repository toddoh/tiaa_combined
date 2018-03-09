import json
import numpy as np
import pprint
from interpret import detect_peaks
import os
from whoosh.index import create_in
from whoosh.fields import *
import whoosh.qparser
import pytz

def interpret_today(type):
    datapath = './dataset/' + type + '/'
    interpret_datapath = './interpret/' + type + '/'
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
        print('Interpreter: theme: ', pick_theme)

        for item in group['groups']:
            all_documents_title = []
            all_documents_text = []
            if type != 'trumpsaid':
                schema = Schema(title=TEXT(stored=True), path=ID(stored=True), content=TEXT(stored=True))
            else:
                schema = Schema(title=TEXT(stored=True), path=ID(stored=True))

            os.makedirs(interpret_datapath + "indexes", exist_ok=True)
            ix = create_in(interpret_datapath + "indexes", schema)
            writer = ix.writer()

            for article in item['articles']:
                if type != 'trumpsaid':
                    writer.add_document(title=article['title'], path=article['_id'], content=article['text'])
                else:
                    writer.add_document(title=article['title'], path=article['_id'])

            writer.commit()

            with ix.searcher() as searcher:
                query = whoosh.qparser.QueryParser("title", ix.schema, group=whoosh.qparser.OrGroup).parse(pick_theme)
                results = searcher.search(query, limit=500)

                if len(results):
                    article_pick = results
                    print('Clustering: index length:')
                    print(len(article_pick))

                    for a in article_pick:
                        all_documents_title.append(a['title'])
                        if type != 'trumpsaid':
                            all_documents_text.append(a['content'])

            pick_list.append(len(item['articles']))
            pick_months.append(item['month'])
            print(pick_list, pick_months, len(all_documents_title))
            querytext = ' '.join(group['theme'])

            article_pick = []
            toparticles_matched = []
            with ix.searcher() as searcher:
                query = whoosh.qparser.QueryParser("title", ix.schema, group=whoosh.qparser.OrGroup).parse(querytext)
                results = searcher.search(query)

                if len(results):
                    article_pick = results[0:7]
                    print(article_pick)

                    for a in article_pick:
                        for article in item['articles']:
                            if a['path'] == article['_id']:
                                if 'text' in article:
                                    del article['text']
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
        result_pick_data['theme'] = group['theme']
        result_pick_data['ne'] = group['namedentity']
        result_pick_data['list'] = pick_list
        result_pick_data['months'] = pick_months
        result_pick_data['toparticles'] = pick_toparticles
        result_pick_data['peaks'] = peak_indexes_months

        then = datetime.datetime.now(pytz.utc)
        timeest = str(then.astimezone(pytz.timezone('US/Eastern')))
        result_pick_data['timestamp'] = timeest

        print(result_pick_data)
        all_results.append(result_pick_data)
        print('--------- CLUSTER DONE: {0}'.format(group['theme']))

    if type == 'today':
        os.makedirs('../dataset/' + type + '/', exist_ok=True)
        interpret_datapath_today = '../dataset/' + type + '/' + type + '_data.json'
        with open(interpret_datapath_today, 'w') as f:
            json.dump(all_results, f, indent=4, sort_keys=True)
    else:
        with open(interpret_datapath + 'result.json', 'w') as f:
            json.dump(all_results, f, indent=4, sort_keys=True)

