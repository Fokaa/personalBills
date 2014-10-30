// mongoose 链接
var mongoose = require('mongoose');
var db       = mongoose.createConnection('mongodb://127.0.0.1:27017/NodeJS');

// 链接错误
db.on('error', function(error) {
    console.log(error);
});

// Schema 结构
var personSchema = new mongoose.Schema({
    email :  {type : String},
    password : {type : String},
    time     : {type : Date, default: Date.now},
});


// model
module.exports = db.model('mongoose', personSchema,"personInfo");