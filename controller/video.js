/*
* @Author: Marte
* @Date:   2018-04-25 20:06:38
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-25 20:07:07
*/

var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var mysql_setting = require('../mysql');
var connection = mysql.createConnection(mysql_setting);
//连接数据库
connection.connect();

router.get('/getvideos', function (req, res) {
    res.send("getvideos");
});
router.get('/addvideo', function (req, res) {
    res.send("addvideo");
});
router.get('/updatevideo', function (req, res) {
    res.send("updatevideo");
});
router.get('/deletevideo', function (req, res) {
    res.send("deletevideo");
});
module.exports = router;