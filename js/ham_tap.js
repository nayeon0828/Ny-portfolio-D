$(function(){
    $("#hamber").click(function(){
        $("#subWrap").animate({right:0});
    })
    $("#out").click(function(){
        $(".subMArea").slideUp();
        $("#subWrap").animate({right:"-100%"});
        $(".subMArea").slideUp();
    })

    $("#hamber").click(function(){
        $("#modal").css("display","block");
    })
    $("#out").click(function(){
        $("#modal").css("display","none");
    })

    $(".subMArea").hide();
    $(".mainMTitle a").click(function(){
        $(this).parent().find(".subMArea").slideToggle("normal");
        $(this).parent().siblings().find(".subMArea").slideUp("normal");
    })


})