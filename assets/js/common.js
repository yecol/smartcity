var offsets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60];

$(document).ready(function(){

    // carousel
    $('.carousel').unslider({
        dots: true
    });

    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager'
    });
    
    var unslider = $('.carousel').unslider();
    
    $('.unslider-arrow').click(function(e) {
        e.preventDefault();
        var fn = this.className.split(' ')[1];
        
        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
    });

    $(".dots").css('left', ($(".carousel").width()-$(".dots").width())/2);

    // tab
    $('.nav-tabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

    //menu
    $fixedLeft = $("#nav-1 li.active a").position().left + 10;
    $("ul[class='menu-2 active']").css('left', $fixedLeft);
    $('#nav-1 a').hover(function(){
        $(this).parent().siblings().removeClass("on");
        $(this).parent().addClass("on");
        $targetLeft = $(this).position().left + 10;
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
