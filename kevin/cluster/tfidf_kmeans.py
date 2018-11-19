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
from scipy.sparse import csr_matrix

from sklearn.cluster import KMeans, MiniBatchKMeans
from sklearn.metrics import silhouette_samples, silhouette_score
from nltk.stem.porter import PorterStemmer
import pandas as pd
from scipy.sparse import csr_matrix
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

def vectorize_cluster(dataset, rangeMin=2, rangeMax=15, tfidfpath='./dataset/', type=None):
    stemmer = PorterStemmer()

    def stem_words(words_list, stemmer):
        return [stemmer.stem(word) for word in words_list]

    def tokenize(text):
        tokens = nltk.word_tokenize(text)
        stems = stem_words(tokens, stemmer)
        return stems

    cachedStopWords = set(stopwords.words("english"))
    if type == 'trumpsaid':
        cachedStopWords.update(['great', 'MAGA', 'America', 'make', 'American', '...', 'Trump', 'Thank', 'country'])
    else:
        cachedStopWords.update(['periscope', 'pbs', 'newshour', 'npr', 'watch', 'bloomberg'])


    print('TFIDF_KMEANS: Extracting features from the dataset')
    t0 = time()
    n_features = 1000
    hasher = HashingVectorizer(n_features=n_features, stop_words=cachedStopWords, norm=None, binary=False)
    vectorizer = make_pipeline(hasher, TfidfTransformer())

    if type == 'trumpsaid':
        X = vectorizer.fit_transform(dataset)
    else:
        X = vectorizer.fit_transform(dataset.values())

    print("TFIDF_KMEANS: Extraction done in %fs" % (time() - t0))
    print(" n_samples: %d, n_features: %d" % X.shape)
    print()

    print("TFIDF_KMEANS: LSA Dimension reduction")

    n_components = 50
    t0 = time()
    svd = TruncatedSVD(n_components)
    normalizer = Normalizer(copy=False)
    lsa = make_pipeline(svd, normalizer)

    X = lsa.fit_transform(X)
    print("TFIDF_KMEANS: Reduction done in %fs" % (time() - t0))

    explained_variance = svd.explained_variance_ratio_.sum()
    print("TFIDF_KMEANS: Explained variance of the SVD step: {}%".format(int(explained_variance * 100)))
    print()

    verbose = False
    print("TFIDF_KMEANS: Finding the best n_clusters value by running MinibatchKmeans...")
    range_n_clusters = range(rangeMin, rangeMax)
    range_n_clusters_km = []
    for range_k in range_n_clusters:
        km = MiniBatchKMeans(n_clusters=range_k, init='k-means++', batch_size=100, verbose=verbose)

        print(" Finding the best n_clusters - Clustering sparse data with %s" % km)
        t0 = time()
        km.fit_predict(X)

        # The silhouette_score gives the average value for all the samples.
        # This gives a perspective into the density and separation of the formed
        # clusters
        silhouette_avg = silhouette_score(X, km.labels_)
        print(" Finding the best n_clusters - sparse data done in %0.3fs" % (time() - t0))
        print(' Finding the best n_clusters: {0}'.format(range_k))
        print(" Silhouette Coefficient: %0f" % silhouette_avg)
        if silhouette_avg <= 0.1:
            range_n_clusters_km.append(silhouette_avg)

        print()

    range_n_clusters_km_index_max = max(range(len(range_n_clusters_km)), key=range_n_clusters_km.__getitem__)
    km_optimal = range_n_clusters[range_n_clusters_km_index_max]
    print('TFIDF_KMEANS: Found optimal n_clusters: {0}'.format(km_optimal))

    km_final = MiniBatchKMeans(n_clusters=km_optimal, init='k-means++', batch_size=100, verbose=verbose)

    print("TFIDF_KMEANS: Clustering sparse data with %s" % km_final)
    t0 = time()
    km_final.fit(X)
    km_final_t = time() - t0
    print(" done in %0.3fs" % (time() - t0))
    print(" Silhouette Coefficient: %0.3f" % metrics.silhouette_score(X, km_final.labels_))
    print()


    fig = plt.figure(figsize=(8, 3))
    plt.scatter(X[:,0], X[:,1], c=km_final.labels_, cmap=plt.cm.Paired)

    plt.savefig('kmeans.png')

    cluster_assignments_dict = {}

    for i in set(km_final.labels_):
        if type == 'trumpsaid':
            current_cluster_bills = [list(dataset)[x] for x in np.where(km_final.labels_ == i)[0]]
        else:
            current_cluster_bills = [list(dataset.keys())[x] for x in np.where(km_final.labels_ == i)[0]]
        cluster_assignments_dict[i] = current_cluster_bills

    def clean_text(raw_text):
        letters_only = re.sub('[^a-zA-Z]', ' ', str(raw_text))
        words = letters_only.lower().split()
        useful_words = [x for x in words if x not in cachedStopWords]

        useful_words_string = ' '.join(useful_words)
        return useful_words_string

    cluster_themes_dict = {}
    for key in cluster_assignments_dict.keys():
        current_tfidf = TfidfVectorizer(tokenizer=tokenize, stop_words=cachedStopWords)
        current_tfs = current_tfidf.fit_transform(map(clean_text, cluster_assignments_dict[key]))

        current_tf_idfs = dict(zip(current_tfidf.get_feature_names(), current_tfidf.idf_))
        tf_idfs_tuples = current_tf_idfs.items()
        cluster_themes_dict[key] = sorted(tf_idfs_tuples, key=lambda x: x[1])[:5]
    # print('Random Cluster {0} key words: {1}'.format(cluster_pick, [x[0] for x in cluster_themes_dict[cluster_pick]]))

    return cluster_themes_dict, cluster_assignments_dict