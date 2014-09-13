var offsets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60];

$(document).ready(function(){

    //menu
    $fixedLeft = $("#nav-1 li.active a").position().left;
    $("ul[class='menu-2 active']").css('left', $fixedLeft);
    $('#nav-1 a').hover(function(){
        $(this).parent().siblings().removeClass("on");
        $(this).parent().addClass("on");
        $targetLeft = $(this).position().left;
        $curIndex = $('#nav-1 li').index($(this).parent());
        $('.menu-2').css({
            left: '-9999px'
        });
        $('.menu-2').eq($curIndex).css({
            left: $targetLeft + offsets[$curIndex] + 'px'
        });
        $("ul[class='menu-2 active']").css('left', '-9999px');
    });
    $("section#nav").mouseleave(function(){
        console.log("out-1");
        $('.menu-2').css({left: '-9999px'});
        $("ul[class='menu-2 active']").css('left', $fixedLeft);
    })

});
