$('.header__menu_btn').click(function () {
    $('.header__menu').fadeIn(500);
});
$('.header__menu_cross').click(function () {
    $('.header__menu').fadeOut(500);
});

var $preloader = $('#p_prldr'),
    $svg_anm = $preloader.find('.svg_anm');
$svg_anm.fadeOut();
$preloader.delay(1000).fadeOut('slow');

var owl = $('.header-slider');
owl.owlCarousel({
    loop:true,
    dots: false,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:2
        },
        1360:{
            items:4
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
