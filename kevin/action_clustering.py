from unit_cluster import cluster_articles

# today section
def today():
    collection_list = ['usasociety']
    for item in collection_list:
        cluster_articles(item)


# trumptimemachine section
def trumptimemachine():
    collection_list = ['trumptimemachine']
    for item in collection_list:
        cluster_articles(item, 'unlimited')


## run task

trumptimemachine()