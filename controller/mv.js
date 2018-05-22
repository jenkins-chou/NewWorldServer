var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

router.post('/getmvs', function (req, res) {
    var start = req.body.start;
    if (start==null) {
        start = 0;
    }
    var sql = "select * from mv limit "+start+" , 20";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

router.post('/getrecommandmv', function (req, res) {
    var start = req.body.start;
    if (start==null) {
        start = 0;
    }
    var sql = "select * from mv order by mv_count desc limit "+start+" , 30";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

module.exports = router;