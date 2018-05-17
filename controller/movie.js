

var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

router.post('/getmovies', function (req, res) {
    var start = req.body.start;
    if (start==null) {
        start = 0;
    }
    var sql = "select * from movie limit "+start+" , 20";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

router.post('/getMovieByType', function (req, res) {
    var type = req.body.type;
    var start = req.body.start;
    if (start==null) {
        start = 0;
    }
    if (type==null) {
        type = '喜剧';
    }
    var sql = "select * from movie where movie_type = '"+type+"' limit "+start+" , 20";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

module.exports = router;