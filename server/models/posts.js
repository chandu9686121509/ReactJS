var mongoose=require('mongoose');
var Schema=mongoose.Schema;
//emails is object of schema definition
var posts=new Schema({
  messageWave: String,
  messageName: String,
  messageEmail: String,
  messageEmpCode: String,
  messageEmpDept: String,
  messageEmpDesg: String,
  messageSkills: String,
});

module.exports=mongoose.model('Posts',posts);//schema name Emails is table name
