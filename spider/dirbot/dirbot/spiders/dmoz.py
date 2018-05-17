# -*- coding: utf-8 -*-
from scrapy.spiders import Spider
from scrapy.selector import Selector
from scrapy.http import Request
from dirbot.items import Movie


class DmozSpider(Spider):
    name = "80s"
    #allowed_domains = ["https://www.80s.tw"]
    start_urls = [
        "https://www.80s.tw/movie/list",
    ]

    def parse(self, response):
        sel = Selector(response)
        urls = sel.css('ul.me1 li a::attr(href)').extract()
        for url in urls:
            url = "https://www.80s.tw"+ url
            print "----------------------------"+url
            yield Request(url, callback=self.getMovie)

        nextPager = sel.css('div.pager a::attr(href)').extract()
        nextPageUrl = "https://www.80s.tw" + nextPager[len(nextPager)-2]
        #print "----------------------"+nextPageUrl
        yield Request(nextPageUrl,callback=self.parse)

    def getMovie(self, response):
        sel = Selector(response)
        item = Movie()
        #print "------------"+sel.css('span.dlbutton2 a::attr(src)').extract()
        item['name'] = sel.css('h1.font14w::text')[0].extract()#名称
        item['less_intro'] = sel.css('div.info>span')[0].css('span::text').extract()#简介
        item['other_name'] = sel.css('div.info>span')[1].css('::text')[2].extract()#又名
        item['actor'] = sel.css('div.info>span')[2].css('a::text').extract()#演员
        item['type'] = sel.css('div.info>div')[0].css('span')[0].css('a::text')[0].extract()#类型
        item['area'] = sel.css('div.info>div>span')[1].css('a::text')[0].extract()#地区
        item['language'] = sel.css('div.info>div>span')[2].css('a::text')[0].extract()#语言
        item['director'] = sel.css('div.info>div>span')[3].css('a::text')[0].extract()#导演
        item['putaway_time'] = sel.css('div.info>div>span')[4].css('::text')[1].extract()#上架时间
        item['film_length'] = sel.css('div.info>div>span')[5].css('::text')[1].extract()#片长
        item['update_time'] = sel.css('div.info>div>span')[6].css('::text')[1].extract()#更新时间
        item['grade'] = sel.css('div.info>div')[1].css('span::text')[3].extract()#豆瓣评分
        item['intro'] = sel.css('div.info>div')[2].css('::text')[2].extract()#剧情
        item['image'] = sel.css('div.img img::attr(src)')[0].extract()#图片路径
        item['url'] = sel.css('span.dlbutton2 a::attr(src)')[0].extract()#获取url
        #print "---------"+item['url']
        yield item
