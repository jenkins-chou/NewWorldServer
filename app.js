/*
* @Author: Marte
* @Date:   2018-04-25 17:30:36
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-25 18:07:57
*/

var express = require('express');
var app = express();
//路由列表
var routertest =  require("./controller/routertest");
var test = require('./controller/test');

app.get('/', function(req,res){
    res.send('hello');
})
app.use('/routertest', routertest)
app.use('/test',test)


app.listen(8888)
console.log("listene port : 8888");