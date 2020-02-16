$('.building__cameras__container__card_btn').click(function () {
    if ($(this).attr('id') === 'camera1Btn') {
        $('.construction-progress__live-camera').fadeIn(1000);
        $('.construction-progress__live-camera__container_in iframe')
            .attr('src','https://webcam.exdesign.ru/valo/?fluid')
            .attr('height',  $('.construction-progress__live-camera__container_in').width() * 0.56);
    } else if ($(this).attr('id') === 'camera2Btn') {
        $('.construction-progress__live-camera').fadeIn(1000);
        $('.construction-progress__live-camera__container_in iframe')
            .attr('src','https://webcam.exdesign.ru/valo-2/?fluid')
            .attr('height',  $('.construction-progress__live-camera__container_in').width() * 0.56);
    } else if ($(this).attr('id') === 'camera3Btn') {
        $('.construction-progress__live-camera').fadeIn(1000);
        $('.construction-progress__live-camera__container_in iframe')
            .attr('src','https://webcam.exdesign.ru/valo-3/?fluid')
            .attr('height',  $('.construction-progress__live-camera__container_in').width() * 0.56);
    } else if ($(this).attr('id') === 'camera4Btn') {
        $('.construction-progress__live-camera').fadeIn(1000);
        $('.construction-progress__live-camera__container_in iframe')
            .attr('src','https://webcam.exdesign.ru/valo-4/?fluid')
            .attr('height',  $('.construction-progress__live-camera__container_in').width() * 0.56);
    }
})

$('.modal-cross').click(function () {
    $('.construction-progress__live-camera').fadeOut(1000);
});
