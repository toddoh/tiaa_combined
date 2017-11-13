from aggregator_twitter import aggregator
from pymongo import MongoClient
import datetime
from datetime import timezone

print('Initiating aggregator unit...')
print('Setting up MongoClient kevin@main')
client = MongoClient('mongodb://kevin:eHAdpMJze8XubCUWGXo@23.239.14.16:27017/main')
db = client['main']


collection = db['aggregator_' + 'trumptimemachine']
cursor = list(collection.find({}).sort([('ts', -1)]).limit(170))

cursorids = []
for element in cursor:
    print(element)
    cursorids.append(element['_id'])


result = collection.remove({'_id': { '$in': cursorids} })

print('DB Op result: {0}'.format(result))
