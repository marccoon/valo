let modalWindow = document.querySelector('.modal-calc'),
    creditVariatsBlock = document.querySelector('.credit-variants-block'),
    modalSlider = document.querySelector('.modal-slider'),
    calcBottomSlider = document.querySelector('.calc-bottom-slider'),
    secondSliderItems = calcBottomSlider.querySelectorAll('.owl-item'),
    countBtn = document.querySelector('.ipoteca-btn');

for (var i = 0;i < secondSliderItems.length; i++) {
    console.log(secondSliderItems[i])
    secondSliderItems[i].onclick = showBlock($(modalSlider));
}

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        closed($(modalSlider));
        closed($(modalWindow));
    }
})

function closed(elem) {
    elem.hide();
}
function showBlock (elem) {
    elem.show();
}
$(creditVariatsBlock).change(function () {
    if ($('#ipoteca').is(':checked')) {
        $('#ipotecaBlock').show();
        $('#creditBlock').hide();
    } else if ($('#credit').is(':checked')) {
        $('#creditBlock').show();
        $('#ipotecaBlock').hide();
    }
});

$('.slider-one').owlCarousel({
    loop:true,
    nav:true,
    autoplay: false,
    dots: false,
    responsive:{
        0:{
            items:1
        }
    }
});


$('.slider-two').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:3
        },
        1400: {
            items:4
        }
    }
});

$('.slider-three').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        }
    }
});



$(".js-range-slider").ionRangeSlider({
    step: 0.01,
    min: 9.5,
    max: 10.5,
    from: 10
});
$(".js-range-slider-2").ionRangeSlider({
    step: 1,
    min: 1,
    max: 30,
    from: 15
});

function rangesMinMax (container, min, max, rangeNumber) {
    let minDefault = container.querySelector(min).textContent;
    let maxDefault = container.querySelector(max).textContent;
    let currentMin = container.querySelector('.min-max-min');
    let currentMax = container.querySelector('.min-max-max');
    let singleRange = container.querySelector(rangeNumber);
    let currentSingleRange = container.querySelector('.live-result');

    $(singleRange).bind("DOMSubtreeModified",function(){
        currentSingleRange.textContent =  this.textContent + "%";
    });
    currentMin.textContent = minDefault + "%";
    currentMax.textContent = maxDefault + "%";
    currentSingleRange.textContent = singleRange;
}
function rangesMinMaxSecond (container, min, max, rangeNumber) {
    let minDefault = container.querySelector(min).textContent;
    let maxDefault = container.querySelector(max).textContent;
    let currentMin = container.querySelector('.min-max-min');
    let currentMax = container.querySelector('.min-max-max');
    let singleRange = container.querySelector(rangeNumber);
    let currentSingleRange = container.querySelector('.live-result');

    $(singleRange).bind("DOMSubtreeModified",function(){
        currentSingleRange.textContent =  this.textContent + " лет";
    });
    currentMin.textContent = minDefault;
    currentMax.textContent = maxDefault;
    currentSingleRange.textContent = singleRange;
}
$(countBtn).click(function () {
   let calcPersent = document.querySelector('#percent').textContent;
   calcPersent = calcPersent.replace('%','');
   let month = document.querySelector('#years').textContent;
   month = month.replace(' лет','');
   month = month * 12;
   let startPrice = document.querySelector('#apartment-price').textContent;
   startPrice = startPrice.replace('р.','');
   startPrice = startPrice.replace(/\s/g, '');
   let calcResult = document.querySelector('#calculatorResult')
   calcResult.textContent = Math.round(Number((startPrice / 100 * calcPersent) + Number(startPrice)) / month) + " р." ;
});
window.onload = function () {
    rangesMinMax(firstRange, '.irs-min', '.irs-max', '.irs-single');
    rangesMinMaxSecond(secondRange, '.irs-min', '.irs-max', '.irs-single');
    $('.calculator-block').parallax({imageSrc: 'img/4230.webp'})

    $('.calculator-block-content-top-btn').click(function () {
        delSlider('.call-back-modal__container_bottom__day-slider')
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
    })
};

