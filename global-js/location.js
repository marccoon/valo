let locationLi = document.querySelectorAll('.location-metro-container__lists_li');
function showPlaceMarks(e, index, addedClass) {
    $(e + index).addClass(addedClass);
}
function mapBtnClick (btn, currentClass, img1,img2, placemarkClass) {
    $(btn).click(function () {
        if ($(btn).hasClass(currentClass)) {
            $(btn).removeClass(currentClass);
            $(this).children('.location-main__buttons_button_img').attr("src", img1);
            $(this).children('.location-main__buttons_button_span').removeClass('white-color');
            $(placemarkClass).fadeOut(500);
        } else {
            $(btn).addClass(currentClass);
            $(this).children('.location-main__buttons_button_img').attr("src", img2);
            $(this).children('.location-main__buttons_button_span').addClass('white-color');
            $(placemarkClass).fadeIn(500);
        }
    })
}
function showLocationMask (li, addedClass) {
    $(li).hover(function () {
            $('.location-metro-container__metro-map_mask').addClass(addedClass);
        },
        function () {
            $('.location-metro-container__metro-map_mask').removeClass(addedClass);
        });
}

window.onload = function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');

    let placemarks = document.querySelectorAll('.ymaps-2-1-74-placemark-overlay');
    for (var i = 1; i < placemarks.length; i++) {
        placemarks[i].style.display = "none";
        if (i < 5) {
            showPlaceMarks('.ymaps-2-1-74-placemark-overlay',':eq(' + i + ')', 'station');
        }
        if (i >= 5 && i <= 11) {
            showPlaceMarks('.ymaps-2-1-74-placemark-overlay',':eq(' + i + ')', 'med');
        }
        if (i >= 12 && i <= 18) {
            showPlaceMarks('.ymaps-2-1-74-placemark-overlay',':eq(' + i + ')', 'mus');
        }
        if (i >= 19 && i <= 28) {
            showPlaceMarks('.ymaps-2-1-74-placemark-overlay',':eq(' + i + ')', 'park');
        }
        if (i >= 29 && i <= 35) {
            showPlaceMarks('.ymaps-2-1-74-placemark-overlay',':eq(' + i + ')', 'teatr');
        }
        if (i >= 36 && i <= 45) {
            showPlaceMarks('.ymaps-2-1-74-placemark-overlay',':eq(' + i + ')', 'shop');
        }
        if (i >= 46 && i <= 61) {
            showPlaceMarks('.ymaps-2-1-74-placemark-overlay',':eq(' + i + ')', 'school');
        }
        if (i >= 62 && i <= 68) {
            showPlaceMarks('.ymaps-2-1-74-placemark-overlay',':eq(' + i + ')', 'metro');
        }
    }
    mapBtnClick('#stationBtn', 'location-main__buttons_button-click', 'img/loc-map1.png', 'img/loc-map11.png', '.station');
    mapBtnClick('#medBtn','location-main__buttons_button-click-opacity','img/loc-map2.png','img/loc-map22.png','.med');
    mapBtnClick('#musBtn', 'location-main__buttons_button-click-opacity', 'img/loc-map3.png','img/loc-map33.png', '.mus');
    mapBtnClick('#parkBtn', 'location-main__buttons_button-click', 'img/loc-map4.png', 'img/loc-map44.png','.park');
    mapBtnClick('#teatr','location-main__buttons_button-click', 'img/loc-map5.png', 'img/loc-map55.png', '.teatr');
    mapBtnClick('#shops','location-main__buttons_button-click-opacity', 'img/loc-map6.png', 'img/loc-map66.png', '.shop');
    mapBtnClick('#schools','location-main__buttons_button-click-opacity', 'img/loc-map7.png', 'img/loc-map77.png', '.school');
    mapBtnClick('#metro','location-main__buttons_button-click', 'img/loc-map8.png', 'img/loc-map88.png', '.metro');

    showLocationMask('.location-metro-container__lists_li-first', 'location-mask-1');
    showLocationMask('.location-metro-container__lists_li-2', 'location-mask-2');
    showLocationMask('.location-metro-container__lists_li-3', 'location-mask-3');
    showLocationMask('.location-metro-container__lists_li-4', 'location-mask-4');
    showLocationMask('.location-metro-container__lists_li-5', 'location-mask-5');
    showLocationMask('.location-metro-container__lists_li-6', 'location-mask-6');
    showLocationMask('.location-metro-container__lists_li-7', 'location-mask-7');


    $('.location-main-map__slider_slider').slick();
    $('.location-loc__cards__mobile-slider').slick();
    $('.slider-shopping').slick();
    $('.location-transport__right_slider').slick();

    $('.location-loc__cards__card1').hover(function(){
        $('.location-loc__cards__card__left_img1').attr('src','img/loc-chem1.png');
    },function(){
        $('.location-loc__cards__card__left_img1').attr('src','img/loc-chem.png');
    });

    $('.location-loc__cards__card2').hover(function(){
        $('.location-loc__cards__card__left_img2').attr('src','img/local-car1.png');
    },function(){
        $('.location-loc__cards__card__left_img2').attr('src','img/local-car.png');
    });

    $('.location-loc__cards__card3').hover(function(){
        $('.location-loc__cards__card__left_img3').attr('src','img/local-cart1.png');
    },function(){
        $('.location-loc__cards__card__left_img3').attr('src','img/local-cart.png');
    });

    $('.location-loc__cards__card4').hover(function(){
        $('.location-loc__cards__card__left_img4').attr('src','img/local-eaye1.png');
    },function(){
        $('.location-loc__cards__card__left_img4').attr('src','img/local-eaye.png');
    });

    $('.location-main_maska_white_blocks-container_button2').click(function () {
        $('.location-main_maska').fadeOut(1000);
    })
};
ymaps.ready(mapInit);

