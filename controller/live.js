

var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

router.post('/getlives', function (req, res) {
    var sql = "select * from live where live_del != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});
router.post('/getlive', function (req, res) {
    var live_id = req.body.live_id;
    var sql = "select * from live where live_id = "+live_id +"and live_del != 'delete'";
    connectDB.query(sql,function(result){
        return res.jsonp(result);
    });
});
router.post('/addlive', function (req, res) {
    var sql = "insert into live(live_name,live_url,live_author_id,live_create_time,live_watch_time,live_status,live_del) value(?,?,?,?,?,?,?)"
    var sqlparams = [
        req.body.live_name,
        req.body.live_url,
        req.body.live_author_id,
        req.body.live_create_time,
        req.body.live_watch_time,
        req.body.live_status,
        "normal"
    ]
    connectDB.add(sql,sqlparams,function(result){
        console.log(result);
        return res.jsonp(result);
    })
});
router.post('/updatelive', function (req, res) {
    res.send("updatelive");
});

router.post('/removelive',function(req,res){
    var sql = "update live set live_status = 'stop' where live_name = '"+req.body.live_name+"'" + " and live_author_id = '"+live_author_id + "'";
    connectDB.update(sql,function(result){
        return res.jsonp(result);
    })
});
router.post('/deletelive', function (req, res) {
    var live_id = req.body.live_id;
    if (live_id==null||live_id=="") {
        return res.jsonp("live_id有误");
    }
    var sql = "update live set live_del = 'delete' where live_id = "+live_id;
    connectDB.update(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    })
});

module.exports = router;