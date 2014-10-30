var db = require("./person");
var entity=new Object();

entity.findByEmail=function(email,callback){
	if(typeof(callback)!="function"){
		return;
	}
	if(!email){
		callback("邮箱不能为空");
	}
    db.find({email:email},function(error,person){
    	console.log("***********"+person+"***********");
	    callback(error,person);
});
}
module.exports = entity;