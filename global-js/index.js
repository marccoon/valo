// функция для подсветки корпуса и показа блока с инфой
function showMask (corp, modal, addedClass) {
    corp.hover(function () {
            $('#complexMask').addClass(addedClass)
            modal.show()
        },
        function () {
            $('#complexMask').removeClass(addedClass)
            modal.hide()
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
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#firstCorp').addClass('white-bg');
        } else if (e.target === corp2) {
            $('#corp1Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#firstCorp').addClass('white-bg');
        } else if (e.target === corp3) {
            $('#corp1Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#firstCorp').addClass('white-bg');
        } else if (e.target === corp4) {
            $('#corp1Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#firstCorp').addClass('white-bg');
        } else if (e.target === corp5) {
            $('#corp2Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#secondCorp').addClass('white-bg');
        } else if (e.target === corp6) {
            $('#corp3Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#thirdCorp').addClass('white-bg');
        } else if (e.target === corp7) {
            $('#corp4Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#fourCorp').addClass('white-bg');
        } else if (e.target === corp8) {
            $('#corp5Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#fiveCorp').addClass('white-bg');
        }
    });
    $('#rassBtn, #stoProBtn').click(function () {
        $('.default-owl-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    });
    $('.how-to-buy__choose-buttons').change(function () {
        if ($('#ipotecaCheck').prop('checked')) {
            $('.buy-variants-item').hide()
            $('#ipoteca').fadeIn(1000);
        } else if ($('#rassrochkaCheck').prop('checked')) {
            $('.buy-variants-item').hide()
            $('#rassrochka').fadeIn(1000);
        } else if ($('#stoProCheck').prop('checked')) {
            $('.buy-variants-item').hide()
            $('#stoPro').fadeIn(1000);
        } else if ($('#tradeInCheck').prop('checked')) {
            $('.buy-variants-item').hide()
            $('#tradeIn').fadeIn(1000);
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
    $('.closeVideoBtn').click(function () {
        $('.popup').fadeOut(1000);
    });
    $('#camera2Btn').click(function () {
        $('#camera2').fadeIn(1000);
    });
    $('#camera3Btn').click(function () {
        $('#camera3').fadeIn(1000);
    });


    let corpusButtons = document.querySelectorAll('.complex-plan__choose-corp__buttons_label_btn');
    if ($(window).width() <= '750'){
        for (var i = 0; i < corpusButtons.length; i++) {
            corpusButtons[i].textContent = (i + 1).toString();
        }
    }
    $('.public-space').parallax({imageSrc: 'img/490.jpg'});
    $('.valo-its').parallax({imageSrc: 'img/490.jpg'})
    $('.valo-location').parallax({imageSrc: 'img/1130.jpg'})
    $('.main-partners').parallax({imageSrc: 'img/756.jpg'})
    $('.work-invest').parallax({imageSrc: 'img/768.jpg'})
    $('.loader').fadeOut(500)
};