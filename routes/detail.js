const express=require("express");
const pool=require("../pool.js");
let router=express.Router();

router.get("/",(req,res)=>{
  var lid=req.query.lid;
  var sql="select * from xh_fashion_product where lid=?"
  pool.query(sql,[lid],(err,result)=>{
    res.send(result)
    console.log(result)
  })
})
module.exports=router;