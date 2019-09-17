window.onload = function () {
    $('.partners-main__global__container__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.partners-main').parallax({imageSrc: 'img/part-bg.png'})
}