/*
* @Author: Marte
* @Date:   2018-04-27 09:38:33
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-27 12:25:13
*/
var mysql = require('mysql');
var mysql_setting = require('../mysql_config');
var connection = mysql.createConnection(mysql_setting);
connection.connect();
function connectDB(){
    //查询函数
    this.query = function(sql,callback){
        console.log("connectDB: use callback function");
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
                    "data":data
                }
                callback(result);
            }
        })
    }

    //添加函数
    this.add = function(sql,sqlparams,callback){
        console.log("");
        connection.query(sql,sqlparams,function(error,data){
            if (error) {
                console.log("error:"+error);
                var result = {
                    "status": "500",
                    "message": "服务器错误"
                }
                callback(result);
            }else{
                var result = {
                    "status": "200",
                    "message": "success",
                    "result":data
                }
                callback(result);
            }
        })
    }
    //更新函数
    this.update = function(sql,callback){
        connection.query(sql,function(error,data){
            if (error) {
                var result = {
                    "status":"500",
                    "message":"服务器错误",
                    "error":error
                }
                callback(result);
            }else{
                var result = {
                    "status":"200",
                    "message":"success",
                    "data":data
                }
                callback(result);
            }
        });
    }

    //删除函数
    this.delete = function(sql,callback){
        connection.query(sql,function(error,data){
            if (error) {
                var result = {
                    "status":"500",
                    "message":"服务器错误",
                    "error":error
                }
                callback(result);
            }else{
                var result = {
                    "status":"200",
                    "message":"success",
                    "data":data
                }
                callback(result);
            }
        });
    }
}

module.exports = connectDB;