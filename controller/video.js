

var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

router.post('/getvideos', function (req, res) {
    var sql = "select * from video where video_del != 'delete'";
    connectDB.query(sql,function(result){
        return res.jsonp(result);
    });
    //res.send("getvideos");
});
//获取单个video数据
router.post('/getvideo', function (req, res) {
    var video_id = req.body.video_id;
    var sql = "select * from video where video_id = "+video_id+" and video_del != 'delete'";
    connectDB.query(sql,function(result){
        return res.jsonp(result);
    });
    //res.send("addvideo");
});
router.post('/addvideo', function (req, res) {
    var sql = "insert into video(video_name,video_image_url,video_url,video_watch_times,video_author_id,video_create_time,video_remark,video_del)value(?,?,?,?,?,?,?,?)";
    var sqlparams = [
        req.body.video_name,
        req.body.video_image_url,
        req.body.video_url,
        req.body.video_watch_times,
        req.body.video_author_id,
        req.body.video_create_time,
        req.body.video_remark,
        "normal"
    ]
    connectDB.add(sql,sqlparams,function(result){
        console.log(result);
        return res.jsonp(result);
    })
});
router.post('/updatevideo', function (req, res) {
    res.send("updatevideo");
});
router.post('/deletevideo', function (req, res) {
    var video_id = req.body.video_id;
    var sql = "update video set video_del = 'delete' where video_id = "+video_id;
    connectDB.delete(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    })
});
module.exports = router;