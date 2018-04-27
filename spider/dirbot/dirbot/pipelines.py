# -*- coding: utf-8 -*-
from scrapy.exceptions import DropItem
import codecs
import json

class FilterWordsPipeline(object):
    """A pipeline for filtering out items which contain certain words in their
    description"""

    # put all words in lowercase
    def __init__(self):
        self.file = codecs.open('data.json', mode='wb', encoding='utf-8')

    def process_item(self, item, spider):
        line = json.dumps(dict(item)) + '\n'
        self.file.write(line.decode("unicode_escape")) #写入文件

        return item


