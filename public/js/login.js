$(function(){
  // 用户名和密码验证
  $(".xh_group").on("focus","input",function(){
    var $div=$(this).prev();
    //  console.log($div.html());
    $div.removeClass("xh_info");
  })

  $(".xh_group").on("blur","input",function(){
      if($(this).val()==""){
      var $div=$(this).prev();
      $div.addClass("vali_fail");
    }
  })  
  // 密码验证
  // $(".xh_group").on("focus","input",function(){
  //   var $div=$(this).prev();
  //   console.log($div.html());
  //   $div.addClass=("xh_info");
  // })
  // $(".xh_group").on("blur","input",function(){
  //   if($(this).value==""){
  //     var $div=$(this).prev();
  //     div.className="vali_fail";
  //   }
  // })
  // 验证以上所有文本框的信息
  $(".xh_group").on("click","button",function(){
    var $uname=$(".xh_group").children(":nth-child(3)").val();
    var $upwd=$(".xh_group").children(":nth-child(6)").val();
    console.log($uname)


    if($uname!==""&&$upwd!==""){
      var div1=$(".xh_group").children(":nth-child(3)").prev();
      var div2=$(".xh_group").children(":nth-child(6)").prev();

        $.ajax({
          url:"http://127.0.0.1:5500/pro/login",
          data:{
            uname: $uname,
            upwd : $upwd
          },
          type:"get",
          dataType:"json",
          success:function(result){
            if(result==1){
                // alert("登陆成功!")
                div1.addClass("vali_success");
                div1.removeClass("vali_fail");
                div2.addClass("vali_success");
                div2.removeClass("vali_fail");
                window.location.href = "/home_page.html";
                // 登录成功之后跳转到首页
            }else{
                alert("账户名或密码错误!")
            }
          }
        })
      }
    })
})