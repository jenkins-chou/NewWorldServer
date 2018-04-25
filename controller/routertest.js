/*
* @Author: Marte
* @Date:   2018-04-25 18:01:09
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-25 19:11:19
*/
var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var mysql_setting = require('../mysql');
var connection = mysql.createConnection(mysql_setting);
//连接数据库
connection.connect();
router.get('/user', function (req, res) {
    var params = url.parse(req.url, true).query;
    var sql = "select * from test";
    connection.query(sql, function (error, data) {
        console.log(error);
        if (error) {
            var result = {
                "status": "500",
                "message": "服务器错误"
            }
            return res.jsonp(result);
        }
        else{
            var result = {
                "status": "200",
                "message": "success",
                data:data
            }
            return res.jsonp(result);
        }
    })
});
module.exports = router;
