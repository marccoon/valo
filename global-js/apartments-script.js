let firstRange = document.querySelector('.first-range'),
    secondRange = document.querySelector('.second-range'),
    subFilterContent = document.querySelector('.sub-filter-content');
//dropdowns
$('.apartments-dropdowns-list').click(function (e) {
        if ($('.apartments-dropdowns-list').hasClass('apartments-dropdowns-list-open')) {
            $('.apartments-dropdowns-list').removeClass('apartments-dropdowns-list-open')
            $('.dropdown-menu-lists').fadeOut(300);
        }
        let currentDropMenu = this.querySelector('.dropdown-menu-lists');
        if ($(currentDropMenu).is(':visible')) {
            this.classList.remove('apartments-dropdowns-list-open')
            $(currentDropMenu).fadeOut(300);
        } else if($(currentDropMenu).is(':hidden'))  {
            $(currentDropMenu).css('display', 'flex');
            this.classList.add('apartments-dropdowns-list-open')
        }
    });

function rangesFunction(container, from, to, defaultFrom, defaultTo) {
    let irsFromNumber = container.querySelector(defaultFrom),
        irsToNumber = container.querySelector(defaultTo),
        priceFromSpan = container.querySelector(from),
        priceToSpan = container.querySelector(to);

    priceFromSpan.textContent = "от: " + irsFromNumber.textContent;
    priceToSpan.textContent = "до: " + irsToNumber.textContent;

    $(irsFromNumber).bind("DOMSubtreeModified",function(){
        priceFromSpan.textContent = "от: " + this.textContent;
    });

    $(irsToNumber).bind("DOMSubtreeModified",function(){
        priceToSpan.textContent = "до: " + this.textContent;
    });
}

$('#subFilterToggle').change(function () {
    if($('#subFilterToggle').prop('checked')) {
        $(subFilterContent).show();
        if ($(window).width() <= '1050'){
            $('.filter-buttons').css('top', '-112px')
        }
    } else {
        $(subFilterContent).hide();
        if ($(window).width() <= '1050'){
            $('.filter-buttons').css('top', '-55px')
        }
    }
});

$('.img-filters').change(function () {
    if($('#showBlock').prop('checked')) {
        $('#catalogBlock').show();
        $('#catalogList').hide();
        $('#showBlockBtn').attr('src', 'img/apartments-block-filter.png');
        $('#showListBtn').attr('src', 'img/a-list-filter.png');
    } else if ($('#showList').prop('checked')) {
        $('#catalogBlock').hide();
        $('#catalogList').show();
        $('#showBlockBtn').attr('src', 'img/apartmentsblock-no-check.png');
        $('#showListBtn').attr('src', 'img/checked-block.png');
    }
})


$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 200,
    from: 20,
    to: 60
});
$(".second-js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 10000000,
    from: 2500000,
    to: 6000000
});

window.onload = function () {
    rangesFunction(firstRange, '#priceFrom', '#priceTo', '.irs-from','.irs-to'),
    rangesFunction(secondRange, '#placeFrom', '#placeTo', '.irs-from','.irs-to');

    $(document).mouseup(function (e) {
        if (!$('.apartments-dropdowns-list').is(e.target) && $('.apartments-dropdowns-list').has(e.target).length === 0) {
            $('.apartments-dropdowns-list').removeClass('apartments-dropdowns-list-open');
            $('.dropdown-menu-lists').fadeOut(300);
        }
    });
};

window.onresize = function() {
    if (window.innerWidth <= 1050) {
        $('#catalogBlock').show();
        $('#catalogList').hide();
    }
};

