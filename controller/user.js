/*
* @Author: Marte
* @Date:   2018-04-25 20:07:24
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-26 17:55:17
*/

var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var mysql_setting = require('../mysql_config');

var connection = mysql.createConnection(mysql_setting);
connection.connect();
//获取所有用户数据
router.post('/getusers', function (req, res) {
    var sql = "select * from user";
    connectDB(sql,function(result){
        return res.jsonp(result);
    })
});

//根据id获取用户信息
router.post('/getuser',function (req, res) {
    var user_id = req.body.user_id;//获取请求参数中的user_id
    //console.log("user_id:"+user_id);
    var sql = "select * from user where user_id = "+user_id;
    connectDB(sql,function(result){
        return res.jsonp(result);
    });
});
router.post('/adduser', function (req, res) {
    res.send("adduser");
});
router.post('/updateuser', function (req, res) {
    res.send("updateuser");
});
router.post('/deleteuser', function (req, res) {
    res.send("deleteuser");
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