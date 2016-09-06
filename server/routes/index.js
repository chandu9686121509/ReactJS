var express = require('express');
var router = express.Router();
var Posts=require('../models/posts');
/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
//});
router.post('/saveMessage', function(req, res, next) {
  console.log(req.body);
  if(req.body){
    var mypost=new Posts();
    mypost.messageWave=req.body.wave;
    mypost.messageName=req.body.name;
    mypost.messageEmail=req.body.email;
    mypost.messageEmpCode=req.body.empcode;
    mypost.messageEmpDept=req.body.empdept;
    mypost.messageEmpDesg=req.body.empdesg;
    mypost.messageSkills=req.body.skills;

    mypost.save(function(err, mypost){
      if(err){
        return console.error(err);
      }
      else {
        console.log("success");
      }
   });
  }
});

router.get('/saveGet', function(req,res,next){
  Posts.find(function(err, docs){
    if(docs){
      res.json(docs);
    }
    else{
      console.log(err);
    }
  })
});

module.exports = router;
