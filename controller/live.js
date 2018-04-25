/*
* @Author: Marte
* @Date:   2018-04-25 19:40:34
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-25 19:46:10
*/

var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var mysql_setting = require('../mysql');
var connection = mysql.createConnection(mysql_setting);
//连接数据库
connection.connect();

router.get('/getlives', function (req, res) {
    res.send("getlives");
});
router.get('/addlive', function (req, res) {
    res.send("addlive");
});
router.get('/updatelive', function (req, res) {
    res.send("updatelive");
});
router.get('/deletelive', function (req, res) {
    res.send("deletelive");
});
module.exports = router;