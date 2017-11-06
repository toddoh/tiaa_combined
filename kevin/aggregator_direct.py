from __future__ import division
import twitter
from newspaper import Article, Config
import json
import re
import requests
import aiohttp
from nltk.corpus import stopwords
import time
import datetime
import math
import dateutil.parser


async def aggregator(ts=None, mode=None, data=None):
    config = Config()
    config.follow_meta_refresh = True

    async with aiohttp.get(url) as response:
        content = await response.read()
        article = newspaper.Article(url)
        article.set_html(content)
        try:
            article.parse()
        except newspaper.article.ArticleException:
            return

    def get_article_info(article, origin=None, id=None, ts=None):
        try:
            article.download()
            article.parse()

            data = {}
            if id:
                data['twitterid'] = id
            data['title'] = article.title
            data['url'] = article.url
            if origin:
                data['origin'] = origin
            if ts:
                dt = dateutil.parser.parse(ts)
                unixts = int(time.mktime(dt.timetuple()))
                data['ts'] = unixts

            if article.text:
                data['text'] = clean_text(article.text)
            else:
                data['text'] = ''

            if article.top_image:
                data['image'] = article.top_image
            if article.authors:
                data['authors'] = article.authors

            return data
        except Exception as e:
            print("Article Parse Error: ", e)

    def clean_text(raw_text):
        letters_only = re.sub('[^a-zA-Z]', ' ', raw_text)
        words = letters_only.lower().split()
        stopwords_eng = set(stopwords.words("english"))
        useful_words = [x for x in words if x not in stopwords_eng]

        # Combine words into a paragraph again
        useful_words_string = ' '.join(useful_words)
        return useful_words_string

    print('Start aggregator in {0} mode'.format(mode))
    print('Start parsing articles... This might take a while: ')
    parsed_article_title = []
    parsed_article_text = []
    parsed_article_data = []

    session = requests.Session()  # so connections are recycled

    for index, item in enumerate(data):
        resp = session.head(item['url'], allow_redirects=True)
        # print(resp.url)

        if 'twitter.com/' not in resp.url:
            parse_target = Article(item['url'], config)
            parse_data = get_article_info(parse_target, item['origin'], item['twitterid'], item['ts'])

            if parse_data:
                print('Index {0}/{1}, parsed title: {2}'.format(index, len(data), parse_data))
                parsed_article_title.append(parse_data['title'])
                parsed_article_text.append(parse_data['text'])
                parsed_article_data.append(parse_data)

    parsed_article_dict = dict(zip(parsed_article_title, parsed_article_text))
    print('Finished parsing all articles in timeline: ')

    return parsed_article_dict, parsed_article_data
