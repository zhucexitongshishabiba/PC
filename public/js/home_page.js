$(function(){
  $(".open").click(function(){
    $(this).toggleClass("open")
  })

// 返回顶部，和楼层导航
  $(window).scroll(function(){
    var $img=$(".back-top")
    if($(this).scrollTop()>=100){
      $img.fadeIn(500)
    }else{
      $img.fadeOut(500)
    }
  })

  $(".back-top>li>img").click(function(){
    $("html,body").stop().animate({scrollTop:0},700,"linear");
  });

  var $Fl=$(".back-top").children(":first-child")
  var $Ftop=$(".home_title").offset().top
  // console.log($Ftop)
  $Fl.click(function(){
    $("html,body").stop().animate({scrollTop:$Ftop},500,"linear")
  })

  var $Sl=$Fl.next();
  var $Ftop1=$(".home_title1").offset().top
  $Sl.click(function(){
    $("html,body").stop().animate({scrollTop:$Ftop1},500,"linear")
  })

  var $Tl=$Sl.next();
  var $Ftop2=$(".home_title2").offset().top;
  $Tl.click(function(){
    $("html,body").stop().animate({scrollTop:$Ftop2},500,"linear")
  })
  /*******************************************/ 
  $.ajax({
    url:"http://127.0.0.1:5500/rev/searlist",
    type:"get",
    dataType:"json",
    success:function(result){
      console.log(result)
      var str="";
      for(var p of result){
        str+=`
        <li>
        <div>
          <img src="${p.pic}" alt="">
          <div>
            <p>${p.title}</p>
          </div>
        </div>
      </li>
        ` 
      }
      $("#CM").append(str)
    }
  })

  $.ajax({
    url:"http://127.0.0.1:5500/rev/seararticle",
    type:"get",
    dataType:"json",
    success:function(result){
      console.log(result)
      var str="";
      for(var k of result){
        str+=`
      <div class="layout">
        <div class="L-sidebar">
          <img src="${k.pic}" alt="">
          <div>
            <h3>${k.title}</h3>
            <div>${k.content}</div>
          </div>
        </div>
      </div>
        `
      }
      $("#article").append(str)
    }
  })

// 分页**********************
$.ajax({
  url:"http://127.0.0.1:5500/rev/searproduct",
  data:{ pno:1 },
  type:"get",
  dataType:"json",
  success:function(result){
    console.log(result);
    var str1="";
    for(var p of result){
      str1+=`<div>
        <a href="${p.href}">
          <img class="smallPic" src="${p.pic2}" alt="">
        </a>
        <a href="javascript:;">${p.title}</a>
        <div>
          <span class="symbol">¥</span>
          <span class="price">${p.price.toFixed(2)}</span>
        </div>
      </div>`
    }
    $(".fashion1").html(str1); 
  }
})

  var $ul = $(".paging").children(":first")
  var $li1 = $ul.children(":first")
  var $li2 = $li1.next();
  var $li3 = $li2.next();
   // console.log($li1)
  $li1.click(function(){
    // console.log(1)
      var $li2v = $li2.html()
      var pno = $li2v;
     if(pno>1){
      pno-=1;
      $li2.html(pno)
      $.ajax({
        url:"http://127.0.0.1:5500/rev/searproduct",
        data:{ pno },
        type:"get",
        dataType:"json",
        success:function(result){
          console.log(result);
          var str1="";
          for(var p of result){
            str1+=`<div>
              <a href="${p.href}">
                <img class="smallPic" src="${p.pic2}" alt="">
              </a>
              <a href="javascript:;">${p.title}</a>
              <div>
                <span class="symbol">¥</span>
                <span class="price">${p.price.toFixed(2)}</span>
              </div>
            </div>`
          }
          $(".fashion1").html(str1); 
        }
      })
    }
  })

  $li3.click(function(){
    var $li2v = $li2.html()
    //console.log($li2v)
    var pno = parseInt($li2v);
    //console.log(pno)
   if(pno<2){
    pno+=1;
    $li2.html(pno)
    $.ajax({
      url:"http://127.0.0.1:5500/rev/searproduct",
      data:{ pno },
      type:"get",
      dataType:"json",
      success:function(result){
        console.log(result);
        var str1="";
        for(var p of result){
          str1+=`<div>
            <a href="${p.href}">
              <img class="smallPic" src="${p.pic2}" alt="">
            </a>
            <a href="javascript:;">${p.title}</a>
            <div>
              <span class="symbol">¥</span>
              <span class="price">${p.price.toFixed(2)}</span>
            </div>
          </div>`
        }
        $(".fashion1").html(str1); 
      }
    })
     
  }
})
})