const express=require("express");
const pool=require("../pool.js");
let router=express.Router();

router.get("/searlist",(req,res)=>{
  var sql="select * from xh_comment_list";
  pool.query(sql,(err,result)=>{
    res.send(result)
    // console.log(result)
  })
})

router.get("/seararticle",(req,res)=>{
  var sql="select * from xh_article";
  pool.query(sql,(err,result)=>{
    res.send(result)
    console.log(result)
  })
})

router.get("/searproduct",(req,res)=>{
  var pno=req.query.pno;
  var ps = req.query.pageSize;
  if(!ps){ps=5}
  var offset = (pno-1)*ps;
  var sql="select * from xh_fashion_product limit ?,?";
  pool.query(sql,[offset,ps],(err,result)=>{
    res.send(result)
    console.log(result)
  })
})
module.exports=router;