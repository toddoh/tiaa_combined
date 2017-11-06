import csv
import re
import pickle
from aggregator_twitter import aggregator
import json
import jsonpickle
from pymongo import MongoClient

def chunks(l, n):
    # For item i in a range that is a length of l,
    for i in range(0, len(l), n):
        # Create an index range for l of n items:
        yield l[i:i + n]


def split(a, n):
    k, m = divmod(len(a), n)
    return (a[i * k + min(i, m):(i + 1) * k + min(i + 1, m)] for i in range(n))


def read_parse_csv(source_origin):
    print('Reading fetched csv data...')
    filename = './TrumpTimeMachine_datasets/output_' + source_origin + '_1026to1031.csv'
    reader = csv.DictReader(open(filename), delimiter=';')
    csv_tweets = []

    for line in reader:
        url_string = re.findall(r'(https?://[^\s]+)', line['text'])
        if url_string:
            url_string_filtered = re.sub('\\xa0$', '', url_string[0])
            if 'twitter.com/' in url_string_filtered:
                print('Skips item: social channel')
            else:
                line_converted = dict(line)
                data = {}

                data['twitterid'] = line_converted['id']
                data['origin'] = source_origin
                data['url'] = url_string_filtered
                data['ts'] = line_converted['date']
                url_duplicate_check = []
                for item in csv_tweets:
                    if item['url'] == url_string_filtered:
                        url_duplicate_check.append(item)

                if len(url_duplicate_check) > 0:
                    print('Fetch process: there seems one or more duplicated url in the dataset: ')
                    print(url_duplicate_check)
                else:
                    csv_tweets.append(data)


    final_csv_tweets = csv_tweets[::-1]
    print('Successfully fetched csv data, total length: {0}'.format(len(final_csv_tweets)))
    # print(csv_tweets[::-1])

    origin_data = aggregator(None, None, 'direct', final_csv_tweets)
    try:
        pkl_filename = './dataset/dataset_' + source_origin + '_1031_db.pkl'
        pkl_c_filename = './dataset/dataset_' + source_origin + '_1031_cluster.pkl'
        with open(pkl_filename, 'wb') as f:
            pickle.dump(origin_data[1], f, pickle.HIGHEST_PROTOCOL)
        print('Fetched origin data stored in {0} for mongodb'.format(pkl_filename))

        with open(pkl_c_filename, 'wb') as f:
            pickle.dump(origin_data[0], f, pickle.HIGHEST_PROTOCOL)
            print('Fetched origin data stored in {0} for clustering'.format(pkl_c_filename))
        print(len(origin_data))

        print('Initiating dataset reader...')
        with open(pkl_filename, 'rb') as handle:
            unserialized_data = pickle.load(handle)

        print('Fetched pickled dataset: total length: {0}'.format(len(unserialized_data)))
        # print(unserialized_data)

        print('Initiating aggregator unit...')
        print('Setting up MongoClient kevin@main')
        client = MongoClient('mongodb://kevin:eHAdpMJze8XubCUWGXo@23.239.14.16:27017/main')
        db = client['main']

        collection = db['aggregator_trumptimemachine']

        json_converted = jsonpickle.encode(unserialized_data)

        print('Saving data into mongodb...')
        result = collection.insert_many(json.loads(json_converted))
        print('DB Insert result: {0}'.format(result))
        print('DB Insert result ids: {0}'.format(result.inserted_ids))
    except Exception as e:
        print('There was a problem saving data into a dataset file: ')
        print(origin_data)


read_parse_csv('newshour')