from __future__ import division
import matplotlib
matplotlib.use('Agg')

import nltk
from nltk.corpus import stopwords
import re
import os
from time import time
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import HashingVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.pipeline import make_pipeline
from sklearn.decomposition import TruncatedSVD
from sklearn.preprocessing import Normalizer
from sklearn import metrics

from sklearn.cluster import KMeans, MiniBatchKMeans
from nltk.stem.porter import PorterStemmer
import pandas as pd
from scipy.sparse import csr_matrix
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

def parse_aggregated(data, rangeMin=2, rangeMax=21, tfidfpath='./dataset/', type=None):
    stemmer = PorterStemmer()

    def stem_words(words_list, stemmer):
        return [stemmer.stem(word) for word in words_list]

    def tokenize(text):
        tokens = nltk.word_tokenize(text)
        stems = stem_words(tokens, stemmer)
        return stems

    parsed_article = data
    cachedStopWords = set(stopwords.words("english"))
    # add custom words
    if type == 'trumpsaid':
        cachedStopWords.update(['great', 'MAGA', 'America', 'make', 'American', '...', 'Trump', 'Thank', 'country'])
    else:
        cachedStopWords.update(['periscope', 'pbs', 'newshour', 'npr', 'watch'])


    print('Extracting features from the dataset -- hashingvectorizer')
    t0 = time()
    n_features = 50000
    hasher = HashingVectorizer(n_features=n_features,
                                   stop_words=cachedStopWords, non_negative=True,
                                   norm=None, binary=False)
    vectorizer = make_pipeline(hasher, TfidfTransformer())

    if type == 'trumpsaid':
        X = vectorizer.fit_transform(parsed_article)
    else:
        X = vectorizer.fit_transform(parsed_article.values())

    print("Extraction done in %fs" % (time() - t0))
    print("Vectorizer n_samples: %d, n_features: %d" % X.shape)
    print()

    X2 = X

    print("Dimension reduction -- LSA")
    n_components = 100
    t0 = time()
    svd = TruncatedSVD(n_components)
    normalizer = Normalizer(copy=False)
    lsa = make_pipeline(svd, normalizer)

    X = lsa.fit_transform(X)
    print("Reduction done in %fs" % (time() - t0))

    explained_variance = svd.explained_variance_ratio_.sum()
    print("Explained variance of the SVD step: {}%".format(int(explained_variance * 100)))
    print()

    verbose = False
    print("Finding the best n_clusters value by running MinibatchKmeans...")
    range_n_clusters = range(rangeMin, rangeMax)
    range_n_clusters_km = []
    for range_k in range_n_clusters:
        km = MiniBatchKMeans(n_clusters=range_k, init='k-means++', n_init=1, init_size=1000, batch_size=1000, verbose=verbose)

        print("Finding the best n_clusters - Clustering sparse data with %s" % km)
        t0 = time()
        km.fit(X)
        print("Finding the best n_clusters - sparse data done in %0.3fs" % (time() - t0))
        print('Finding the best n_clusters: {0}'.format(range_k))
        print("Silhouette Coefficient: %0.3f"
            % metrics.silhouette_score(X, km.labels_, sample_size=1000))
        range_n_clusters_km.append(metrics.silhouette_score(X, km.labels_, sample_size=1000))
        print()

    range_n_clusters_km_index_max = max(range(len(range_n_clusters_km)), key=range_n_clusters_km.__getitem__)
    km_optimal = range_n_clusters[range_n_clusters_km_index_max]
    print('Found optimal n_clusters: {0}'.format(km_optimal))

    km_final = MiniBatchKMeans(n_clusters=km_optimal, init='k-means++', n_init=1, init_size=1000, batch_size=1000, verbose=verbose)
    # km = KMeans(n_clusters=true_k, init='k-means++', max_iter=100, n_init=1, verbose=1)

    print("Clustering sparse data with %s" % km_final)
    t0 = time()
    km_final.fit(X)
    print("done in %0.3fs" % (time() - t0))
    print("Silhouette Coefficient: %0.3f" % metrics.silhouette_score(X, km_final.labels_, sample_size=1000))
    print()

    ###

    print('Calculating cosine distance...')
    from sklearn.neighbors import NearestNeighbors
    model_tf_idf = NearestNeighbors(metric='cosine', algorithm='brute')
    model_tf_idf.fit(X2)

    def print_nearest_neighbors(query_tf_idf, full_article_dictionary, knn_model, id, k):
        print('Finding nearest articles from {0}...'.format(id))
        distances, indices = knn_model.kneighbors(query_tf_idf, n_neighbors=k + 1)
        nearest_neighbors = [list(full_article_dictionary.keys())[x] for x in indices.flatten()]
        print(full_article_dictionary.keys())
        for bill in range(len(nearest_neighbors)):
            if bill == 0:
                print('Find nearest articles: {0}\n'.format(nearest_neighbors[bill]))
            else:
                print('N_N {0}: {1}'.format(bill, nearest_neighbors[bill]))

    bill_id = np.random.choice(X2.shape[0])
    print_nearest_neighbors(X2[bill_id], parsed_article, model_tf_idf, bill_id, k=km_optimal)

    ###

    cluster_assignments_dict = {}

    for i in set(km_final.labels_):
        #print i
        if type == 'trumpsaid':
            current_cluster_bills = [list(parsed_article)[x] for x in np.where(km_final.labels_ == i)[0]]
        else:
            current_cluster_bills = [list(parsed_article.keys())[x] for x in np.where(km_final.labels_ == i)[0]]
        cluster_assignments_dict[i] = current_cluster_bills

    def clean_text(raw_text):
        letters_only = re.sub('[^a-zA-Z]', ' ', str(raw_text))
        words = letters_only.lower().split()
        stopwords_eng = set(stopwords.words("english"))
        useful_words = [x for x in words if x not in cachedStopWords]

        # Combine words into a paragraph again
        useful_words_string = ' '.join(useful_words)
        return useful_words_string

    cluster_themes_dict = {}
    for key in cluster_assignments_dict.keys():
        current_tfidf = TfidfVectorizer(tokenizer=tokenize, stop_words=cachedStopWords)
        current_tfs = current_tfidf.fit_transform(map(clean_text, cluster_assignments_dict[key]))

        current_tf_idfs = dict(zip(current_tfidf.get_feature_names(), current_tfidf.idf_))
        tf_idfs_tuples = current_tf_idfs.items()
        cluster_themes_dict[key] = sorted(tf_idfs_tuples, key=lambda x: x[1])[:7]
    # print('Random Cluster {0} key words: {1}'.format(cluster_pick, [x[0] for x in cluster_themes_dict[cluster_pick]]))

    return cluster_themes_dict, cluster_assignments_dict