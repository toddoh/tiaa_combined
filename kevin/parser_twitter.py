from __future__ import division
import nltk
from nltk.corpus import stopwords
import re
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from nltk.stem.porter import PorterStemmer
import pandas as pd
from scipy.sparse import csr_matrix
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt


def parse_aggregated(data, rangeMin=2, rangeMax=21):
    stemmer = PorterStemmer()

    def stem_words(words_list, stemmer):
        return [stemmer.stem(word) for word in words_list]

    def tokenize(text):
        tokens = nltk.word_tokenize(text)
        stems = stem_words(tokens, stemmer)
        return stems

    parsed_article = data

    print('Calculating tf-idf vectors...')
    tfidf = TfidfVectorizer(tokenizer=tokenize, stop_words='english')
    tfs = tfidf.fit_transform(parsed_article.values())

    def save_sparse_csr(filename,array):
        np.savez(filename,data = array.data ,indices=array.indices,
                 indptr =array.indptr, shape=array.shape )
        print('Stored article tf-idf data')

    def load_sparse_csr(filename):
        loader = np.load(filename)
        return csr_matrix((loader['data'], loader['indices'], loader['indptr']),
                             shape = loader['shape'])

    data_path = 'dataset/'
    save_sparse_csr(data_path + 'articles_tf_idf.npz', tfs)

    # print('Calculating cosine distance...')
    # model_tf_idf = NearestNeighbors(metric='cosine', algorithm='brute')
    # model_tf_idf.fit(tfs)

    def print_nearest_neighbors(query_tf_idf, full_article_dictionary, knn_model, k):
        print('Finding nearest articles from {0}...'.format(query_tf_idf))
        distances, indices = knn_model.kneighbors(query_tf_idf, n_neighbors=k + 1)
        nearest_neighbors = [list(full_article_dictionary.keys())[x] for x in indices.flatten()]

        for bill in range(len(nearest_neighbors)):
            if bill == 0:
                print('Find nearest articles: {0}\n'.format(nearest_neighbors[bill]))
            else:
                print('N_N {0}: {1}'.format(bill, nearest_neighbors[bill]))

    # bill_id = np.random.choice(tfs.shape[0])
    # print_nearest_neighbors(tfs[bill_id], parsed_article, model_tf_idf, k=15)

    print('Determining k-means clusters...')
    tfs = load_sparse_csr(data_path + 'articles_tf_idf.npz')

    # kval = 10
    range_n_clusters = range(rangeMin, rangeMax)
    km_err = []
    pca = PCA(n_components=2).fit(tfs.todense())
    data2D = pca.transform(tfs.todense())

    for kval in range_n_clusters:
        km = KMeans(n_clusters=kval, init='k-means++')
        km.fit(data2D)
        km_err.append(km.inertia_)

    km_df = pd.DataFrame({"num_clusters": range_n_clusters, "cluster_errors": km_err})
    plt.figure(figsize=(12, 6))
    elbow_data = plt.plot(km_df.num_clusters, km_df.cluster_errors, marker="o")

    # elbow_xvalues = elbow_data[0].get_xdata()
    # elbow_yvalues = elbow_data[0].get_ydata()
    # elbow_idx = np.where(elbow_yvalues >= 9) and np.where(elbow_yvalues <= 12)
    plt.savefig('./dataset/elbow_plot.png')
    # print(elbow_idx)
    plt.show()
    k_final_val = int(input('Provide the elbow value for k and press enter: '))
    print('Found optimal k value: {0}'.format(k_final_val))

    km_final = KMeans(n_clusters=k_final_val, init='k-means++', max_iter=100, n_init=5, verbose=1)
    km_final.fit(tfs)

    cluster_assignments_dict = {}

    for i in set(km_final.labels_):
        #print i
        current_cluster_bills = [list(parsed_article.keys())[x] for x in np.where(km_final.labels_ == i)[0]]
        cluster_assignments_dict[i] = current_cluster_bills

    def clean_text(raw_text):
        letters_only = re.sub('[^a-zA-Z]', ' ', str(raw_text))
        words = letters_only.lower().split()
        stopwords_eng = set(stopwords.words("english"))
        useful_words = [x for x in words if x not in stopwords_eng]

        # Combine words into a paragraph again
        useful_words_string = ' '.join(useful_words)
        return useful_words_string

    cluster_themes_dict = {}
    for key in cluster_assignments_dict.keys():
        current_tfidf = TfidfVectorizer(tokenizer=tokenize, stop_words='english')
        current_tfs = current_tfidf.fit_transform(map(clean_text, cluster_assignments_dict[key]))

        current_tf_idfs = dict(zip(current_tfidf.get_feature_names(), current_tfidf.idf_))
        tf_idfs_tuples = current_tf_idfs.items()
        cluster_themes_dict[key] = sorted(tf_idfs_tuples, key=lambda x: x[1])[:15]
    # print('Random Cluster {0} key words: {1}'.format(cluster_pick, [x[0] for x in cluster_themes_dict[cluster_pick]]))

    return cluster_themes_dict, cluster_assignments_dict