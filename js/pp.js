$(document).ready(function(){

     //notice
     $("#notice").hide();
     $("#notice").delay(1000).slideDown(1000);
     $("#notice a").click(function(){
         $("#notice").slideUp(1000);
     });



    $(".left_btn").click(function(){ //<
        //맨처음이미지를.photo2안에서 맨뒤로 이동
        $(".new_photo p:first").appendTo($(".new_photo"));
    });
    $(".right_btn").click(function(){ //<
        //맨마지막 이미지를.photo2안에서 맨앞으로 이동
        $(".new_photo p:last").prependTo($(".new_photo"));
    });
    
    $(".left_btn img").mouseover(function(){
        $(".left_btn img").attr("src","image/left_icon2.png");
    }).mouseout(function(){
         $(".left_btn img").attr("src","image/left_icon.png");
    });
    
    $(".right_btn img").mouseover(function(){
        $(".right_btn img").attr("src","image/right_icon2.png");
    }).mouseout(function(){
         $(".right_btn img").attr("src","image/right_icon.png");
    })

    //banner
    var img_fade1 = setInterval(function(){
        var showImg1 = $("#mid_one img:eq(0)");
        var nextImg1 = $("#mid_one img:eq(1)");
        nextImg1.addClass("selected"); //selected1 =z-index=1
        nextImg1.css("opacity","0").animate({opacity:1},3000,function(){
        showImg1.appendTo("#mid_one").removeClass("selected");
        });
    },5000)

    // banner(); //banner5실행해라
    // function banner(){
    //     $("#bg1").delay(5000).animate({left:"-1920px"}); //1
    //     $("#bg2").delay(5000).css({"display":"block","left":"1920px"})
    //     .animate({left:"0"},function(){
    //     $(this).delay(5000).animate({left:"-1920px"});
    //     $("#bg3").delay(5000).css({"display":"block","left":"1920px"})
    //     .animate({left:"0"},function(){
    //     $(this).delay(5000).animate({left:"-1920px"});
    //     $("#bg4").delay(5000).css({"display":"block","left":"1920px"})
    //     .animate({left:"0"},function(){
    //     $(this).delay(5000).animate({left:"-1920px"});
    //     $("#bg5").delay(5000).css({"display":"block","left":"1920px"})
    //     .animate({left:"0"},function(){
    //     $(this).delay(5000).animate({left:"-1920px"});
    //     $("#bg6").delay(5000).css({"display":"block","left":"1920px"})
    //     .animate({left:"0"},function(){
    //     $(this).delay(5000).animate({left:"-1920px"});
    //     $("#bg7").delay(5000).css({"display":"block","left":"1920px"})
    //     .animate({left:"0"},function(){
    //     $(this).delay(5000).animate({left:"-1920px"});
    //      $("#bg1").delay(5000).css({"left":"1920px"})
    //      .animate({left:"0"},banner); //무한반복/
    // });
    // });
    // });
    // });
    
// });
// });
// }


    $(".joinbtn").click(function(){
        $(".joinbtn").attr("src","join1.html")
    });
    
    $(".join1>input").click(function(){
        $(this).css("border","none")
    });



    //$("#wrap").before("<p class='txt'>0</p>"); //임시코드
    //$(".txt").css({"position":"fixed","right":"50px","top":"0","color":"blue","padding":"0","margin":"0","z-index":"10"});//임시코드
    
    
    //$(".event div").fadeOut();
    $(".newsleft div").css("opacity","0");
    $(".plus").css("opacity","0");
   
    $(window).scroll(function(){
        $(".txt").text(parseInt($(this).scrollTop()));

        // if($(this).scrollTop()>3200){
        //     //$(".event div").fadeIn().animate({marginTop:"0"},500);
        //     $(".event div:not(animated)").fadeIn().animate({marginTop:"0"},500);
        //     $(".event div:not(animated)").animate({marginTop:"20"},500);
        // }
        if($(this).scrollTop()>3200){
            $(".event div").stop().animate({"margin-top" : "10px"},500,function(){ //div올리는효과
            $(this).stop().animate({ "margin-top" : "30px"}, 500);
        });
    }
        
        
        if($(this).scrollTop()>4000){
            $(".newsleft div").eq(0).delay(300).animate({"opacity":"1"});
            $(".newsleft div").eq(1).delay(500).animate({"opacity":"1"});
            $(".newsleft div").eq(2).delay(1000).animate({"opacity":"1"});
            $(".newsleft div").eq(3).delay(1500).animate({"opacity":"1"});
            $(".newsleft div").eq(4).delay(2000).animate({"opacity":"1"});
            $(".newsleft div").eq(5).delay(2500).animate({"opacity":"1"});
            $(".plus").delay(2300).animate({"opacity":"1"});
        }
    });


    //join2 (회원가입) 이메일
    $("#email_list").change(function(){
       $("#email7 span input").val($(this).val()).css("color","#999999");
       if($(this).val()==""){
           $("#email7 span input").val("입력하세요").one("focus",function(){
               $(this).val("");
           });
       }
   });
     
   $(".text").css("opacity","0")
   $(".milk_photo").mouseover(function(){
       $(".text",this).stop().animate({opacity:"1"},300);//p제품설명보이기
   }).mouseout(function(){
       $(".text",this).stop().animate({opacity:"0"},300); //p제품설명 숨기기
   });

   //상품페이지 탭
   $("#btn p").click(function(){
    var n4 = $(this).index(); //0,1,2,3 index는 0부터 시작
    $("#btn p").removeClass("on");// 클릭한거 빼고 css효과제거
    $(this).fadeIn().addClass("on"); //누른것만 배경색깔검정
    $("#tab div").removeClass("on") //#tab p.on{display: block;} 
                .eq(n4).addClass("on") //css on  클래스 적용 display:block
                .stop().animate({"margin-top" : "10px"},500,function(){ //div올리는효과
                    $(this).stop().animate({ "margin-top" : "50px"}, 500);
                });
     return false;
   });

   
});



