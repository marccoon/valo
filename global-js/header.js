let heigth = ($(window).height());
window.onresize = function(event) {
    heigth = ($(window).height());
    $('.loader').height(heigth)
};
$('.header__menu_btn').click(function () {
    $('.header__menu').fadeIn(500);
});
$('.header__menu_cross').click(function () {
    $('.header__menu').fadeOut(500);
});
var owl = $('.header-slider');
owl.owlCarousel({
    loop:true,
    dots: false,
    nav:true,
    margin:10,
    responsive:{
        1360:{
            items:4
        },
        0:{
            items:2
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
$('.header__right-big__container__item3').click(function () {
    if ($('.header__right-big__container__item3').hasClass('header__right-big__container__item3-active')) {
        $('.header__right-big__container__item3').removeClass('header__right-big__container__item3-active')
    } else {
        $('.header__right-big__container__item3').addClass('header__right-big__container__item3-active')
    }
});
$(document).mouseup(function (e) {
    let container = $(".header__right-big__container__item3");
    if (container.has(e.target).length === 0){
        $('.header__right-big__container__item3').removeClass('header__right-big__container__item3-active');
        $('.header__right-big__container__item3').val('');
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
