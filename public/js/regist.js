// 查询触发事件
$(function(){
  // 正则验证
  var regName=/^\w{1,12}$/;
  var regUpwd=/^\d{6}$/;
  var regEmail=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  // 查找的元素
  var $Uname=$(".xh_group").children(":nth-child(3)");
  var $Uemail=$(".xh_group").children(":nth-child(6)");
  var $Upwd=$(".xh_group").children(":nth-child(9)");
  var $Tupwd=$(".xh_group").children(":nth-child(12)");
  var $btn=$Tupwd.next().next();
  console.log($btn)
  // 用户名验证
  $Uname.focus(function(){
    var $div=$(this).prev();
    $div.html("10个字符以内的字母、数字或下划线的组合");
    $div.removeClass("vali_fail");
    $div.removeClass("vali_success");
    $div.removeClass("xh_info");
    $div.addClass("xh_info1");
  })

  $Uname.blur(function(){
    var $div=$(this).prev();
    var $uname=$(this).val();
		if(regName.test($uname)){
        $.ajax({
          url:"http://127.0.0.1:5500/pro/searuser",
          data:{
            uname: $uname
          },
          type:"get",
          dataType:"json",
          success:function(result){
                  if(result==1){
                    $div.addClass("vali_fail");
                    $div.html("用户名被占用");
                    return false;
                  }else{
                    $div.removeClass("xh_info1")
                    $div.addClass("vali_success");
                    $div.html("账户名可用");
                    return true;
                  }
              }
          })
    }
  })
/*******************************************/ 
// 邮箱验证
  $Uemail.focus(function(){
    var $div=$(this).prev();
    $div.html("请输入正确的邮箱")
    $div.removeClass("vali_success")
    $div.removeClass("vali_fail")
    $div.removeClass("xh_info")
    $div.addClass("xh_info1")
  })

  $Uemail.blur(function(){
    var $div=$(this).prev();
    var $uemail=$(this).val();
		if(regEmail.test($uemail)){
      $div.removeClass("xh_info1")
      $div.html("格式正确")
      $div.addClass("vali_success")
   }else{
      $div.html("格式错误")
      $div.addClass("vali_fail")
   }
  })
  // 密码验证
  $Upwd.focus(function(){
    var $div=$(this).prev()
    $div.html("6位数字");
    $div.removeClass("vali_success");
    $div.removeClass("vali_fail");
    $div.removeClass("xh_info");
    $div.addClass("xh_info1");
  })

  $Upwd.blur(function(){
    var $div=$(this).prev();
		var $upwd=$(this).val();
    if(regUpwd.test($upwd)){
      $div.removeClass("xh_info1")
      $div.html("密码格式正确");
      $div.addClass("vali_success");
    }else{
      $div.html("密码格式不正确");
      $div.addClass("vali_fail");
    }
  })
  
  // 确认密码
  $Tupwd.focus(function(){
    var $div=$(this).prev()
    $div.html("请与当前密码一致");
    $div.removeClass("vali_success");
    $div.removeClass("vali_fail")
    $div.removeClass("xh_info");
    $div.addClass("xh_info1");
  })
  $Tupwd.blur(function(){
    var $div=$(this).prev();
    var $tupwd=$(this).val();
    var $upwd=$Upwd.val();
    if(regUpwd.test($tupwd)&&$tupwd==$upwd){
      $div.removeClass("xh_info1");
      $div.html("确认密码成功");
      $div.addClass("vali_success");
    }else{
      $div.addClass("vali_fail");
      $div.html("密码不一致");
    }
  })

// 点击提交按钮，验证所有的文本框
  $btn.click(function(){
    var $uname=$(".xh_group").children(":nth-child(3)").val();
    var $uemail=$(".xh_group").children(":nth-child(6)").val();
    var $upwd=$(".xh_group").children(":nth-child(9)").val();
    var $tupwd=$(".xh_group").children(":nth-child(12)").val();
    if(regName.test($uname)&&regUpwd.test($upwd)&&regUpwd.test($tupwd)&&$upwd==$tupwd){
      $.ajax({
        url:"http://127.0.0.1:5500/pro/regUser",
        data:{
          upwd:$upwd,
          uname:$uname,
          uemail: $uemail
        },
        type:"post",
        dataType:"json",
        success:function(result){
            if(result==1){
                alert("注册成功!");
            }else{
                alert("注册失败!");
            }
          }
          })
      }else{
        alert("注册失败!");
      }
  })




})