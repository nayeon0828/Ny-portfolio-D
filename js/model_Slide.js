$(function(){
    $("div#modelS_allpage").css("width",500*$("div#modelS_allpage ul li").length);
    $("div#modelS_allpage ul li:last").prependTo("div#modelS_allpage ul");
    $("div#modelS_allpage").css("margin-left","-100vw");

    $("#modelS_prev").click(function(){
        $("#modelS_prev, #modelS_next").hide();

        $("div#modelS_allpage").animate({
            marginLeft: "+=100vw"
        },"slow",function(){
            $("div#modelS_allpage ul li:last").prependTo("div#modelS_allpage ul");
            $("div#modelS_allpage").css("margin-left","-100vw");
            $("#modelS_prev, #modelS_next").show();
        })
    })

    $("#modelS_next").click(function(){
        $("#modelS_prev, #modelS_next").hide();

        $("div#modelS_allpage").animate({
            marginLeft: "-=100vw"
        },"slow",function(){
            $("div#modelS_allpage ul li:first").appendTo("div#modelS_allpage ul");
            $("div#modelS_allpage").css("margin-left","-100vw");
            $("#modelS_prev, #modelS_next").show();
        })
    })
})