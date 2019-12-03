window.onload = function () {
    $('.contacts-buttons__button').click(function () {
        $('.contacts-buttons__button').removeClass('contacts-buttons__button-selected')
        $(this).addClass('contacts-buttons__button-selected')
       if ($(this).hasClass('contacts-buttons__button1')) {
           $('.office-container__left__content').hide();
           $('.office-container__left__content1').css('display', 'flex');
       } else {
           $('.office-container__left__content').hide();
           $('.office-container__left__content2').css('display', 'flex').height($('.office-container__left__content').height());
       }
    });
    $('.loader').fadeOut(500);
};