
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
//路由列表
var live = require("./controller/live")
var video = require("./controller/video")
var user = require("./controller/user")
var urlencodedParser = bodyParser.urlencoded({extended:false})
app.use(express.static('public'));
app.use(urlencodedParser)

app.get('/', function(req,res){
    res.send('hello this is newworld app server api');
})

app.post('/post',urlencodedParser,function(req,res){
    console.log("params:"+req.body.params);
    res.send('hello this is post request!');
})
app.use('/live',live)
app.use('/video',video)
app.use('/user',user)

app.listen(8888)
console.log("listene port : 8888");