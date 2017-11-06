import gensim
import os
import re
from nltk.tokenize import RegexpTokenizer
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from gensim.models.doc2vec import TaggedDocument


def get_doc_list(folder_name):
    doc_list = []
    file_list = [folder_name + '/' + name for name in os.listdir(folder_name) if name.endswith('txt')]
    for file in file_list:
        st = open(file, 'r').read()
        doc_list.append(st)
    print('Found %s documents under the dir %s .....' % (len(file_list), folder_name))
    return doc_list


def get_doc():
    from aggregator_html import retrieveText
    policysentence = retrieveText()

    tokenizer = RegexpTokenizer(r'\w+')
    en_stop = set(stopwords.words("english"))
    p_stemmer = PorterStemmer()

    taggeddoc = []

    texts = []
    # for tagged doc
    wordslist = []
    tagslist = []

    # clean and tokenize document string
    raw = ' '.join(policysentence).lower()
    tokens = tokenizer.tokenize(raw)

    # remove stop words from tokens
    stopped_tokens = [i for i in tokens if not i in en_stop]

    # remove numbers
    number_tokens = [re.sub(r'[\d]', ' ', i) for i in stopped_tokens]
    number_tokens = ' '.join(number_tokens).split()

    # stem tokens
    stemmed_tokens = [p_stemmer.stem(i) for i in number_tokens]
    # remove empty
    length_tokens = [i for i in stemmed_tokens if len(i) > 1]
    # add tokens to list
    texts.append(length_tokens)

    td = TaggedDocument(gensim.utils.to_unicode(str.encode(' '.join(stemmed_tokens))).split(), 1)
    taggeddoc.append(td)

    return taggeddoc


import gensim

documents = get_doc()
print('Data Loading finished')

print(len(documents), type(documents))

# build the model
model = gensim.models.Doc2Vec(documents, dm=0, alpha=0.025, size=20, min_alpha=0.025, min_count=0)

# start training
for epoch in range(200):
    if epoch % 20 == 0:
        print('Now training epoch %s' % epoch)
    model.train(documents)
    model.alpha -= 0.002  # decrease the learning rate
    model.min_alpha = model.alpha  # fix the learning rate, no decay

# shows the similar words
print(model.most_similar('suppli'))

# shows the learnt embedding
print(model['suppli'])

# shows the similar docs with id = 2
print(model.docvecs.most_similar(str(2)))