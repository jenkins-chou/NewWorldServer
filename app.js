/*
* @Author: Marte
* @Date:   2018-04-25 17:30:36
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-25 20:09:06
*/

var express = require('express');
var app = express();
//路由列表
var live = require("./controller/live")
var video = require("./controller/video")
var user = require("./controller/user")

app.get('/', function(req,res){
    res.send('hello this is newworld app server api');
})
app.use('/live',live)
app.use('/video',video)
app.use('/user',user)


app.listen(8888)
console.log("listene port : 8888");