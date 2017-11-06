import json
from pprint import pprint
import numpy as np

import gensim
import nltk
# nltk.download('popular')
from nltk.corpus import stopwords
from nltk.util import ngrams
import re
from collections import Counter

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from sklearn.metrics import adjusted_rand_score
from nltk.stem.snowball import SnowballStemmer
from nltk.tag.stanford import CoreNLPNERTagger

#read json data
from aggregator_html import retrieveText

policysentence = retrieveText()

stops = set(stopwords.words("english"))
stops.add('0001president')
stops.add('thank')
stops.add('inaudible')
stops.add('0002reporter')

#train model
def textCleaning(data, remove_stopwords=True):
    words = data.lower().split()

    if remove_stopwords:
        words = [w for w in words if w not in stops and not w.isdigit()]

    return(words)

tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')

def ConvertSentences(data, tokenizer, remove_stopwords=True):
    raw_sentences = tokenizer.tokenize(data.strip())

    sentences = []
    for raw_sentence in raw_sentences:
        # If a sentence is empty, skip it
        if len(raw_sentence) > 0:
            # Otherwise, call review_to_wordlist to get a list of words
            sentences.append(textCleaning(raw_sentence, remove_stopwords))

    return sentences

sentencesReadyVectorizing = []

print("Parsing sentences from the dataset")
for item in policysentence:
    sentencesReadyVectorizing += ConvertSentences(item, tokenizer)

print("### Length info: vectorized sentences")
print(len(policysentence))
print(len(sentencesReadyVectorizing))

policysentenceTransformed = []
for item in sentencesReadyVectorizing:
    policysentenceTransformed.append(' '.join(item))

vectorizer = TfidfVectorizer(sublinear_tf=True, min_df=1, analyzer='word', stop_words=stops)
X = vectorizer.fit_transform(policysentence)


true_k = 5
model = KMeans(n_clusters=true_k, init='k-means++', max_iter=100, n_init=1)
model.fit(X)

print("Top terms per cluster:")
order_centroids = model.cluster_centers_.argsort()[:, ::-1]
terms = vectorizer.get_feature_names()

for i in range(true_k):
    print("Cluster %d:" % i),
    for ind in order_centroids[i, :10]:
        print(' %s' % terms[ind])

# entity recognition
print("Extracting named-entities")

sentences = nltk.sent_tokenize(''.join(policysentence))
tokenized_sentences = [nltk.word_tokenize(sentence) for sentence in sentences]
tagged_sentences = [nltk.pos_tag(sentence) for sentence in tokenized_sentences]
chunked_sentences = nltk.ne_chunk_sents(tagged_sentences, binary=True)

def extract_entity_names(t):
    entity_names = []

    if hasattr(t, 'label') and t.label:
        if t.label() == 'NE':
            entity_names.append(' '.join([child[0] for child in t]))
        else:
            for child in t:
                entity_names.extend(extract_entity_names(child))

    return entity_names

entity_names = []
for tree in chunked_sentences:
    entity_names.extend(extract_entity_names(tree))

for name in entity_names:
    if len(re.compile('\W').split(name)) <= 1:
        check = set(list(filter(lambda x: name in x, entity_names)))
        check.remove(name)
        if len(check) == 1:
            entity_names.remove(name)
        elif len(check) >= 2:
            entity_names.remove(name)
            entity_names.extend(check)

print(set(entity_names))

# word processing
print("Processing words")

worddata = []
for item in sentencesReadyVectorizing:
    # ngramsConfig = 5
    # ngram = [item[i:i+ngramsConfig] for i in range(len(item)-ngramsConfig+1)]
    worddata_np = np.array(item)

    worddata_flatten = worddata_np.ravel()
    worddata.extend(worddata_flatten)

words_filtered = []
for item in worddata:
    if not(bool(re.match(r'^\W+$', item))):
        text = re.sub(r'(?<!\S)[^\s\w]+|[^\s\w]+(?!\S)', '', item)
        words_filtered.append(text)


grams_nostopwords = [word for word in words_filtered if word not in stops]

stemmer = SnowballStemmer("english")
stemmed_tokens = [stemmer.stem(t) for t in grams_nostopwords]

for token in sorted(set(stemmed_tokens)):
    if token.isalpha():
        if len(token) <= 1:
            stemmed_tokens.remove(token)

wordcounts = Counter(grams_nostopwords)
worddata_common = dict(wordcounts.most_common(20))
print(worddata_common.keys())

# find relevant elements from dataset
