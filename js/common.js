//回到顶部
$(function(){
    $("#back-to-top").hide();
    $(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 100){
                $("#back-to-top").stop().fadeIn(1500);
            }
            else{
                $("#back-to-top").stop().fadeOut(1000);
            }
        });
        $("#back-to-top").click(function(){
            $('body,html').animate({scrollTop:0}, 1000);
            return false;
        });
    });
});

//tips插件
$("a").tips();