from __future__ import division
import nltk
from nltk.corpus import stopwords
import re
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from nltk.stem.porter import PorterStemmer

from scipy.sparse import csr_matrix
from sklearn.cluster import KMeans
from sklearn.neighbors import NearestNeighbors
from scipy.spatial.distance import euclidean
import matplotlib.pyplot as plt
from sklearn.metrics import silhouette_samples, silhouette_score

from sklearn.manifold import TSNE
from sklearn.decomposition import TruncatedSVD


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

    data_path = './dataset/'
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

    mode = 'default'
    kval = 0
    if mode == 'default':
        print('Determining k-means clusters: range of clusters: 2-20')
        range_n_clusters = range(rangeMin, rangeMax)
        cluster_silhouette_scores = []

        # pca = PCA(n_components=2).fit(model_tf_idf)
        # data2D = pca.transform(model_tf_idf)

        for num_clusters in range_n_clusters:
            tfs_reduced = TruncatedSVD(n_components=num_clusters, random_state=0).fit_transform(tfs)
            tfs_embedded = TSNE(n_components=2, perplexity=40, verbose=1).fit_transform(tfs_reduced)
            # Create a subplot with 1 row and 2 columns
            fig, (ax1, ax2) = plt.subplots(1, 2)
            fig.set_size_inches(18, 7)

            # The 1st subplot is the silhouette plot
            # The silhouette coefficient can range from -1, 1 but in this example all
            # lie within [-0.1, 1]
            ax1.set_xlim([-0.1, 1])
            # The (n_clusters+1)*10 is for inserting blank space between silhouette
            # plots of individual clusters, to demarcate them clearly.
            ax1.set_ylim([0, len(tfs_embedded) + (num_clusters + 1) * 10])

            km = KMeans(n_clusters=num_clusters,
                        random_state=10)

            cluster_labels = km.fit_predict(tfs_embedded)

            # The silhouette_score gives the average value for all the samples.
            # This gives a perspective into the density and separation of the formed
            # clusters
            silhouette_avg = silhouette_score(tfs_embedded, cluster_labels)
            print('Silhouette score of cluster k value {0}: {1}'.format(num_clusters, silhouette_avg))
            cluster_silhouette_scores.append(silhouette_avg)

        max_silhouette_scores = max(cluster_silhouette_scores)
        max_silhouette_scores_i = [i for i, j in enumerate(cluster_silhouette_scores) if j == max_silhouette_scores]

        kval = max_silhouette_scores_i[0] + 2
        print(max_silhouette_scores, max_silhouette_scores_i, kval)
    else:
        kval = 10

    km = KMeans(n_clusters=kval, init='k-means++', max_iter=100, n_init=5,
                    verbose=1)
    km.fit(tfs)

    cluster_assignments_dict = {}

    for i in set(km.labels_):
        #print i
        current_cluster_bills = [list(parsed_article.keys())[x] for x in np.where(km.labels_ == i)[0]]
        cluster_assignments_dict[i] = current_cluster_bills

    # print('Randomly picked article cluster: ')
    # cluster_pick = np.random.choice(len(set(km.labels_)))
    # print('Article Cluster{0}'.format(cluster_pick))
    # print(cluster_assignments_dict[cluster_pick])

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