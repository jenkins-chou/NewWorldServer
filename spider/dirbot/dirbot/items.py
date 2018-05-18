# -*- coding: utf-8 -*-
from scrapy.item import Item, Field


class Movie(Item):

    name = Field()#名称
    less_intro = Field()#简介
    other_name = Field()#又名
    time = Field()#时间
    actor = Field()#演员列表
    type = Field()#类型
    area = Field()#地区
    language = Field()#语言
    director = Field()#导演
    putaway_time = Field()#上架时间
    film_length = Field()#片长
    update_time = Field()#更新时间
    grade = Field()#豆瓣评分
    intro = Field()#剧情
    image = Field()#图片
    url = Field()#电影链接

class Mv(Item):

    name = Field()#名称
    url = Field()#链接
    image = Field()#图片
    count = Field()#次数



