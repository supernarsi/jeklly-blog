//回到顶部
$(function(){
    $("#back-to-top").hide();
    $(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 100){
                $("#back-to-top").fadeIn(800);
            }
            else{
                $("#back-to-top").fadeOut("fast");
            }
        });
        $("#back-to-top").click(function(){
            $('body,html').animate({scrollTop:0}, 1000);
            return false;
        });
    });
});


$(function(){
    //tips插件
    $("a").tips();
    //翻页插件
    $(".jquery_pages").pages({'pernum': 5, 'pages': 5, 'extremity': true, 'total': true});
})