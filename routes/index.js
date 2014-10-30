var express = require('express');
var entity = require('../db/personInfo/index');
var async = require('async');
var router = express.Router();

/* 登陆页面. */
router.get('/', function(req, res) {
  res.render('index', { tip: ' ' });
});
/* 登陆判断  */
router.post('/login', function(req, res) {
var reason="邮箱或密码输入有误，请重试";
var email = req.param("email")? req.param("email") : null;
var password = req.param("password")? req.param("password") : null;
var temp={};

async.waterfall([
    //错误检查
    function(callback) {
        //下一步
        callback(null);
    },
     function(callback) {
     	entity.findByEmail(email,function(error,doc){
           if(error){
           	reason="系统繁忙,请稍后重试";
           	callback(reason);
            }
          if(!doc){
	          reason="用户不存在！";
	          callback(reason);
           }else
           { 
           	temp=doc[0];
            callback(null);
            }

	     });
     }
    ],

    function(error){
        if(temp && temp.password==password){
        	res.render('home', { email: email });
         }
         else{
         	  res.render('index', { tip: reason });
         }
      
    });

  
});

module.exports = router;
