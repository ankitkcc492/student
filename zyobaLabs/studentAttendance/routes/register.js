var express = require('express');
var router=express.Router();
var registerCont = require('../controller/register');


router.post('/',registerCont.check,registerCont.success);
// router.post('/register',)
// {
// router.post('/register',function(req,res,next){
// 	console.log("state")
// })
// res.render('index',{message:req.body.email+' ! Registration Successfull.'});
// console.log('in register');

// });

module.exports=router;