const express=require('express');
const Router=require("./routes/pro.js");
const commentList=require("./routes/home_page.js");
const details=require("./routes/detail.js");
const bodyParser=require("body-parser");
var app=express();
app.listen(5500);
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({
  extended:false
}))
app.use("/pro",Router);
app.use("/rev",commentList);
app.use("/pd",details)