
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
//路由列表
var live = require("./controller/live")
var video = require("./controller/video")
var user = require("./controller/user")
var movie = require("./controller/movie")
//var urlencodedParser = bodyParser.urlencoded({extended:false})
app.use(express.static('public'));
//app.use(urlencodedParser)//这里使用 urlencodedParser方式
app.use(bodyParser.json({limit: '1mb'}));  //这里指定参数使用 json 格式

app.get('/', function(req,res){
    res.send('hello this is newworld app server api');
})

app.post('/post',function(req,res){
    console.log("params:"+req.body.params);
    res.send('hello this is post request!');
})
app.use('/live',live)
app.use('/video',video)
app.use('/user',user)
app.use('/movie',movie)

app.listen(8888)
console.log("listene port : 8888");