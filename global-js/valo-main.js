let banks = document.querySelectorAll('.buy-variants__banks_right_item');

// функция для подсветки корпуса и показа блока с инфой
function showMask (corp, modal, addedClass) {
    corp.hover(function () {
            $('#complexMask').addClass(addedClass)
            modal.fadeIn(250)
        },
        function () {
            $('#complexMask').removeClass(addedClass)
            modal.fadeOut(250)
    });
}

function getColor (input, button, nb1, nb2, nb3, nb4) {
    if ($(input).prop('checked')){
        $(button).addClass('white-bg');
        $(nb1).removeClass('white-bg');
        $(nb2).removeClass('white-bg');
        $(nb3).removeClass('white-bg');
        $(nb4).removeClass('white-bg');
    }
}

function bankOpacity () {
    for (let i = 0; i < banks.length;i++) {
        let bank = banks[i];
        $(bank).css('border', 'none');
        $(bank).css('opacity', '.8');
    }
}



window.onload = function () {
    showMask ($('#corp1'), $('.first-modal'), 'complex-plan__img__corp-1-hover');
    showMask ($('#corp2'), $('.second-modal'), 'complex-plan__img__corp-2-hover');
    showMask ($('#corp3'), $('.third-modal'), 'complex-plan__img__corp-3-hover');
    showMask ($('#corp4'), $('.four-modal'), 'complex-plan__img__corp-4-hover');
    showMask ($('#corp5'), $('.five-modal'), 'complex-plan__img__corp-5-hover');
    showMask ($('#corp6'), $('.six-modal'), 'complex-plan__img__corp-6-hover');
    showMask ($('#corp7'), $('.seven-modal'), 'complex-plan__img__corp-7-hover');
    showMask ($('#corp8'), $('.eight-modal'), 'complex-plan__img__corp-8-hover');

    $('#corp1Btn').change(function () {getColor('#corp1Btn', '#firstCorp','#secondCorp','#thirdCorp','#fourCorp','#fiveCorp')});
    $('#corp2Btn').change(function () {getColor('#corp2Btn', '#secondCorp','#firstCorp','#thirdCorp','#fourCorp','#fiveCorp')});
    $('#corp3Btn').change(function () {getColor('#corp3Btn', '#thirdCorp','#secondCorp','#firstCorp','#fourCorp','#fiveCorp')});
    $('#corp4Btn').change(function () {getColor('#corp4Btn', '#fourCorp','#thirdCorp','#secondCorp','#firstCorp','#fiveCorp')});
    $('#corp5Btn').change(function () {getColor('#corp5Btn', '#fiveCorp','#thirdCorp','#secondCorp','#firstCorp','#fourCorp')});

    $('.complex-plan').click(function (e) {
        if (e.target === corp1) {
            $('#corp1Btn').prop('checked', true);
            $('#firstCorp').addClass('white-bg');
            $('#secondCorp').removeClass('white-bg');
            $('#thirdCorp').removeClass('white-bg');
            $('#fourCorp').removeClass('white-bg');
            $('#fiveCorp').removeClass('white-bg');
        } else if (e.target === corp2) {
            $('#corp1Btn').prop('checked', true);
            $('#firstCorp').addClass('white-bg');
            $('#secondCorp').removeClass('white-bg');
            $('#thirdCorp').removeClass('white-bg');
            $('#fourCorp').removeClass('white-bg');
            $('#fiveCorp').removeClass('white-bg');;
        } else if (e.target === corp3) {
            $('#corp1Btn').prop('checked', true);
            $('#firstCorp').addClass('white-bg');
            $('#secondCorp').removeClass('white-bg');
            $('#thirdCorp').removeClass('white-bg');
            $('#fourCorp').removeClass('white-bg');
            $('#fiveCorp').removeClass('white-bg');
        } else if (e.target === corp4) {
            $('#corp1Btn').prop('checked', true);
            $('#firstCorp').addClass('white-bg');
            $('#secondCorp').removeClass('white-bg');
            $('#thirdCorp').removeClass('white-bg');
            $('#fourCorp').removeClass('white-bg');
            $('#fiveCorp').removeClass('white-bg');
        } else if (e.target === corp5) {
            $('#corp2Btn').prop('checked', true);
            $('#firstCorp').removeClass('white-bg');
            $('#secondCorp').addClass('white-bg');
            $('#thirdCorp').removeClass('white-bg');
            $('#fourCorp').removeClass('white-bg');
            $('#fiveCorp').removeClass('white-bg');
        } else if (e.target === corp6) {
            $('#corp3Btn').prop('checked', true);
            $('#firstCorp').removeClass('white-bg');
            $('#secondCorp').removeClass('white-bg');
            $('#thirdCorp').addClass('white-bg');
            $('#fourCorp').removeClass('white-bg');
            $('#fiveCorp').removeClass('white-bg');
        } else if (e.target === corp7) {
            $('#corp4Btn').prop('checked', true);
            $('#firstCorp').removeClass('white-bg');
            $('#secondCorp').removeClass('white-bg');
            $('#thirdCorp').removeClass('white-bg');
            $('#fourCorp').addClass('white-bg');
            $('#fiveCorp').removeClass('white-bg');
        } else if (e.target === corp8) {
            $('#corp5Btn').prop('checked', true);
            $('#firstCorp').removeClass('white-bg');
            $('#secondCorp').removeClass('white-bg');
            $('#thirdCorp').removeClass('white-bg');
            $('#fourCorp').removeClass('white-bg');
            $('#fiveCorp').addClass('white-bg');
        }
    });

    // owl carousel
    $('.main-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        animateOut: 'fadeOut',
        mouseDrag : false,
        touchDrag : false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.description-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        animateOut: 'fadeOut',
        mouseDrag : false,
        touchDrag : false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.infrastructure-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        animateOut: 'fadeOut',
        mouseDrag : false,
        touchDrag : false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.hostel-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        animateOut: 'fadeOut',
        mouseDrag : false,
        touchDrag : false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

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

    $('.big-progress-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        mouseDrag : false,
        touchDrag : false,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.little-progress-slider-1').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        mouseDrag : false,
        touchDrag : false,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.little-progress-slider-2').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        mouseDrag : false,
        touchDrag : false,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
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

    $('.prof-company-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        mouseDrag : false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.work-invest-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        mouseDrag : false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('#rassBtn').click(function () {
        $('.rassrochka-slider-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            autoplay: false,
            mouseDrag : false,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    });

    $('#stoProBtn').click(function () {
        $('.sto-pro-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            autoplay: false,
            mouseDrag : false,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    });

    $('.why-valo-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        mouseDrag : false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.location-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        mouseDrag : false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    // slick

    $('.big-progress-slider_item-1').slick();
    $('.big-progress-slider_item-2').slick();

    $('.how-to-buy__choose-buttons').change(function () {
        if ($('#ipotecaCheck').prop('checked')) {
            $('#rassrochka').hide();
            $('#stoPro').hide();
            $('#tradeIn').hide();
            $('#ipoteca').fadeIn(1000);
            if ($(window).width() <= '1250'){
                $('.buy-variants').css("height", "1250px");
            }
            if ($(window).width() <= '750'){
                $('.buy-variants').css("height", "870px");
            }
        } else if ($('#rassrochkaCheck').prop('checked')) {
            $('#ipoteca').hide();
            $('#stoPro').hide();
            $('#tradeIn').hide();
            $('#rassrochka').fadeIn(1000);
            if ($(window).width() <= '1250'){
                $('.buy-variants').css("height", "750px");
            }
            if ($(window).width() <= '750'){
                $('.buy-variants').css("height", "550px");
            }
        } else if ($('#stoProCheck').prop('checked')) {
            $('#ipoteca').hide();
            $('#rassrochka').hide();
            $('#tradeIn').hide();
            $('#stoPro').fadeIn(1000);
            if ($(window).width() <= '1250'){
                $('.buy-variants').css("height", "750px");
            }
            if ($(window).width() <= '750'){
                $('.buy-variants').css("height", "550px");
            }
        } else if ($('#tradeInCheck').prop('checked')) {
            $('#ipoteca').hide();
            $('#rassrochka').hide();
            $('#stoPro').hide();
            $('#tradeIn').fadeIn(1000);
            if ($(window).width() <= '1250'){
                $('.buy-variants').css("height", "750px");
            }
            if ($(window).width() <= '750'){
                $('.buy-variants').css("height", "550px");
            }
        }
    });




    $('.buy-variants__banks_right').bind("click", function (e) {
        if (e.target === bank1) {
            bankOpacity();
            $('#bank1').css('border', '2px solid rgba(87, 181, 187, 1)');
            $('#bank1').css('opacity', '1');
            $('#maxSum').text('60 млн. руб.');
            $('#vzn').text('от 20%');
            $('#stav').text('от 9,5%');
            $('#srok').text('от 5 лет');
            $('#bankImg').attr("src", 'img/1bank.png');
        } else if (e.target === bank2) {
            bankOpacity();
            $('#bank2').css('border', '2px solid rgba(87, 181, 187, 1)');
            $('#bank2').css('opacity', '1');
            $('#maxSum').text('2 млн');
            $('#vzn').text('от 2%');
            $('#stav').text('от 2%');
            $('#srok').text('от 2 года');
            $('#bankImg').attr("src", 'img/2bank.png');
        } else if (e.target === bank3) {
            bankOpacity();
            $('#bank3').css('border', '2px solid rgba(87, 181, 187, 1)');
            $('#bank3').css('opacity', '1');
            $('#maxSum').text('3 млн');
            $('#vzn').text('от 3%');
            $('#stav').text('от 3%');
            $('#srok').text('от 3 года');
            $('#bankImg').attr("src", 'img/3bank.png');
        } else if (e.target === bank4) {
            bankOpacity();
            $('#bank4').css('border', '2px solid rgba(87, 181, 187, 1)');
            $('#bank4').css('opacity', '1');
            $('#maxSum').text('4 млн');
            $('#vzn').text('от 4%');
            $('#stav').text('от 4%');
            $('#srok').text('от 4 года');
            $('#bankImg').attr("src", 'img/4bank.png');
        } else if (e.target === bank5) {
            bankOpacity();
            $('#bank5').css('border', '2px solid rgba(87, 181, 187, 1)');
            $('#bank5').css('opacity', '1');
            $('#maxSum').text('5 млн');
            $('#vzn').text('от 5%');
            $('#stav').text('от 5%');
            $('#srok').text('от 5 года');
            $('#bankImg').attr("src", 'img/5bank.png');
        } else if (e.target === bank6) {
            bankOpacity();
            $('#bank6').css('border', '2px solid rgba(87, 181, 187, 1)');
            $('#bank6').css('opacity', '1');
            $('#maxSum').text('6 млн');
            $('#vzn').text('от 6%');
            $('#stav').text('от 6%');
            $('#srok').text('от 6 года');
            $('#bankImg').attr("src", 'img/6bank.png');
        } else if (e.target === bank7) {
            bankOpacity();
            $('#bank7').css('border', '2px solid rgba(87, 181, 187, 1)');
            $('#bank7').css('opacity', '1');
            $('#maxSum').text('7 млн');
            $('#vzn').text('от 7%');
            $('#stav').text('от 7%');
            $('#srok').text('от 7 года');
            $('#bankImg').attr("src", 'img/7bank.png');
        } else if (e.target === bank8) {
            bankOpacity();
            $('#bank8').css('border', '2px solid rgba(87, 181, 187, 1)');
            $('#bank8').css('opacity', '1');
            $('#maxSum').text('8 млн');
            $('#vzn').text('от 8%');
            $('#stav').text('от 8%');
            $('#srok').text('от 8 года');
            $('#bankImg').attr("src", 'img/8bank.png');
        } else if (e.target === bank9) {
            bankOpacity();
            $('#bank9').css('border', '2px solid rgba(87, 181, 187, 1)');
            $('#bank9').css('opacity', '1');
            $('#maxSum').text('9 млн');
            $('#vzn').text('от 9%');
            $('#stav').text('от 9%');
            $('#srok').text('от 9 года');
            $('#bankImg').attr("src", 'img/9bank.png');
        }
    });


    // Отображение даты на слайдере
    let globalSlider = document.querySelector('.big-progress-slider');
    let leftBtn = globalSlider.querySelector('.owl-prev');
    let rightBtn = globalSlider.querySelector('.owl-next');
    leftBtn.onclick = function () {
        let currentSlide = globalSlider.querySelector('.active');
        let currentElem = currentSlide.querySelector('.big-progress-slider_item');
        let currentData = $(currentElem).data('date');
        constructionText.textContent = currentData;
    };

    rightBtn.onclick = function () {
        let currentSlide = globalSlider.querySelector('.active');
        let currentElem = currentSlide.querySelector('.big-progress-slider_item');
        let currentData = $(currentElem).data('date');
        constructionText.textContent = currentData;
    };

    $('#camera1Btn').click(function () {
        $('#camera1').fadeIn(1000);
    });
    $('#closeVideoBtn').click(function () {
        $('#camera1').fadeOut(1000);
    });



    let corpusButtons = document.querySelectorAll('.complex-plan__choose-corp__buttons_label_btn');
    if ($(window).width() <= '750'){
        for (var i = 0; i < corpusButtons.length; i++) {
            corpusButtons[i].textContent = (i + 1).toString();
        }
    }

    $('.public-space').parallax({imageSrc: 'img/490.webp'});
    $('.valo-its').parallax({imageSrc: 'img/490.webp'})
    $('.valo-location').parallax({imageSrc: 'img/1130.webp'})
    $('.main-partners').parallax({imageSrc: 'img/756.webp'})
    $('.work-invest').parallax({imageSrc: 'img/768.webp'})
    $('.construction-progress').parallax({imageSrc: 'img/1137.webp'})

};

window.addEventListener('resize', function(){
    let corpusButtons = document.querySelectorAll('.complex-plan__choose-corp__buttons_label_btn');
    if ($(window).width() > '750'){
        for (var i = 0; i < corpusButtons.length; i++) {
            corpusButtons[i].textContent = ("КОРПУС " + (i + 1)).toString();
        }
    }
    if ($(window).width() <= '750'){
        for (var i = 0; i < corpusButtons.length; i++) {
            corpusButtons[i].textContent = (i + 1).toString();
        }
    }
});



