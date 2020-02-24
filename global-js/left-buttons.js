//Информация, которая отправляется на бэк находится в скрытом инпуте с id toBackEnd
if ($('left-buttons_btn-container')) {
    let day = ''
    let month = ''
    let hours = ''
    let minutes = ''
    let year = new Date();
    year = year.getFullYear();
    function delSlider (slider) {
        if ($(slider).hasClass('slick-initialized')) {
            $(slider).slick('destroy');
        }
    }
    function initDateChoose () {
        let currentDate = new Date();
        for (var i = 0; i < 7; i++) {
            if (i === 0) {
                currentDate.getTime()
            } else if (i !== 0) {
                currentDate.setTime(currentDate.getTime()+1000*i*60*60*24);
            }
            let currentClassName = '.call-back-modal__container_bottom__day-slider_item' + i;
            let currentClassNameDate = $(currentClassName).children('.call-back-modal__container_bottom__day-slider_curent-date');
            let curentMonthName = $(currentClassName).children('.call-back-modal__container_bottom__day-slider_curent-month');
            let currentMonth = currentDate.getMonth() + 1
            if (currentMonth === 1) {
                currentMonth = 'января'
            } else if (currentMonth === 2) {
                currentMonth = 'февраля'
            } else if (currentMonth === 3) {
                currentMonth = 'марта'
            } else if (currentMonth === 4) {
                currentMonth = 'апреля'
            } else if (currentMonth === 5) {
                currentMonth = 'мая'
            } else if (currentMonth === 6) {
                currentMonth = 'июня'
            } else if (currentMonth === 7) {
                currentMonth = 'июля'
            } else if (currentMonth === 8) {
                currentMonth = 'августа'
            } else if (currentMonth === 9) {
                currentMonth = 'сентября'
            } else if (currentMonth === 10) {
                currentMonth = 'октября'
            } else if (currentMonth === 11) {
                currentMonth = 'ноября'
            } else if (currentMonth === 12) {
                currentMonth = 'декабря'
            }
            $(currentClassNameDate).text(currentDate.getDate());
            $(curentMonthName).text(currentMonth);
            currentDate = new Date();
        }
    }
    $('#getCallBack, .calculator-block-content-top-btn, .invest-to-mercure__container__btn').click(function () {
        delSlider('.call-back-modal__container_bottom__day-slider')
        delSlider('.call-back-modal__container_bottom__hours-slider')
        delSlider('.call-back-modal__container_bottom__minutes-slider')
        $('.call-back-modal').fadeIn(500)
        initDateChoose()
        $('.call-back-modal__container_bottom__day-slider').on('init  afterChange', function () {
            day = $('.slick-active').children('.call-back-modal__container_bottom__day-slider_curent-date').text();
            month = $('.slick-active').children('.call-back-modal__container_bottom__day-slider_curent-month').text();
            toBackEnd.value = `${day} ${month} ${year} ${hours}:${minutes}`
        });
        $('.call-back-modal__container_bottom__hours-slider').on('init  afterChange', function () {
            hours = $('.call-back-modal__container_bottom__hours-slider_hours.slick-active').text();
            toBackEnd.value = `${day} ${month} ${year} ${hours}:${minutes}`
        })
        $('.call-back-modal__container_bottom__minutes-slider').on('init  afterChange', function () {
            minutes = $('.call-back-modal__container_bottom__hours-slider_minutes.slick-active').text();
            toBackEnd.value = `${day} ${month} ${year} ${hours}:${minutes}`
        })
        $('.call-back-modal__container_bottom__day-slider').slick({
            arrows: true
        });
        $('.call-back-modal__container_bottom__hours-slider').slick({
            arrows: true
        });
        $('.call-back-modal__container_bottom__minutes-slider').slick({
            arrows: true
        });
    });
    $('.popup').click(function (e) {
        let container = $('.popup');
        if (container.has(e.target).length === 0) {
            $(container).fadeOut(300);
        }
    });
    document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            $('.popup').fadeOut(500);
        }
    });
    $('.popup-cross').click(function () {
        $('.popup').fadeOut(500);
    })
    $('#getMail').click(function () {
        $('.mail-modal').fadeIn(500)
    });
}