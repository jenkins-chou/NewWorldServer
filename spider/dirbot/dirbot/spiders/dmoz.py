# -*- coding: utf-8 -*-
from scrapy.spiders import Spider
from scrapy.selector import Selector
from scrapy.http import Request
from dirbot.items import Website


class DmozSpider(Spider):
    name = "dmoz"
    # allowed_domains = ["dmoz.org"]
    start_urls = [
        "http://quotes.toscrape.com/",
    ]

    def parse(self, response):
        """
        The lines below is a spider contract. For more info see:
        http://doc.scrapy.org/en/latest/topics/contracts.html

        @url http://www.dmoz.org/Computers/Programming/Languages/Python/Resources/
        @scrapes name
        """
        sel = Selector(response)
        sites = response.css('.quote')
        items = []

        for site in sites:
            item = Website()
            # item['name'] = site.css(
            #     'a > div.site-title::text').extract_first().strip()
            item['name'] = site.css(
                'span.text::text').extract_first().strip()
            item['article_url'] = site.css(
                'span > small::text ').extract_first().strip()
            items.append(item)
            print "---------"+item['name']
            yield item

        urls = sel.css('li.next > a::attr(href)').extract()
        for url in urls:
            url = "http://quotes.toscrape.com"+ url
            print "------------------------"+url
            yield Request(url, callback=self.parse)
