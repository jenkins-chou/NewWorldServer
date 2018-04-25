/*
* @Author: Marte
* @Date:   2018-04-25 20:07:24
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-25 20:08:17
*/

var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var mysql_setting = require('../mysql');
var connection = mysql.createConnection(mysql_setting);
//连接数据库
connection.connect();

router.get('/getusers', function (req, res) {
    res.send("getusers");
});
router.get('/getuser', function (req, res) {
    res.send("getuser");
});
router.get('/adduser', function (req, res) {
    res.send("adduser");
});
router.get('/updateuser', function (req, res) {
    res.send("updateuser");
});
router.get('/deleteuser', function (req, res) {
    res.send("deleteuser");
});
module.exports = router;