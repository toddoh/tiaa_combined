from unit_aggregator import aggregator_storeobject
import sys
import argparse

# today section
def today():
    collection_list = ['usasociety']
    for item in collection_list:
        aggregator_storeobject(item)


# trumptimemachine section
def trumptimemachine():
    collection_list = ['trumptimemachine']
    for item in collection_list:
        aggregator_storeobject(item)


## run task
orig_stdout = sys.stdout
f = open('./logs/action_aggregation.txt', 'w')
sys.stdout = f

parser = argparse.ArgumentParser()
parser.add_argument("--target", help="run aggregator for provided target")
args = parser.parse_args()

print(vars(args), vars(args)['target'])
if vars(args)['target'] == 'trumptimemachine':
    trumptimemachine()
elif vars(args)['target'] == 'today':
    today()
else:
    print('No argument provided, finished with none.')

sys.stdout = orig_stdout
f.close()