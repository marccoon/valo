let sliderContainer = document.querySelector('.shub-slider');
let sliderContainer2 = document.querySelector('.shub-slider2');
let sliderContainer3 = document.querySelector('.shub-slider3');
const counters = document.querySelector('.shub-number-block');
let windowWidth;
let breakpoint1 = [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1
      }
    }
  ];
//Сюда добавлять ссылки на фото для слайдеров
//Реализовано так сложно, потому, что в мобильной версии 1 ряд элементов, а в десктопной 2.
//Сначала создаём каждый элемент в слайдере в зависимости от экрана, потом добаваляем в DOM
//При ресайзе всё рушится и создаётся по новой
// При переключениями между слайдерами, всё рушится и создаётся заново (это из-за особенности работы слайдера, инчае развалится
let photoArr = [
    'img/shab-slide0.png',
    'img/shab-slide1.png',
    'img/shab-slide2.png',
    'img/shab-slide3.png',
    'img/shab-slide4.png',
    'img/shab-slide5.png',
    'img/shab-slide6.png',
    'img/shab-slide0.png',
    'img/shab-slide1.png',
    'img/shab-slide2.png',
    'img/shab-slide3.png',
    'img/shab-slide4.png',
    'img/shab-slide5.png',
    'img/shab-slide6.png',
    'img/shab-slide0.png',
    'img/shab-slide1.png',
    'img/shab-slide2.png',
    'img/shab-slide3.png',
    'img/shab-slide4.png',
    'img/shab-slide5.png',
    'img/shab-slide6.png'
];
let photoArr2 = [
    'img/white-photos/1.jpg',
    'img/white-photos/2.jpg',
    'img/white-photos/3.jpg',
    'img/white-photos/4.jpg',
    'img/white-photos/5.jpg',
    'img/white-photos/6.jpg',
    'img/white-photos/1.jpg',
    'img/white-photos/2.jpg',
    'img/white-photos/3.jpg',
    'img/white-photos/4.jpg',
    'img/white-photos/5.jpg',
    'img/white-photos/6.jpg'
];
let photoArr3 = [
    'img/black-photos/1.jpg',
    'img/black-photos/2.jpg',
    'img/black-photos/3.jpg',
    'img/black-photos/4.jpg',
    'img/black-photos/5.jpg',
    'img/black-photos/1.jpg',
    'img/black-photos/2.jpg',
    'img/black-photos/3.jpg',
    'img/black-photos/4.jpg',
    'img/black-photos/5.jpg',
    'img/black-photos/1.jpg',
    'img/black-photos/2.jpg',
    'img/black-photos/3.jpg',
    'img/black-photos/4.jpg',
    'img/black-photos/5.jpg'
];
//Создание слайдера
function sliderInit (sliderName, prev, next, infinite, slidesToShow, responsiveCode) {
    if (!$(sliderName).hasClass('slick-initialized')) {
        $(sliderName).slick({
            prevArrow: prev,
            nextArrow: next,
            infinite: infinite,
            slidesToShow: slidesToShow,
            responsive: responsiveCode
        });
    }
}
// Удаление слайдера
function delSlider (slider) {
    if ($(slider).hasClass('slick-initialized')) {
        $(slider).slick('destroy');
    }
}
// Создаём новый слайд
function newItem() {
    var sliderItem = document.createElement('div');
    sliderItem.classList.add('shub-slider_item');
    return sliderItem
}
// Добавляем слайд в слайдер
function addToSliderContainer (containerName, elem) {
    containerName.appendChild(elem);
}
// Создаём новую картинку
function newImg () {
    var sliderItemImg = document.createElement('img');
    sliderItemImg.classList.add('shub-slider_item_img');
    return sliderItemImg
}
//Создаём новую fancybox ссылку
function newFuncyBoxLink(gallaryName) {
    var funcyLink = document.createElement('a');
    funcyLink.classList.add('shub-slider-link');
    $(funcyLink).attr('data-fancybox',gallaryName);
    return funcyLink
}
// Создаём новую маску для картинки слайдера
function newImgMask() {
    var imgMask = document.createElement('div');
    imgMask.classList.add('shub-img-mask');
    return imgMask
}
// Используя функции выше, при помощи цикла заполняем слайдер картинками в нужном порядке
function itemsToSlider (fancyLink,photoArray,containerName) {
    let currentSlide;
    for (let i = 1; i < photoArray.length + 1; i++) {
        if (i === 1) {
            currentSlide = newItem()
        }
        let currentLink = newFuncyBoxLink(fancyLink);
        $(currentLink).attr('href', photoArray[i - 1]);
        let currentImg = newImg();
        let currentImgMask =  newImgMask();
        currentLink.append(currentImg);
        currentLink.append(currentImgMask);
        $(currentImg).attr('src', photoArray[i - 1]);
        currentLink.append(currentImg);
        currentSlide.append(currentLink);
        if (i % 6 === 0 || i === photoArray.length) {
            addToSliderContainer(containerName, currentSlide);
            currentSlide = newItem();
        }
    }
}
// Для мобильной версии
function itemsToSliderMomile(fancyLink, photoArray, containerName) {
    let currentSlide;
    for (let i = 1; i < photoArray.length + 1; i++) {
        if (i === 1) {
            currentSlide = newItem()
        }
        let currentLink = newFuncyBoxLink(fancyLink);
        $(currentLink).attr('href', photoArray[i - 1]);
        let currentImg = newImg();
        currentLink.append(currentImg);
        $(currentImg).attr('src', photoArray[i - 1]);
        currentLink.append(currentImg);
        currentSlide.append(currentLink);
        addToSliderContainer(containerName, currentSlide);
        currentSlide = newItem();
    }
}
// Заполнение слайдеров и переключение между ними
function choseColor (clickBtn, otherBtn, showSlider, hideSlider, gallery, photoArray, container) {
    $(clickBtn).click(function () {
        if ($(window).width() <= '1250') {
            if (!$(this).hasClass('color-choose-active')) {
                $(otherBtn).removeClass('color-choose-active');
                $(clickBtn).addClass('color-choose-active');
                container.innerHTML = '';
                $(hideSlider).hide();
                delSlider(hideSlider);
                $(showSlider).show();
                itemsToSliderMomile(gallery,photoArray,container);
                sliderInit(
                    showSlider,
                    `<button type="button" class="circle-prev"></button>`,
                    `<button type="button" class="circle-next"></button>`,
                    false,
                    1
                );
            }
        } else {
            if (!$(this).hasClass('color-choose-active')) {
                $(otherBtn).removeClass('color-choose-active');
                $(clickBtn).addClass('color-choose-active');
                container.innerHTML = '';
                $(hideSlider).hide();
                delSlider(hideSlider);
                $(showSlider).show();
                itemsToSlider(gallery,photoArray,container);
                sliderInit(
                    showSlider,
                    `<button type="button" class="circle-prev"></button>`,
                    `<button type="button" class="circle-next"></button>`,
                    false,
                    1
                );
            }
        }
    });
}

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


    choseColor(
        '.shub-black-white-slider-choose_buttons_btn2',
        '.shub-black-white-slider-choose_buttons_btn1',
        '.shub-slider3',
        '.shub-slider2',
        'gallery3',
        photoArr3,
        sliderContainer3
        );
    choseColor(
        '.shub-black-white-slider-choose_buttons_btn1',
        '.shub-black-white-slider-choose_buttons_btn2',
        '.shub-slider2',
        '.shub-slider3',
        'gallery2',
        photoArr2,
        sliderContainer2
    );
    if (windowWidth <= '1250') {
        itemsToSliderMomile('gallery',photoArr,sliderContainer);
        itemsToSliderMomile('gallery2',photoArr2,sliderContainer2);
        sliderInit(
            '.shub-slider',
            `<button type="button" class="circle-prev"></button>`,
            `<button type="button" class="circle-next"></button>`,
            false,
            1,
        );
        sliderInit (
            '.shub-slider2',
            `<button type="button" class="circle-prev"></button>`,
            `<button type="button" class="circle-next"></button>`,
            false,
            1
        );
        sliderInit(
            '.shub-number-block__container',
            `<button type="button" class="circle-prev"></button>`,
            `<button type="button" class="circle-next"></button>`,
            true,
            3,
            breakpoint1
        );
        sliderInit(
            '.shub-icons-row',
            `<button type="button" class="circle-prev"></button>`,
            `<button type="button" class="circle-next"></button>`,
            false,
            3,
            breakpoint1
        );
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
    } else {
        itemsToSlider('gallery',photoArr,sliderContainer);
        itemsToSlider('gallery2',photoArr2,sliderContainer2);
        sliderInit(
            '.shub-slider',
            `<button type="button" class="circle-prev"></button>`,
            `<button type="button" class="circle-next"></button>`,
            false,
            1
        );
        sliderInit(
            '.shub-slider2',
            `<button type="button" class="circle-prev"></button>`,
            `<button type="button" class="circle-next"></button>`,
            false,
            1
        );
    }


    $('#beforeAfter').beforeafter({
        message: '←→'
    });


    $.fancybox.defaults.backFocus = false;

    $(window).resize(function() {
        windowWidth = $(window).width();
        if (windowWidth <= '1250') {
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

            sliderInit(
                '.shub-number-block__container',
                `<button type="button" class="circle-prev"></button>`,
                `<button type="button" class="circle-next"></button>`,
                true,
                3,
                breakpoint1
            );
            sliderInit(
                '.shub-icons-row',
                `<button type="button" class="circle-prev"></button>`,
                `<button type="button" class="circle-next"></button>`,
                true,
                3,
                breakpoint1
            );

            delSlider('.shub-slider');
            sliderContainer.innerHTML = '';
            itemsToSliderMomile('gallery',photoArr,sliderContainer);
            sliderInit(
                '.shub-slider',
                `<button type="button" class="circle-prev"></button>`,
                `<button type="button" class="circle-next"></button>`,
                false,
                1
            );
            if ($('.shub-black-white-slider-choose_buttons_btn1').hasClass('color-choose-active')) {
                delSlider('.shub-slider2');
                sliderContainer2.innerHTML = '';
                itemsToSliderMomile('gallery2',photoArr2,sliderContainer2);
                sliderInit(
                    '.shub-slider2',
                    `<button type="button" class="circle-prev"></button>`,
                    `<button type="button" class="circle-next"></button>`,
                    false,
                    1
                );
            }
            if ($('.shub-black-white-slider-choose_buttons_btn2').hasClass('color-choose-active')) {
                delSlider('.shub-slider3');
                sliderContainer3.innerHTML = '';
                itemsToSliderMomile('gallery3',photoArr3,sliderContainer3);
                sliderInit(
                    '.shub-slider3',
                    `<button type="button" class="circle-prev"></button>`,
                    `<button type="button" class="circle-next"></button>`,
                    false,
                    1
                );
            }
        } else {
            delSlider('.shub-icons-row');
            delSlider('.shub-slider');
            delSlider('.shub-number-block__container');
            $('.shub-number-block__item').fadeIn(500)
            sliderContainer.innerHTML = '';
            itemsToSlider('gallery',photoArr,sliderContainer);
            sliderInit(
                '.shub-slider',
                `<button type="button" class="circle-prev"></button>`,
                `<button type="button" class="circle-next"></button>`,
                false,
                1
            );
            if ($('.shub-black-white-slider-choose_buttons_btn1').hasClass('color-choose-active')) {
                delSlider('.shub-slider2');
                sliderContainer2.innerHTML = '';
                itemsToSlider('gallery2',photoArr2,sliderContainer2);
                sliderInit(
                    '.shub-slider2',
                    `<button type="button" class="circle-prev"></button>`,
                    `<button type="button" class="circle-next"></button>`,
                    false,
                    1
                );
            }
            if ($('.shub-black-white-slider-choose_buttons_btn2').hasClass('color-choose-active')) {
                delSlider('.shub-slider3');
                sliderContainer3.innerHTML = '';
                itemsToSlider('gallery3',photoArr3,sliderContainer3);
                sliderInit(
                    '.shub-slider3',
                    `<button type="button" class="circle-prev"></button>`,
                    `<button type="button" class="circle-next"></button>`,
                    false,
                    1
                );
            }
        }
    });

};



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
