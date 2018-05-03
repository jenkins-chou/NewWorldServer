
var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

router.post('/login',function (req, res) {
    var user_name = req.body.user_name;
    var user_pass = req.body.user_pass;
    console.log(user_name);
    console.log(user_pass);
    var sql = "select * from user where user_name = '"+user_name+"' and user_pass = '"+user_pass+"'";
    connectDB.query(sql,function(result){
        //result.data[0]!=null;
        return res.jsonp(result);
    })
});
//获取所有用户数据
router.post('/getusers', function (req, res) {
    var sql = "selectone * from user where user_del != 'delete'";
    connectDB.query(sql,function(result){
        return res.jsonp(result);
    })
});

//根据id获取用户信息
router.post('/getuser',function (req, res) {
    var user_id = req.body.user_id;//获取请求参数中的user_id
    var sql = "select * from user where user_id = "+user_id +" and user_del != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});



//添加用户
router.post('/adduser', function (req, res) {

    var sql = "insert into user(user_name,user_pass,user_real_name,user_avatar_url,user_health,user_phone,user_email,user_address,user_slogan,user_status,user_create_time,user_remark,user_del) value (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    var sqlparams = [
        req.body.user_name,
        req.body.user_pass,
        req.body.user_real_name,
        req.body.user_avatar_url,
        req.body.user_health,
        req.body.user_phone,
        req.body.user_email,
        req.body.user_address,
        req.body.user_slogan,
        req.body.user_status,
        req.body.user_create_time,
        req.body.user_remark,
        'normal' //user_del 状态
    ]
    var sqlQuery = "select * from user where user_name = '" + req.body.user_name+"'";//用于查询是否存在同名用户的
    connectDB.query(sqlQuery,function(result){
        console.log(result);
        if(result.data[0]!=null){
            console.log("已经存在用户");
            var resultexist = {
                    "status": "201",
                    "message": "已经存在用户",
                    "data":[]
                }
            return res.jsonp(resultexist);
        }else{
            console.log("可注册用户");
            connectDB.add(sql,sqlparams,function(result){
                console.log(result);
                if (result.status=="200") {
                    var sqlQueryAgain = "select * from user where user_name = '" + req.body.user_name+"'";
                    connectDB.query(sqlQueryAgain,function(resultAgain){
                        return res.jsonp(resultAgain);
                    })
                }else{
                    return res.jsonp(result);
                }
            })
        }
    })

});
//更新用户信息
router.post('/updateuser', function (request, response) {
    var req = request;
    var res = response;
    var user_id = req.body.user_id;

    if (user_id==null) {
        return res.jsonp("user_id is null! please check!");
    }
    //console.log("hahahhah");
    connectDB.query("select * from user where user_id = "+user_id,function(result){
        if (result.status=="200") {
            if (result.data[0]!=null) {
                console.log(checkUpdateData("dsadsa","adsadsa"));
                    var user_name = checkUpdateData(req.body.user_name,result.data[0].user_name);
                    var user_pass = checkUpdateData(req.body.user_pass,result.data[0].user_pass);
                    var user_real_name = checkUpdateData(req.body.user_real_name,result.data[0].user_real_name);
                    var user_avatar_url = checkUpdateData(req.body.user_avatar_url,result.data[0].user_avatar_url);
                    var user_health = checkUpdateData(req.body.user_health,result.data[0].user_health);
                    var user_phone = checkUpdateData(req.body.user_phone,result.data[0].user_phone);
                    var user_email = checkUpdateData(req.body.user_email,result.data[0].user_email);
                    var user_address = checkUpdateData(req.body.user_address,result.data[0].user_address);
                    var user_slogan = checkUpdateData(req.body.user_slogan,result.data[0].user_slogan);
                    var user_status = checkUpdateData(req.body.user_status,result.data[0].user_status);
                    var user_create_time = checkUpdateData(req.body.user_create_time,result.data[0].user_create_time);
                    var user_remark  = checkUpdateData(req.body.user_remark,result.data[0].user_remark);
                    var user_del = checkUpdateData(req.body.user_del,result.data[0].user_del);
                    var sql  =  "update user set user_name = '"+user_name+"' , user_pass = '"+user_pass+"' , user_real_name = '"+user_real_name+"' , user_avatar_url = '"+user_avatar_url+"', user_health = '"+user_health+"' , user_phone = '"+user_phone+"' , user_email = '"+user_email+"' , user_address = '"+user_address+"' , user_slogan = '"+user_slogan+"' , user_status = '"+user_status+"' , user_create_time = '"+user_create_time+"' , user_remark = '"+user_remark+"' , user_del = '"+user_del+"' where user_id = "+user_id;
                connectDB.update(sql,function(result){
                    console.log(result);
                    return res.jsonp(result);
                })
            }else{
                return res.jsonp('没有数据');
            }
        }else{
            return res.jsonp('更新失败');
        }
    })
});
router.post('/deleteuser', function (req, res) {
    var user_id = req.body.user_id;
    if (user_id==null) {
        return res.jsonp("user_id is null! please check!");
    }else{
        var sql = "update user set user_del = 'delete' where user_id = "+user_id;
        connectDB.delete(sql,function(result){
            console.log(result);
            return res.jsonp(result);
        })
    }
});
//更新用户时，用于校验是否是否有更新字段值
function checkUpdateData(target,current){
    if (target == null||target =="") {
        return current;
    }else if(target !=null||target !=""){
        if (target != current) {
            return target;
        }
    }else{
        return current;
    }
}
// console.log(checkUpdateData("dsadsa","adsadsa"));
// console.log(checkUpdateData("","adsadsa"));
// console.log(checkUpdateData("dsadsa",""));
// console.log(checkUpdateData("",""));
module.exports = router;