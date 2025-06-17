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

$('.banner_list_text li').last().prependTo('.banner_list_text');
$('.banner_list_text').css('top', -80);

$('.up').click(function () {
    $('.banner_list_text').animate({ top: '-=' + 80 }, 'slow', function () {
        $('.banner_list_text li').first().appendTo('.banner_list_text');
        $('.banner_list_text').css('top', -80);
    });
});
$('.down').click(function () {
    $('.banner_list_text').animate({ bottom: '+=' - 80 }, 'slow', function () {
        $('.banner_list_text li').first().appendTo('.banner_list_text');
        $('.banner_list_text').css('bottom', +80);
    });
});
