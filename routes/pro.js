const express=require("express");
const pool=require("../pool.js");
let router=express.Router();
// 登录
router.get("/login",(req,res)=>{
  var $uname=req.query.uname;
	var $upwd=req.query.upwd;
	console.log($uname)
  pool.query("select * from xh_user where uname=? and upwd=?",[$uname,$upwd],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send("1");
    }else{
      res.send("0");
    }
  });
});
// 查询Uname的用户信息
router.get("/searuser",(req,res)=>{
	var $uname=req.query.uname;
	pool.query("select * from xh_user where uname=?",[$uname],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});

//3.查询邮箱
router.get("/searuser",(req,res)=>{
	var $uemail=req.query.uemail;
	pool.query("select * from xh_user where email=?",[$uemail],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});

//4.注册
router.post("/regUser",(req,res)=>{
	var $uname=req.body.uname;
  var $upwd=req.body.upwd;
	var $email=req.body.uemail
	console.log($uname)
	pool.query("INSERT INTO xh_user (uname,upwd,email) VALUES(?,?,?)",[$uname,$upwd,$email],(err,result)=>{
		if(err)throw err;
		res.send("1");
		console.log(result);
	});	
});

module.exports=router;