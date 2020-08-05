let heigth = ($(window).height());
window.onresize = function(event) {
    heigth = ($(window).height());
    $('.loader').height(heigth)
};
$('.header__menu_btn').click(function () {
    $('.header__menu__mobile').fadeIn(500);
    $('body, html').addClass('blocked')
});
$('.header__menu_cross').click(function () {
    $('.header__menu__mobile').fadeOut(500);
    $('body, html').removeClass('blocked')
});

$('.header__right-big__container__item3').click(function () {
    if ($('.header__right-big__container__item3').hasClass('header__right-big__container__item3-active')) {
        $('.header__right-big__container__item3').removeClass('header__right-big__container__item3-active')
    } else {
        $('.header__right-big__container__item3').addClass('header__right-big__container__item3-active')
    }
});
$(document).mouseup(function (e) {
    let container = $(".search-section");
    if (container.has(e.target).length === 0){
        $('.search-section').slideUp()
        $('.search-section__input').val('')
    }

});
$('.showMeCallBack, .how-to-buy__managers_btn').click(function () {
    $('.mail-modal').fadeIn(500)
});

//Все дропдауны на сайте
$('.default-dropdown').hover(function () {
    $(this).children('.default-dropdown').css('top', $(this).innerHeight() + 3)
});

$('.default-dropdown').click(function () {
    $(this).children('.default-dropdown').css('top', $(this).innerHeight() + 3)
});

$('.left-buttons_btn4').click(function () {
        $('.search-section').slideDown()
        $(this).addClass('active')
});

$('.header__mobile-item').click(function (e) {
    if ($(e.target).hasClass('header__mobile-item-arrow') && !$(this).hasClass('active')) {
        $('.header__mobile-item').removeClass('active')
        $('.header__mobile-item-arrow').removeClass('active')
        $('.header__mobile-list-in').slideUp(300)
        $(this).addClass('active')
        $(this).find('.header__mobile-item-arrow').addClass('active')
        $(this).find('.header__mobile-list-in').slideDown(300)
    } else if ($(e.target).hasClass('header__mobile-item-arrow') && $(this).hasClass('active')) {
        $(this).removeClass('active')
        $(this).find('.header__mobile-item-arrow').removeClass('active')
        $(this).find('.header__mobile-list-in').slideUp(300)
    }
})
