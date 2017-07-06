$(function(){
    $('.slide li a').on({
        'click':function(){
            $(this).parent().siblings().removeClass('on')
            $(this).parent().addClass('on')
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

})
