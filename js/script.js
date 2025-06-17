$('.header_menu_list li').mouseover(function () {
    $(this).find('.sub_list').stop().slideDown();
});
$('.header_menu_list li').mouseleave(function () {
    $('.sub_list').stop().slideUp();
});
$('.hamburger a').click(function () {
    $('.hidden_menu').slideToggle();
});

$(window).scroll(function () {
    var nowscroll = $(window).scrollTop();

    if (nowscroll > 100) {
        $('.header_white').fadeIn('fast');
        $('.header').fadeOut();
    } else {
        $('.header_white').fadeOut('fast');
        $('.header').fadeIn();
    }
});
