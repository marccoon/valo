const counters = document.querySelector('.shub-number-block');
let windowWidth;
function chooseFurniture (clickBtn, showBlock) {
    let hideArray = [];
    for (var i = 0; i < arguments.length; i++) {
        if (i > 1) {
            hideArray.push(arguments[i]);
        }
    }

    $(clickBtn).click(function () {
        for (var i = 0; i < hideArray.length; i++) {
            let currentHideBlock = hideArray[i];
            if ($(window).width() > '1250') {
                $(currentHideBlock).animate({
                    'left': -700
                });
            } else {
                $(currentHideBlock).animate({
                    'left': -1250
                });
            }
        }
        setTimeout(function () {
            if (
                $(clickBtn).hasClass('shub-hover-photo__container__icon-block2') &&  $(window).width() > '1250' ||
                $(clickBtn).hasClass('shub-hover-photo__container__icon-block3') && $(window).width() > '1250'
            )
            {
                $(showBlock).animate({
                    'left': 610
                })
            } else {
                $(showBlock).animate({
                    'left': 0
                })
            }
        },500)
    });
};

window.onload = function () {
    windowWidth = $(window).width();
    $('.shub-hover-photo__container__description-block_cross').click(function () {
        if (windowWidth > '1250') {
            $('.shub-hover-photo__container__description-block').animate({
                'left': -700
            });
        } else {
            $('.shub-hover-photo__container__description-block').animate({
                'left': -1250
            });
        }
    });

    $('.shub-slider').slick({
            prevArrow:`<button type="button" class="circle-prev"></button>`,
            nextArrow: `<button type="button" class="circle-next"></button>`,
            slidesToShow: 3,
            rows: 2,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 1,
                        rows: 1
                    }
                },
            ]
    });

    $('.shub-slider2').slick({
        prevArrow:`<button type="button" class="circle-prev"></button>`,
        nextArrow: `<button type="button" class="circle-next"></button>`,
        slidesToShow: 3,
        rows: 2,
        infinite: false,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 1,
                    rows: 1
                }
            },
        ]
    });

    $('.shub-black-white-slider-choose_buttons_btn1').click(function () {
        $('.shub-black-white-slider-choose_buttons_btn2').removeClass('color-choose-active')
        $('.shub-black-white-slider-choose_buttons_btn1').addClass('color-choose-active')
        $('.shub-slider3').hide()
        $('.shub-slider2').show()
        if (!$('.shub-slider2').hasClass('slick-initialized')) {
            $('.shub-slider2').slick({
                prevArrow:`<button type="button" class="circle-prev"></button>`,
                nextArrow: `<button type="button" class="circle-next"></button>`,
                slidesToShow: 3,
                rows: 2,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 1250,
                        settings: {
                            slidesToShow: 1,
                            rows: 1
                        }
                    },
                ]
            });
        }
    });

    $('.shub-black-white-slider-choose_buttons_btn2').click(function () {
        $('.shub-black-white-slider-choose_buttons_btn1').removeClass('color-choose-active')
        $('.shub-black-white-slider-choose_buttons_btn2').addClass('color-choose-active')
        $('.shub-slider2').hide()
        $('.shub-slider3').show()
        if (!$('.shub-slider3').hasClass('slick-initialized')) {
            $('.shub-slider3').slick({
                prevArrow:`<button type="button" class="circle-prev"></button>`,
                nextArrow: `<button type="button" class="circle-next"></button>`,
                slidesToShow: 3,
                rows: 2,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 1250,
                        settings: {
                            slidesToShow: 1,
                            rows: 1
                        }
                    },
                ]
            });
        }
    });

    chooseFurniture(
        '.shub-hover-photo__container__icon-block1',
        '.shub-hover-photo__container__description-block1',
        '.shub-hover-photo__container__description-block2',
        '.shub-hover-photo__container__description-block3',
        '.shub-hover-photo__container__description-block4',
        '.shub-hover-photo__container__description-block5'
        );
    chooseFurniture(
        '.shub-hover-photo__container__icon-block2',
        '.shub-hover-photo__container__description-block2',
        '.shub-hover-photo__container__description-block1',
        '.shub-hover-photo__container__description-block3',
        '.shub-hover-photo__container__description-block4',
        '.shub-hover-photo__container__description-block5'
    );
    chooseFurniture(
        '.shub-hover-photo__container__icon-block3',
        '.shub-hover-photo__container__description-block3',
        '.shub-hover-photo__container__description-block1',
        '.shub-hover-photo__container__description-block2',
        '.shub-hover-photo__container__description-block4',
        '.shub-hover-photo__container__description-block5'
    );
    chooseFurniture(
        '.shub-hover-photo__container__icon-block4',
        '.shub-hover-photo__container__description-block4',
        '.shub-hover-photo__container__description-block1',
        '.shub-hover-photo__container__description-block2',
        '.shub-hover-photo__container__description-block3',
        '.shub-hover-photo__container__description-block5'
    );
    chooseFurniture(
        '.shub-hover-photo__container__icon-block5',
        '.shub-hover-photo__container__description-block5',
        '.shub-hover-photo__container__description-block1',
        '.shub-hover-photo__container__description-block2',
        '.shub-hover-photo__container__description-block3',
        '.shub-hover-photo__container__description-block4'
    );

    if (windowWidth <= '1250') {

        if (!$('.shub-number-block__container').hasClass('slick-initialized')) {
            $('.shub-number-block__container').slick({
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

        if (!$('.shub-icons-row').hasClass('slick-initialized')) {
            $('.shub-icons-row').slick({
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

    $('#beforeAfter').beforeafter({
        message: '←→'
    });

    $.fancybox.defaults.backFocus = false;

    $(window).scroll(function () {
        let countersToTop = counters.getBoundingClientRect().top;
        if ($('.shub-number-block__item_number1').text().length === 0) {

        if (countersToTop < 600) {
            $('.shub-number-block__item').fadeIn(500)
            $('.shub-number-block__item_number1').spincrement({
                duration: 2000,
                from: 0,
                to: 1200,
                thousandSeparator: false
            });
            $('.shub-number-block__item_number2').spincrement({
                duration: 2000,
                from: 0,
                to: 270,
                thousandSeparator: false
            });
            $('.shub-number-block__item_number3').spincrement({
                duration: 2000,
                from: 0,
                to: 27,
                thousandSeparator: false
            });
            $('.shub-number-block__item_number4').spincrement({
                duration: 2000,
                from: 0,
                to: 31,
                thousandSeparator: false
            });
            $('.shub-number-block__item_number5').spincrement({
                duration: 2000,
                from: 0,
                to: 450,
                thousandSeparator: false
            });
            $('.shub-number-block__item_number6').spincrement({
                duration: 2000,
                from: 0,
                to: 1000,
                thousandSeparator: false
            });
         }
        }
    });
}