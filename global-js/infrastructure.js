window.onload = function () {
    function showDiscription (showEl) {
        $('.euro-lvl__description_container').hide();
        $(showEl).show();
    }
    $('.euro-lvl__circles-flex_circle').click(function () {
        if (!$(this).hasClass('euro-lvl__circles-flex_circle-active')) {
            $('.euro-lvl__circles-flex_circle').removeClass('euro-lvl__circles-flex_circle-active');
            $(this).addClass('euro-lvl__circles-flex_circle-active');
            if ($(this).hasClass('euro-lvl__circles-flex_circle1')) {
                showDiscription('.lvl__description_container1')
            } else if ($(this).hasClass('euro-lvl__circles-flex_circle2')) {
                showDiscription('.lvl__description_container2')
            } else if ($(this).hasClass('euro-lvl__circles-flex_circle3')) {
                showDiscription('.lvl__description_container3')
            } else if ($(this).hasClass('euro-lvl__circles-flex_circle4')) {
                showDiscription('.lvl__description_container4')
            } else if ($(this).hasClass('euro-lvl__circles-flex_circle5')) {
                showDiscription('.lvl__description_container5')
            } else if ($(this).hasClass('euro-lvl__circles-flex_circle6')) {
                showDiscription('.lvl__description_container6')
            }
        }
    });
    $('.active-sport__container__dd').accordion({
        heightStyle: "content",
        collapsible: true
    });
    $('.for-tourists__content__show-all').click(function () {
        $('.for-tourists__content__show-all').hide();
        $('.for-tourists__content__text_ul_li').show();
    })
    $('.loader').fadeOut(500)
};