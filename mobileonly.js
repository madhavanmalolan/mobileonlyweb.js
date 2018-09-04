    $(document).ready(function(){
        var mainContent = $("#main").html();
        var frame = '<div id="curtain" style="background: #2e3436 url(https://i.imgur.com/N4eXmRz.png);position:fixed; top:0;left:0;height:100%;width:100%;z-index:100"></div><img id="frame" src="https://i.imgur.com/yIR7tT7.png" style="height:100%;position:fixed;top:0" />';
        $("#main").html(mainContent + frame);
        $('body').css('background','#2e3436 url(https://i.imgur.com/N4eXmRz.png)');
    if( ! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
      $("#frame").on('load',function(){
        $('body').css('margin','0');
        $('body').css('background','#2e3436 url(https://i.imgur.com/N4eXmRz.png)');
        $("#frame").css("left",window.innerWidth/2-$("#frame").width()/2);
        $("#main").css("position","fixed");
        $("#main").css("overflow-y","auto");
        $("#main").css("width",$("#frame").width()*0.91);
        $("#main").css("margin-top",$("#frame").height()*0.12);
        $("#main").css("margin-left",$("#frame").position().left+$("#frame").width()*0.055);
        $("#main").css("height","75%");
    $("#player").height($("#main").width()*0.9*315/560);
    $("#player").width($("#main").width()*0.9);
        $("#curtain").hide();
    });
    }
    else{
        $("#curtain").hide();
        $("#frame").hide();
        $("#main").css("width",window.innerWidth);
        $("#main").css("margin-top",0);
        $("#main").css("margin-left",0);
        $("#main").css("height","100%");
        $("#player").height($("#main").width()*0.9*315/560);
        $("#player").width($("#main").width()*0.9);
    }
    });

