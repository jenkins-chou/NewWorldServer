# -*- coding: utf-8 -*-
from scrapy.spiders import Spider
from scrapy.selector import Selector
from scrapy.http import Request
from dirbot.items import Mv


class DmozSpider(Spider):
    name = "itanzi"
    #allowed_domains = ["https://www.80s.tw"]
    start_urls = [
        "file:///C:/Users/zhouzhenjian/Desktop/mv.html",
    ]

    def parse(self, response):
        sel = Selector(response)
        urls = sel.css('video.rh5v-DefaultPlayer_video source::attr(src)').extract()
        images = sel.css('video.rh5v-DefaultPlayer_video::attr(poster)').extract()
        names = sel.css('h1.jss279::text').extract()
        counts = sel.css('span.jss282::text').extract()

        print len(urls)
        print len(images)
        print len(names)
        print len(counts)

        i = 0
        while i<len(urls):
            item = Mv()
            item['url'] = urls[i]
            item['image'] = images[i]
            item['name'] = names[i]
            item['count'] = counts[i]
            i = i+1
            print item
            yield item





