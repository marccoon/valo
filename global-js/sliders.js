// В этом файле находятся только слайдеры которые запускаются при загрузке страницы
// Если же слайдер запускается после события,например: Клик по кнопке, то он находится в JS файле страницы.
//  Слайдер шапки находится в header.js
// Слайдеры в модальных окнах, находятся в left-buttons
let windowWidth = document.documentElement.clientWidth;
// owl carousel
if ($('.default-owl-slider')) {
    $('.default-owl-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        items: 1
    });
}

if ($('.current-promotions__slider')) {
    $('.current-promotions__slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        items: 1,
        margin:40,
        autoHeight: true,
        stagePadding: 10,
        responsive: {
            1250: {
                items: 3
            }
        }
    });
}


if ($('.work-invest__cards')) {
    $('.work-invest__cards').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            1251: {
                items: 3
            }
        }
    })
}


if ($('.main-partners__slider')) {
    $('.main-partners__slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        mouseDrag : false,
        responsive: {
            0: {
                items: 1
            },
            750: {
                items: 2
            },
            1250: {
                items: 3
            },
            1450: {
                items: 4
            }
        }
    });
}

//obj-card
$('.slider-two').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:3
        },
        1400: {
            items:4
        }
    }
});

// trade-in and s-page
if (windowWidth <= '1250') {
    if ($('.trade-in-slider-2')) {
        $('.trade-in-slider-2').owlCarousel({
            loop:true,
            dots:false,
            nav:true,
            autoplay:false,
            responsive:{
                0:{
                    items: 1
                }
            }
        });
    }
}
//services
if ($('.slider-third')) {
    $('.slider-third').owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            1300: {
                items: 2
            }
        }
    });
}
if ($('.slider-four')) {
    $('.slider-four').owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            1250: {
                items: 2
            }
        }
    });
}
//slick
if ($('.index-slick')) {
    $('.index-slick').slick();
}
if ($('.index-slick-1250')) {
    if (windowWidth < 1250)
    $('.index-slick-1250').slick({
        prevArrow:`<button type="button" class="circle-prev"></button>`,
        nextArrow: `<button type="button" class="circle-next"></button>`,
    });
}
// about-company
if ($('.about-slick')) {
    $('.about-slick').slick({
        prevArrow:`<button type="button" class="circle-prev about-prev"></button>`,
        nextArrow: `<button type="button" class="circle-next about-next"></button>`,
        infinite: false
    });
}
//infrastructure
if ($('.project-in__container')) {
    if (windowWidth < 1250) {
        $('.project-in__container').slick({
            prevArrow:`<button type="button" class="circle-prev project-in__container-prev"></button>`,
            nextArrow: `<button type="button" class="circle-next project-in__container-next"></button>`,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
}
if ($('.euro-lvl__circles-flex__mobile-slider')) {
    if (windowWidth < 750) {
        $('.euro-lvl__circles-flex__mobile-slider').slick({
            prevArrow:`<button type="button" class="euro-lvl__circles-flex__mobile-slider-prev"></button>`,
            nextArrow: `<button type="button" class="euro-lvl__circles-flex__mobile-slider-next"></button>`,
            slidesToShow: 1,
            dots: false
        })
    }
}
if ($('.infrastructure-page__first-slider_slider')) {
    $('.infrastructure-page__first-slider_slider').slick({
        prevArrow:`<button type="button" class="circle-prev infrastructure-page__first-slider_slider_item-left"></button>`,
        nextArrow: `<button type="button" class="circle-next infrastructure-page__first-slider_slider_item-right"></button>`,
        slidesToShow: 1,
    });
}

$('.profit-programs__cards').slick({
    prevArrow:`<button type="button" class="circle-prev profit-programs__cards-arr-left"></button>`,
    nextArrow: `<button type="button" class="circle-next profit-programs__cards-arr-right"></button>`,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 1
            }
        }
     ]
});
//partners
$('.partners-main__global__container__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1450,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
//s-page
if ($('.shub-slider') || $('.shub-slider2')) {
    $('.shub-slider, .shub-slider2').slick({
        prevArrow:`<button type="button" class="circle-prev"></button>`,
        nextArrow: `<button type="button" class="circle-next"></button>`,
        slidesToShow: 3,
        rows: 2,
        infinite: false,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                }
            },
        ]
    });
}

if (windowWidth <= '1250') {
    if (!$('.s-1250-slider').hasClass('slick-initialized')) {
        $('.s-1250-slider').slick({
            prevArrow:`<button type="button" class="circle-prev"></button>`,
            nextArrow: `<button type="button" class="circle-next"></button>`,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }
}





var sync1 = $("#sync1");
var sync2 = $("#sync2");
var slidesPerPage = 3; //globaly define number of elements per page
var syncedSecondary = true;

sync1.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: false,
    dots: true,
    loop: true,
    responsiveRefreshRate: 200,
}).on('changed.owl.carousel', syncPosition);

sync2
    .on('initialized.owl.carousel', function() {
        sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
        items: slidesPerPage,
        dots: true,
        nav: true,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate: 100,

    }).on('changed.owl.carousel', syncPosition2);

function syncPosition(el) {

    var count = el.item.count - 1;
    var current = Math.round(el.item.index - (el.item.count / 2) - .5);

    if (current < 0) {
        current = count;
    }
    if (current > count) {
        current = 0;
    }

    //end block

    sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();

    if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
}

function syncPosition2(el) {
    if (syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
    }
}

sync2.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
});
