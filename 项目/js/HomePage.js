
        // 搜索框默认选择酒店
        $(this).css("background-image","linear-gradient(90deg,rgba(83,144,250,.8),rgba(95,126,248,.8))").parent().siblings().find("div").css("background"," rgba(0,0,0,.75)");
        $("#search-bottom").css("background-image","linear-gradient(90deg,rgba(83,144,250,.8),rgba(95,126,248,.8))");
        $("#operation-jiudian").css("display","block").siblings().hide();
        // 顶部二级菜单隐藏
        $("#nav-left li").find("ul").css("display","none");


        // 给顶部导航a标签绑定点击事件
        $("#nav-left ul li a").click(function(){
            $(this).next().stop().slideToggle(800);
        });
        // // 顶部导航绑定移出事件
        // $(".none li:last-child").mouseout(function(){
        //     $(this).parent().stop().hide(800);
        // });


        // 搜索框切换
        // 酒店
        $("#jiudian").click(function(index){
            $(this).css("background-image","linear-gradient(90deg,rgba(83,144,250,.8),rgba(95,126,248,.8))").parent().siblings().find("div").css("background"," rgba(0,0,0,.75)");
            $("#search-bottom").css("background-image","linear-gradient(90deg,rgba(83,144,250,.8),rgba(95,126,248,.8))");
            $("#operation-jiudian").css("display","block").siblings().hide();
        });
         // 攻略
         $("#gonglue").click(function(index){
            $(this).css("background-image","linear-gradient(90deg,rgba(40,213,164,.8),rgba(38,208,181,.8))").parent().siblings().find("div").css("background"," rgba(0,0,0,.75)");
            $("#search-bottom").css("background-image","linear-gradient(90deg,rgba(40,213,164,.8),rgba(38,208,181,.8))");
            $("#operation-gonglue").css("display","block").siblings().hide();
        });
          // 行程
          $("#xingcheng").click(function(index){
            $(this).css("background-image","linear-gradient(90deg,rgba(38,208,181,.8),rgba(6,204,199,.8))").parent().siblings().find("div").css("background"," rgba(0,0,0,.75)");
            $("#search-bottom").css("background-image","linear-gradient(90deg,rgba(38,208,181,.8),rgba(6,204,199,.8))");
            $("#operation-xingcheng").css("display","block").siblings().hide();
        });

//游记的js