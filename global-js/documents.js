window.onload = function () {
    $('.active-sport__container__dd3').accordion({
        heightStyle: "content",
        collapsible: true
    });
    $('.document-text__link').hover(function () {
        $(this).children(".document-text__link_img").attr('src', 'img/green-pdf.png')
        },
        function () {
        $(this).children(".document-text__link_img").attr('src', 'img/pdf.png')
    })
    $('.loader').fadeOut(500)
};
