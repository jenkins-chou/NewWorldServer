/*
* @Author: Marte
* @Date:   2018-04-25 19:40:34
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-26 17:57:58
*/

var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var mysql_setting = require('../mysql_config');
var connection = mysql.createConnection(mysql_setting);
//连接数据库
connection.connect();

router.post('/getlives', function (req, res) {
    var sql = "select * from live";
    connectDB(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});
router.post('/getlive', function (req, res) {
    var live_id = req.body.live_id;
    var sql = "select * from live where live_id = "+live_id;
    connectDB(sql,function(result){
        return res.jsonp(result);
    });
});
router.post('/addlive', function (req, res) {
    res.send("addlive");
});
router.post('/updatelive', function (req, res) {
    res.send("updatelive");
});
router.post('/deletelive', function (req, res) {
    res.send("deletelive");
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