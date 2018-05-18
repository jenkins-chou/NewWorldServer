var fs=require('fs');
var connectDB = require('./connectDB');
var mysql = require('mysql');
var mysql_setting = require('../mysql_config');
var connection = mysql.createConnection(mysql_setting);
connection.connect();

fs.readFile('../data/mv.json',function(err,data){
    if(err)
        throw err;
    var jsonObj=JSON.parse(data);
    console.log("length:"+jsonObj.length);
    for(var i=0,size=jsonObj.length;i<size;i++){
        var mv=jsonObj[i];
        var name=mv['name'];
        var url=mv['url'];
        var image = mv['image']
        var count = mv['count']
        console.log(mv);

        var sql = "insert into mv(mv_name,mv_url,mv_image,mv_count) value(?,?,?,?)"
        var sqlparams = [
            name,
            url,
            image,
            count,
        ]
         connection.query(sql,sqlparams,function(error,data){
            if (error) {
                console.log("error:"+error);
                var result = {
                    "status": "500",
                    "message": "服务器错误"
                }
                console.log(result)
            }else{
                var result = {
                    "status": "200",
                    "message": "success",
                    "result":data
                }
                console.log(result)
            }
        })

    }
});