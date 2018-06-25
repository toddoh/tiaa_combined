
    data_path = tfidfpath
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

    maxit = 200
    if type == 'today':
        maxit = 500
    elif type == 'trumpsaid':
        maxit = 500

    for kval in range_n_clusters:
        km = KMeans(n_clusters=kval, init='k-means++', max_iter=maxit)
        km.fit(data2D)
        km_err.append(km.inertia_)

    km_df = pd.DataFrame({"num_clusters": range_n_clusters, "cluster_errors": km_err})
    plt.figure(figsize=(12, 6))
    elbow_data = plt.plot(km_df.num_clusters, km_df.cluster_errors, marker="o")

    if type == 'today':
        seg_threshold = 0.97 # Set this to your desired target
    else:
        seg_threshold = 0.99  # Set this to your desired target

    # The angle between three points
    def segments_gain(p1, v, p2):
        vp1 = np.linalg.norm(p1 - v)
        vp2 = np.linalg.norm(p2 - v)
        p1p2 = np.linalg.norm(p1 - p2)
        return np.arccos((vp1 ** 2 + vp2 ** 2 - p1p2 ** 2) / (2 * vp1 * vp2)) / np.pi

    # Normalize the data
    criterion = np.array(km_df.cluster_errors)
    criterion = (criterion - criterion.min()) / (criterion.max() - criterion.min())

    # Compute the angles
    seg_gains = np.array([0, ] + [segments_gain(*[np.array([range_n_clusters[j], criterion[j]])
                                                  for j in range(i - 1, i + 2)])
                                  for i in range(len(range_n_clusters) - 2)] + [np.nan, ])

    # Get the first index satisfying the threshold
    kIdx = np.argmax(seg_gains > seg_threshold)
    plt.plot(km_df.num_clusters[kIdx], km_df.cluster_errors[kIdx], marker="o", markersize=12,
     markeredgewidth=2, markeredgecolor='r', markerfacecolor='None')

    kIdx += 1
    plt.savefig(tfidfpath + 'elbow_plot.png')

    # plt.show()

    print('Found optimal k value: {0}'.format(kIdx))
