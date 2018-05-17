# Scrapy settings for dirbot project
# -*- coding: utf-8 -*-
SPIDER_MODULES = ['dirbot.spiders']
NEWSPIDER_MODULE = 'dirbot.spiders'
DEFAULT_ITEM_CLASS = 'dirbot.items.Movie'

ITEM_PIPELINES = {'dirbot.pipelines.FilterWordsPipeline': 1}

#禁止cookies,防止被ban
COOKIES_ENABLED = False
