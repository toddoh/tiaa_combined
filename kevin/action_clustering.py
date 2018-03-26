from unit_cluster import cluster_articles
from unit_cluster import cluster_articles_offline
import sys
import argparse

def init_task(type):
    if type == 'today':
        collection_list = ['usasociety']
        for item in collection_list:
            cluster_articles(item, 'today', 24)
    elif type == 'theyear':
        collection_list = ['theyear']
        for item in collection_list:
            cluster_articles(item, 'theyear', 90000001)
    elif type == 'trumpsaid':
        collection_list = ['trumpsaid']
        for item in collection_list:
            cluster_articles(item, 'trumpsaid', 90000009)


# 168hr is 1 week

## run task
parser = argparse.ArgumentParser()
parser.add_argument("--target", help="run interpreter for provided target")
args = parser.parse_args()

orig_stdout = sys.stdout
f = open('./logs/action_clustering_' + vars(args)['target'] + '.txt', 'w')
sys.stdout = f

print(vars(args), vars(args)['target'])

if vars(args)['target'] != '':
    init_task(vars(args)['target'])
else:
    print('Clustering init: No argument provided, finished with none.')


sys.stdout = orig_stdout
f.close()