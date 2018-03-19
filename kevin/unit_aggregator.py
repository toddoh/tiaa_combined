from aggregator_twitter import aggregator
from pymongo import MongoClient
import datetime
from datetime import timezone
import sys
import re


def aggregator_storeobject(item):
    orig_stdout = sys.stdout
    f = open('./logs/aggregator_' + item + '.txt', 'w')
    sys.stdout = f

    print('Initiating aggregator unit...')
    print('Setting up MongoClient kevin@main')
    client = MongoClient('mongodb://kevin:eHAdpMJze8XubCUWGXo@localhost:27017/main')
    db = client['main']

    twitter_list_target = 'usasociety'
    if item == 'usasociety':
        twitter_list_target = 'usa-society1'
    elif item == 'theyear':
        twitter_list_target = 'usa-publicfunded'
    elif item == 'trumpsaid':
        twitter_list_target = 'usa-trump'

    collection = db['aggregator_' + item]
    if len(list(collection.find({}))):
        cursor = list(collection.find().sort('ts', -1).limit(1))
        print(cursor)
    else:
        cursor = []

    if len(cursor):
        last_id = cursor[0]['twitterid']
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

    sys.stdout = orig_stdout
    f.close()
