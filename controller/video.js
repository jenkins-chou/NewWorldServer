/*
* @Author: Marte
* @Date:   2018-04-25 20:06:38
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-26 17:55:09
*/

var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var mysql_setting = require('../mysql_config');
var connection = mysql.createConnection(mysql_setting);
//连接数据库
connection.connect();
//获取全部video数据
router.post('/getvideos', function (req, res) {
    var sql = "select * from video";
    connectDB(sql,function(result){
        return res.jsonp(result);
    });
    //res.send("getvideos");
});
//获取单个video数据
router.post('/getvideo', function (req, res) {
    var video_id = req.body.video_id;
    var sql = "select * from video where video_id = "+video_id;
    connectDB(sql,function(result){
        return res.jsonp(result);
    });
    //res.send("addvideo");
});
router.post('/addvideo', function (req, res) {
    res.send("addvideo");
});
router.post('/updatevideo', function (req, res) {
    res.send("updatevideo");
});
router.post('/deletevideo', function (req, res) {
    res.send("deletevideo");
});

//连接数据库
function connectDB(sql,callback){
    console.log("use callback function");
    connection.query(sql, function (error, data) {
        console.log("error :"+error);
        if (error) {
            var result = {
                "status": "500",
                "message": "服务器错误"
            }
            callback(result);
        }
        else{
            var result = {
                "status": "200",
                "message": "success",
                data:data
            }
            callback(result);
            //
        }
    })
}
module.exports = router;