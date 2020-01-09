$(function(){
  var search=location.search;
  console.log(search);
  if(search!==""){
    var lid=search.split("=")[1];
    $.ajax({
      url:"http://127.0.0.1:5500/pd/",
      data:{ lid },
      type:"get",
      dataType:"json",
      success:function(result){
        console.log(result)
        var str="";
        for (var p of result){
          str+=`
          <div class="lf-pic">
            <div class="tp-pic">
              <div class="Szoom"></div>
              <img class="Lpic" src="${p.pic2}" alt="">
              <div class="Lzoom">
                <img class="Lpic" src="${p.pic2}" alt="">
              </div>
            </div>
            <ul class="bt-pic">
              <li>
                <img class="Spic" src="${p.pic2}" alt="">
              </li>
              <li>
                <img class="Spic" src="${p.pic3}" alt="">
              </li>
              <li>
                <img class="Spic" src="${p.pic4}" alt="">
              </li>
            </ul>
          </div>
    
        <div class="rg-info">
          <div class="rg-content">
            <h3>${p.title}</h3>
          </div>
          <div class="rg-price">
            <span class="font">价格</span>
            <span class="price">¥${p.price.toFixed(2)}</span>
          </div>
          <div class="rg-count">
            <span class="font">数量</span>
            <a class="reduce" href="javascript:;">-</a><input placeholder="1" type="text"><a class="add" href="javascript:;">+</a>
          </div>
          <div class="rg-buy">
            <button class="buy">加入购物车</button>
          </div>
        </div>
          `
        }
        $('.cart').append(str);
      }
    })
  }else{
    alert("请输入lid")
  }
// 放大镜***********************************
// 因为要给未来生成的元素进行绑定事件，所有要用到live或者delegate
// 因为hover不是标准的事件，因此无法直接使用live和delegate进行处理
// 但是delegate可以添加多个事件 并且用空格隔开 所以可以用鼠标移入移除事件
  $(".cart").delegate(".tp-pic","mouseenter mouseleave",function(){
  $(".Szoom").toggle()
  $(".Lzoom").toggle()
  })
  // 切换图片
  $(".cart").delegate(".Spic","mouseover",function(){
    var address=$(this).attr("src")
    $(".Lpic").attr("src",address)
  })

  $(".cart").on("mousemove",".tp-pic",function(e){
    var $ox = $(".tp-pic").offset().left
    var $oy = $(".tp-pic").offset().top
    var $ex = e.pageX
    var $ey = e.pageY
    var $Sx = $ex-$ox
    var $Sy = $ey-$oy 
    var $Sw = $(".Szoom").width()
    var $St = $(".tp-pic").width()
    // console.log($ex)
    //  console.log($ox)
    if($Sx < $Sw/2){
      $Sx = $Sw/2;
    }
    if($Sy < $Sw/2){
      $Sy = $Sw/2;
    }
    if($Sx > $St - $Sw/2){
      $Sx = $St - $Sw/2
    }
    if($Sy > $St - $Sw/2){
      $Sy = $St - $Sw/2
    }
    $(".Lzoom>img").css({left:400 - 2*$Sx - $Sw,top:400 - 2*$Sy - $Sw})
    $(".Szoom").css({left:$Sx - $Sw/2,top:$Sy - $Sw/2})
  })
})