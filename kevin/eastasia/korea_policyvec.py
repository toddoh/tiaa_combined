from gensim.models import KeyedVectors
model = KeyedVectors.load_word2vec_format('kor_model.vec', binary=False)

# 단어 리스트 작성
vocab = model.index2word
# 전체 단어벡터 추출
wordvectors = []
for v in vocab:
    wordvectors.append(model.wv[v])

model.most_similar('적폐', topn=30)