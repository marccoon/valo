window.onload = function () {
    let modalWindow = document.querySelector('.modal-calc'),
        creditVariatsBlock = document.querySelector('.credit-variants-block'),
        modalSlider = document.querySelector('.modal-slider'),
        calcBottomSlider = document.querySelector('.calc-bottom-slider'),
        secondSliderItems = calcBottomSlider.querySelectorAll('.owl-item'),
        countBtn = document.querySelector('.ipoteca-btn');

    for (var i = 0;i < secondSliderItems.length; i++) {
        secondSliderItems[i].onclick = showBlock($(modalSlider));
    }
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
    $(".js-range-slider").ionRangeSlider({
        step: $('.min-first').text(),
        min: $('.max-first').text(),
        max: $('.start-first').text(),
        from: $('.end-first').text()
    });
    $(".js-range-slider-2").ionRangeSlider({
        step: $('.min-second').text(),
        min: $('.max-second').text(),
        max: $('.start-second').text(),
        from: $('.end-second').text()
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
    rangesMinMax(firstRange, '.irs-min', '.irs-max', '.irs-single');
    rangesMinMaxSecond(secondRange, '.irs-min', '.irs-max', '.irs-single');
    $('.calculator-block').parallax({imageSrc: 'img/4230.jpg'})
    $('.loader').fadeOut(500)
}

