/*
* @Author: Marte
* @Date:   2018-04-25 17:30:36
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-25 19:45:13
*/

var express = require('express');
var app = express();
//路由列表
var routertest =  require("./controller/routertest");
var live = require("./controller/live")

app.get('/', function(req,res){
    res.send('hello this is newworld app server api');
})
app.use('/routertest', routertest)
app.use('/live',live)


app.listen(8888)
console.log("listene port : 8888");