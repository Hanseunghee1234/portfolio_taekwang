$(function(){
    //---------------hidden nav-------------
    $('#nav .gnb li').on({
        'mouseenter':function(){
            $('.snb_wrap, .bg').stop().slideDown();
        },'mouseleave':function(){
            $('.snb_wrap, .bg').stop().slideUp();
        }
    })
    ////////////////////////////////////////////
    var nav_click = false;
    var b = $('#gnb_right');

    $('span.lines').on({
        'click':function(){
            if(nav_click ==false){
                b.css('right','0px')
                $('header').css('margin-left','-240px')
                $('html').css('overflow-y','hidden')
                $('.section_wrap').css('margin-left','-240px')
                nav_click = true;
            }else{
                b.css('right','-240px')
                $('header').css('margin-left','0')
                $('html').css('overflow-y','visible')
                $('.section_wrap').css('margin-left','0')
                nav_click = false;
            }
        }
    })

    var nav_right_click = true;
    $('#gnb_right>ul>li').on({
        'click':function(){
            $(this).addClass('on').siblings().removeClass('on');
            var c = $('#gnb_right li.on').find('.hidden_slide');
            var d = $('#gnb_right li').not('#gnb_right li.on').find('.hidden_slide');
            if(nav_right_click == true){
                c.stop().slideToggle();
                d.stop().slideUp();
                nav_right_click = false;
            }else{
                c.stop().slideToggle();
                d.stop().slideUp();
                nav_right_click = true;
            }
        }
    })
    ////////////////////////////////////////////
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
            return; // 스크롤값을 받아서 리턴
        if ((st > lastScrollTop) && (lastScrollTop>0)) {
            $("#nav").css({"top":"-80px", "background-color":'#000'});
             // 스크롤을 내렸을때 #nav CSS 속성중 top 값을 -75px로 변경
        } else {
            $("#nav").css("top","0px");
        }
        lastScrollTop = st;
    });

    $(function(){
        $('.sub_nav li').eq(0).trigger('click');
    })
    $('.sub_nav li').on({
        'click':function(){
            $(this).find('span.bgg').css('top','0')
            $(this).siblings().find('span.bgg').css('top','100%')
        }
    })
    //-----------스크롤시 위로버튼 생성
    $('#scrolltotop').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scrolltotop').fadeIn('slow');
        } else {
            $('#scrolltotop').fadeOut('slow');
        }
    });
    $('#scrolltotop a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    ////////////////////////////////////////
    /*$(window).scroll(function(){
        var st = $(this).scrollTop();
        if(st>1000){
            $('.end_1 h2').stop().slideUp().css('opacity','1');
        }
    })*/
    $('#nav2>ul>li>a').on({
        'click':function(){
            $('.hidden_slide').slideToggle();
        }
    })

})
