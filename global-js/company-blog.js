window.onload = function () {
    $('.company-blog-container__left_ul_li').click(function () {
        $('.company-blog-container__left_ul_li').removeClass('company-blog-container__left_ul_li-select');
        $('.company-blog-container__right').hide()
        $(this).addClass('company-blog-container__left_ul_li-select');
        if ($(this).attr('id' )== 'valoNews') {
            $('.company-blog-container__right1').show()
        } else if ($(this).attr('id') == 'marketNews') {
            $('.company-blog-container__right2').show()
        } else if ($(this).attr('id') == 'eventsNews') {
            $('.company-blog-container__right3').show()
        }
    })
    $('.loader').fadeOut(500)
};