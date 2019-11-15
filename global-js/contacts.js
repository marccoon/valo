window.onload = function () {
    $('.contacts-buttons__button').click(function () {
        $('.contacts-buttons__button').removeClass('contacts-buttons__button-selected')
        $(this).addClass('contacts-buttons__button-selected')
       if ($(this).hasClass('contacts-buttons__button1')) {
           $('.office-container__left__content').hide();
           $('.office-container__left__content1').css('display', 'flex');
       } else {
           $('.office-container__left__content').hide();
           $('.office-container__left__content2').css('display', 'flex');
       }
    });
    if (windowWidth < 750) {
        $('.office-container__right iframe').attr('src', 'https://yandex.by/map-widget/v1/-/CGTUROPg')
    }
    $('.loader').fadeOut(500);
};