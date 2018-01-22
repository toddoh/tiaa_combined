from monthly.unit_monthly import sort_articles_month
import sys
import argparse

def init_task(type):
    if type == 'trumpsaid':
        collection_list = ['trumpsaid']
        for item in collection_list:
            sort_articles_month(item, 'trumpsaid', 90000009)


# 168hr is 1 week

## run task
parser = argparse.ArgumentParser()
parser.add_argument("--target", help="run interpreter for provided target")
args = parser.parse_args()

orig_stdout = sys.stdout
f = open('./logs/action_mon_clustering_' + vars(args)['target'] + '.txt', 'w')
sys.stdout = f

print(vars(args), vars(args)['target'])

if vars(args)['target'] != '':
    init_task(vars(args)['target'])
else:
    print('Clustering init: No argument provided, finished with none.')


sys.stdout = orig_stdout
f.close()