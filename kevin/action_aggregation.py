from unit_aggregator import aggregator_storeobject
import sys
import argparse

# today section
def today():
    collection_list = ['usasociety']
    for item in collection_list:
        aggregator_storeobject(item)


# theyear section
def theyear():
    collection_list = ['theyear']
    for item in collection_list:
        aggregator_storeobject(item)


# trumpsaid section
def trumpsaid():
    collection_list = ['trumpsaid']
    for item in collection_list:
        aggregator_storeobject(item)


## run task
parser = argparse.ArgumentParser()
parser.add_argument("--target", help="run aggregator for provided target")
args = parser.parse_args()

orig_stdout = sys.stdout
f = open('./logs/action_aggregation_' + vars(args)['target'] + '.txt', 'w')
sys.stdout = f

print(vars(args), vars(args)['target'])
if vars(args)['target'] == 'theyear':
    theyear()
elif vars(args)['target'] == 'today':
    today()
elif vars(args)['target'] == 'trumpsaid':
    trumpsaid()
else:
    print('No argument provided, finished with none.')

sys.stdout = orig_stdout
f.close()