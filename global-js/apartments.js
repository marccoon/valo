let firstRange = document.querySelector('.first-range'),
    secondRange = document.querySelector('.second-range'),
    subFilterContent = document.querySelector('.sub-filter-content');

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
    }

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
        min: $('.min-first').text(),
        max: $('.max-first').text(),
        from: $('.start-first').text(),
        to: $('.end-first').text()
    });
    $(".second-js-range-slider").ionRangeSlider({
        type: "double",
        min: $('.min-second').text(),
        max: $('.max-second').text(),
        from: $('.start-second').text(),
        to: $('.end-second').text()
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
        $('.loader').fadeOut(500)
};
