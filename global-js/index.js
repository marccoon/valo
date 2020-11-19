window.onload = function () {
    let firstRange = document.querySelector('.first-range'),
        secondRange = document.querySelector('.second-range')

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

    rangesFunction(firstRange, '#priceFrom', '#priceTo', '.irs-from','.irs-to');
    rangesFunction(secondRange, '#placeFrom', '#placeTo', '.irs-from','.irs-to');
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

    $('.main-slide__video-btn').click(function () {
        $('.youtube-popup').css({display: 'flex'})
    })

    // функция для подсветки корпуса и показа блока с инфой
    function showMask (corp, modal, addedClass) {
        corp.hover(function () {
                $('#complexMask').addClass(addedClass)
                modal.show()
            },
            function () {
                $('#complexMask').removeClass(addedClass)
                modal.hide()
            });
    }

    function getColor (input, button, nb1, nb2, nb3, nb4) {
        if ($(input).prop('checked')){
            $(button).addClass('white-bg');
            $(nb1).removeClass('white-bg');
            $(nb2).removeClass('white-bg');
            $(nb3).removeClass('white-bg');
            $(nb4).removeClass('white-bg');
        }
    }

    showMask ($('#corp1'), $('.first-modal'), 'complex-plan__img__corp-1-hover');
    showMask ($('#corp2'), $('.second-modal'), 'complex-plan__img__corp-2-hover');
    showMask ($('#corp3'), $('.third-modal'), 'complex-plan__img__corp-3-hover');
    showMask ($('#corp4'), $('.four-modal'), 'complex-plan__img__corp-4-hover');
    showMask ($('#corp5'), $('.five-modal'), 'complex-plan__img__corp-5-hover');
    showMask ($('#corp6'), $('.six-modal'), 'complex-plan__img__corp-6-hover');
    showMask ($('#corp7'), $('.seven-modal'), 'complex-plan__img__corp-7-hover');
    showMask ($('#corp8'), $('.eight-modal'), 'complex-plan__img__corp-8-hover');

    $('#corp1Btn').change(function () {getColor('#corp1Btn', '#firstCorp','#secondCorp','#thirdCorp','#fourCorp','#fiveCorp')});
    $('#corp2Btn').change(function () {getColor('#corp2Btn', '#secondCorp','#firstCorp','#thirdCorp','#fourCorp','#fiveCorp')});
    $('#corp3Btn').change(function () {getColor('#corp3Btn', '#thirdCorp','#secondCorp','#firstCorp','#fourCorp','#fiveCorp')});
    $('#corp4Btn').change(function () {getColor('#corp4Btn', '#fourCorp','#thirdCorp','#secondCorp','#firstCorp','#fiveCorp')});
    $('#corp5Btn').change(function () {getColor('#corp5Btn', '#fiveCorp','#thirdCorp','#secondCorp','#firstCorp','#fourCorp')});

    $('.complex-plan__choose-corp__buttons_label').click(function () {
        let topy  = $('#description').offset().top;
        $('body,html').animate({scrollTop: topy}, 500);
    });

    $('.how-to-buy__choose-buttons_radio').click(function () {
        let topy  = $('.buy-variants').offset().top;
        $('body,html').animate({scrollTop: topy}, 500);
    })

    $('.complex-plan').click(function (e) {
        if (e.target === corp1) {
            $('#corp1Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#firstCorp').addClass('white-bg');
        } else if (e.target === corp2) {
            $('#corp1Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#firstCorp').addClass('white-bg');
        } else if (e.target === corp3) {
            $('#corp1Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#firstCorp').addClass('white-bg');
        } else if (e.target === corp4) {
            $('#corp1Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#firstCorp').addClass('white-bg');
        } else if (e.target === corp5) {
            $('#corp2Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#secondCorp').addClass('white-bg');
        } else if (e.target === corp6) {
            $('#corp3Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#thirdCorp').addClass('white-bg');
        } else if (e.target === corp7) {
            $('#corp4Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#fourCorp').addClass('white-bg');
        } else if (e.target === corp8) {
            $('#corp5Btn').prop('checked', true);
            $('.complex-plan__choose-corp__buttons_label_btn').removeClass('white-bg');
            $('#fiveCorp').addClass('white-bg');
        }
    });

    $('#rassBtn, #stoProBtn').click(function () {
        $('.default-owl-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    });

    $('.how-to-buy__choose-buttons').change(function () {
        if ($('#ipotecaCheck').prop('checked')) {
            $('.buy-variants-item').hide()
            $('#ipoteca').fadeIn(1000);
        } else if ($('#rassrochkaCheck').prop('checked')) {
            $('.buy-variants-item').hide()
            $('#rassrochka').fadeIn(1000);
        } else if ($('#stoProCheck').prop('checked')) {
            $('.buy-variants-item').hide()
            $('#stoPro').fadeIn(1000);
        } else if ($('#tradeInCheck').prop('checked')) {
            $('.buy-variants-item').hide()
            $('#tradeIn').fadeIn(1000);
        }
    });


    $('.construction-progress_cameras__choose-camera__buttons_btn').click(function () {
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
        }
    });

    $('.modal-cross').click(function () {
        $('.construction-progress__live-camera').fadeOut(1000);
    });

    $('.loader').fadeOut(500);

    function init() {
        var myMap = new ymaps.Map("indexMap", {
                center: [59.885247874191926,30.36760814613051],
                zoom: 14,
                controls: ['typeSelector', 'zoomControl']
            },
            {
                suppressMapOpenBlock: true
            });

        myMap.behaviors.disable([
            'scrollZoom',
            'rulerControl'
        ]);

        var myPin = new ymaps.GeoObjectCollection({}, {});

        placemark1 = new ymaps.Placemark([59.885247874191926,30.36760814613051], {},{
            iconLayout: 'default#image',
            iconImageHref: 'img/metka1.png',
            iconImageSize: [61, 81],
            iconImageOffset: [-33, -72],
        });

        myPin.add(placemark1);
        myMap.geoObjects.add(myPin)
    }

    ymaps.ready(init);

    const currentDate = function () {
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth()
        return new Date(year, month)
    }

    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']

    function dateFilter (date) {
        const currentDate = new Date(date)
        const month = months[currentDate.getMonth()]
        const year = currentDate.getFullYear()
        return month + ' ' + year
    }

    var ctx = document.getElementById('chart')
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            datasets: [{
                label: 'средняя цена',
                backgroundColor: '#1eafb5',
                borderColor: '#1eafb5',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointBorderColor: 'transparent',
                pointBorderWidth: 0,
                pointRadius: 4,
                pointHoverRadius: 10,
                data: [
                    {
                        x: new Date(2018,0),
                        y: 2.6
                    },
                    {
                        x: new Date(2018,7),
                        y: 3
                    },
                    {
                        x: new Date(2019,0),
                        y: 3.5
                    },
                    {
                        x: new Date(2019,7),
                        y: 3.8
                    },
                    {
                        x: new Date(2020, 0),
                        y: 4.7
                    },
                    {
                        x: new Date(2020, 7),
                        y: 5.1
                    },
                    {
                        x: currentDate(),
                        y: 6.3
                    },
                    {
                        x: new Date(2021, 0),
                    },
                ]
            }],
        },
        options: {
            tooltips: {
                intersect: false,
                backgroundColor: '#fff',
                titleFontColor: '#000',
                bodyFontFamily: 'Roboto',
                bodyFontColor: '#000',
                caretSize: 0,
                body: 12,
                callbacks: {
                    title: function(tooltipItem, data) {
                        let date = data['datasets'][0]['data'][tooltipItem[0]['index']]['x']
                        return dateFilter(date)
                    },
                    label: function (tooltipItem) {
                        let span = document.createElement('span')
                        return "Средняя цена " + Number(tooltipItem.yLabel) + "млн. ₽";
                    },
                    yLabel: function (tooltipItem, data) {
                       console.log(data.datasets[tooltipItem.datasetIndex])
                       let yLabel = data.datasets[tooltipItem.datasetIndex].label
                       return yLabel
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: false,
            scales: {
                xAxes: [{
                    gridLines: {
                        color: '#4a6396',
                        zeroLineColor: '#4a6396',
                    },
                    type: 'time',
                    time: {
                        displayFormats: {
                            quarter: 'month',
                        },
                        stepSize: 6,
                    },
                    ticks: {
                        fontColor: '#ffffff',
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: '#4a6396',
                        zeroLineColor: '#4a6396',
                    },
                    position: 'right',
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, values) {
                            return value + ' млн ₽'
                        },
                        fontColor: '#ffffff',
                        stepSize: 2,
                    }
                }]
            }
        }
    });

    $('.i-tab').click(function (e) {
        e.preventDefault()

        if (!$(this).hasClass('active')) {
            $('.infrastructure__tab').removeClass('active')
            $('.infrastructure__container').removeClass('active')
            $($(this).attr('href')).addClass('active')
            $(this).addClass('active')
        }
    })

    $('.h-tech-tab').click(function (e) {
        e.preventDefault()

        if (!$(this).hasClass('active')) {
            $('.h-tech-tab').removeClass('active')
            $('.hostel-technology__container').removeClass('active')
            $($(this).attr('href')).addClass('active')
            $(this).addClass('active')
        }
    })
}

