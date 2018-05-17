var fs=require('fs');
var connectDB = require('./connectDB');
var mysql = require('mysql');
var mysql_setting = require('../mysql_config');
var connection = mysql.createConnection(mysql_setting);
connection.connect();

fs.readFile('../data/data.json',function(err,data){
    if(err)
        throw err;
    var jsonObj=JSON.parse(data);
    console.log("length:"+jsonObj.length);
    for(var i=0,size=jsonObj.length;i<size;i++){
        var video=jsonObj[i];
        var name=video['name'];
        var less_intro = video['less_intro']
        var other_name = video['other_name']
        var time = video['time']
        var actor = video['actor']
        var actor_str = actor.join();
        var type = video['type']
        var area = video['area']
        var language = video['language']
        var director = video['director']
        var putaway_time = video['vputaway_time']
        var film_length = video['film_length']
        var update_time = video['update_time']
        var grade = video['grade']
        var intro = video['intro']
        var url=video['url'];
        var image=video['image'];
        //console.log(video);
        //console.log('less_tro'+less_intro[0]);
        //console.log("image:"+video['image'])
        //console.log("type"+video['type']);
        //

        var sql = "insert into movie(movie_name,movie_less_intro,movie_other_name,movie_time,movie_actor,movie_type,movie_area,movie_language,movie_director,movie_putaway_time,movie_film_length,movie_update_time,movie_grade,movie_intro,movie_url,movie_image) value(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
        var sqlparams = [
            name,
            less_intro[0],
            other_name,
            time,
            actor_str,
            type,
            area,
            language,
            director,
            putaway_time,
            film_length,
            update_time,
            grade,
            intro,
            url,
            image
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