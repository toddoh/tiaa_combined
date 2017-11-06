from aggregator_twitter import aggregator
from pymongo import MongoClient
import datetime
from datetime import timezone

print('Initiating aggregator unit...')
print('Setting up MongoClient kevin@main')
client = MongoClient('mongodb://kevin:eHAdpMJze8XubCUWGXo@23.239.14.16:27017/main')
db = client['main']


def aggregator_storeobject(item):
    collection = db['aggregator_' + item]
    cursor = list(collection.find().sort('ts', -1).limit(1))
    # print(cursor)

    cursor_readable = []
    for element in cursor:
        element['text'] = []
        element['image'] = ''
        element['url'] = ''
        element['authors'] = []
        cursor_readable.append(element)

    print(cursor_readable)
    last_id = cursor[0]['twitterid']

    twitter_list_target = 'usasociety'
    if item == 'usasociety':
        twitter_list_target = 'usa-society1'
    elif item == 'trumptimemachine':
        twitter_list_target = 'usa-ttm'

    if len(cursor):
        print('Found latest twitter id from the collection: {0} {1}'.format(last_id, twitter_list_target))
        origin_data = aggregator(twitter_list_target, last_id)
    else:
        print('The collection is empty, fetching the last 50 tweets available...')
        origin_data = aggregator(twitter_list_target)

    if len(origin_data[1]):
        print(origin_data[1])
        result = collection.insert_many(origin_data[1])
        print('DB Insert result: {0}'.format(result))
        print('DB Insert result ids: {0}'.format(result.inserted_ids))
    else:
        print('Empty result returned from aggregator; finished.')

