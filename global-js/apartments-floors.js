window.onload = function () {
    // Переменная для банков в модалке
    let bankNumber = 1;

    var img = document.querySelector('.commerce-choose__container__floors-btns_img');
    var currentCorpus =  'corpus2';
    var currentFloor = 'floor4';
    if (localStorage.getItem('floor')) {
        currentFloor = localStorage.getItem('floor');
    }

    if (localStorage.getItem('corpus')) {
        currentCorpus = localStorage.getItem('corpus');
    }

    // Создание новой карточки банка
    function newCard (imgSrc, attr) {
        let bankCardTemplateContainer = `
    <div class="buy-modal-container__ipoteca_right__banks_bank-card" data-bank-number="bank${attr}">
        <img src="${imgSrc}" alt="" class="buy-modal-container__ipoteca_right__banks_bank-card_img">
    </div>
    
    `;

    $('.buy-modal-container__ipoteca_right__banks').append(bankCardTemplateContainer)
    }

    //JSON с КОРПУСАМИ в переменную
    var corpusesJSON = (function () {
        var corpusesJSON = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'jsons/commerce-choose.json',
            'dataType': "json",
            'success': function (data) {
                corpusesJSON = data;
            }
        });
        return corpusesJSON;
    })();

    //Добавляем описание КОРПУСА верх страницы из JSON-а с корпусами
    function corpusInfo(termOfDelivery, keyCollection, corpNumber,
                        section, paymentMethod, revenueProgram) {
        let corpusDescriptionTemplate = `
     <ul class="commerce-choose__top__corpus-info-center_ul">
         <li class="commerce-choose__top__corpus-info-center_li">
                     ${termOfDelivery}
          </li>
          <li class="commerce-choose__top__corpus-info-center_li">
                     ${keyCollection}
          </li>
          <li class="commerce-choose__top__corpus-info-center_li">
                     ${corpNumber}
           </li>
           <li class="commerce-choose__top__corpus-info-center_li">
                     ${section}
           </li>
           <li class="commerce-choose__top__corpus-info-center_li">
                     ${paymentMethod}
           </li>
           <li class="commerce-choose__top__corpus-info-center_li">
                     ${revenueProgram}
           </li>
      </ul>`;

     $('.commerce-choose__top__corpus-info-center').append(corpusDescriptionTemplate);
    }

    // JSON с инфой про банки для модалки
    var banksConfigJSON = (function () {
        var banksConfigJSON = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'jsons/data.json',
            'dataType': "json",
            'success': function (data) {
                banksConfigJSON = data;
            }
        });
        return banksConfigJSON;
    })();

    // Добавляем информацию первого банка в большое окно
    for (key in banksConfigJSON) {
        newCard(banksConfigJSON[key].img, bankNumber)
        bankNumber++
        if (key == 'bank1'){
            $('.buy-modal-container__ipoteca_right__banks_bank-card').addClass('buy-modal-container__ipoteca_right__banks_bank-card-checked')
        }
    }

    // Выделяем первый банк рамкой
    $('.buy-modal-container__ipoteca_right__banks_bank-card').eq(0).addClass('buy-modal-container__ipoteca_right__banks_bank-card-checked')

    // По умолчанию выбран первый банк, заполняем больше окно его инфой
    for (key in banksConfigJSON) {
        if ('bank1' == key) {
            $('.buy-modal-container__ipoteca_right__current-bank_img').attr('src', banksConfigJSON[key].img)
            if (banksConfigJSON[key].maxSum !== '∞') {
                $('.buy-modal-container__ipoteca_right__current-bank_maxSumm').text(banksConfigJSON[key].maxSum + ' млн. руб.')
            } else {
                $('.buy-modal-container__ipoteca_right__current-bank_maxSumm').text(banksConfigJSON[key].maxSum)
            }
            $('.buy-modal-container__ipoteca_right__current-bank_stav').text('Ставка ' + banksConfigJSON[key].vznos)
            $('.buy-modal-container__ipoteca_right__current-bank_vznos').text('Взнос ' +banksConfigJSON[key].stav)
            $('.buy-modal-container__ipoteca_right__current-bank_srok').text('Срок ' + banksConfigJSON[key].srok)
        }
    }

    // При смене банка меняем инфу в большом окне
    $('.buy-modal-container__ipoteca_right__banks_bank-card').click(function () {
        for (key in banksConfigJSON) {
            if ($(this).data('bank-number') == key) {
                $('.buy-modal-container__ipoteca_right__banks_bank-card').removeClass('buy-modal-container__ipoteca_right__banks_bank-card-checked')
                $(this).addClass('buy-modal-container__ipoteca_right__banks_bank-card-checked')
                $('.buy-modal-container__ipoteca_right__current-bank_img').attr('src', banksConfigJSON[key].img)
                if (banksConfigJSON[key].maxSum !== '∞') {
                    $('.buy-modal-container__ipoteca_right__current-bank_maxSumm').text(banksConfigJSON[key].maxSum + ' млн. руб.')
                } else {
                    $('.buy-modal-container__ipoteca_right__current-bank_maxSumm').text(banksConfigJSON[key].maxSum)
                }
                $('.buy-modal-container__ipoteca_right__current-bank_stav').text('Ставка ' + banksConfigJSON[key].vznos)
                $('.buy-modal-container__ipoteca_right__current-bank_vznos').text('Взнос ' +banksConfigJSON[key].stav)
                $('.buy-modal-container__ipoteca_right__current-bank_srok').text('Срок ' + banksConfigJSON[key].srok)
            }
        }
    });

    function floorsBtnsToDOM(floorNumber, data) {
        let floorsBtnsTemplate = `
    <button class="commerce-choose__container__floors-btns_btn" data-floor="floor${data}">
        ${floorNumber}
        этаж
    </button>`;

        $('.commerce-choose__container__floors-btns').append(floorsBtnsTemplate)
    }

    var floorsCounter = 0;
    var floorsArray = [];
    var secondFloorsArray = [];

        // Выгружаем из JSON-а инфу о корпусе ввеху страницы
        for (key in corpusesJSON) {
            if (key == currentCorpus) {
                corpusInfo(
                    corpusesJSON[key].termOfDelivery,
                    corpusesJSON[key].keyCollection,
                    corpusesJSON[key].corpNumber,
                    corpusesJSON[key].section,
                    corpusesJSON[key].paymentMethod,
                    corpusesJSON[key].revenueProgram
                );
            }
        }

        // Переключалка в модалке
        $('.buy-modal-container__btns-block_btn').click(function () {
            if ($(this).hasClass('ipoteca-btnn')) {
                $('.buy-modal-container__btns-block_btn').removeClass('buy-modal-container__btns-block_btn-select')
                $(this).addClass('buy-modal-container__btns-block_btn-select')
                $('.buy-modal-container1').hide()
                $('.buy-modal-container__ipoteca').show()
            } else if ($(this).hasClass('btn_rass')) {
                $('.buy-modal-container__btns-block_btn').removeClass('buy-modal-container__btns-block_btn-select')
                $(this).addClass('buy-modal-container__btns-block_btn-select')
                $('.buy-modal-container1').hide()
                $('.buy-modal-container__rass').show()
            } else if ($(this).hasClass('btn-stopro')) {
                $('.buy-modal-container__btns-block_btn').removeClass('buy-modal-container__btns-block_btn-select')
                $(this).addClass('buy-modal-container__btns-block_btn-select')
                $('.buy-modal-container1').hide()
                $('.buy-modal-container__stopro').show()
            } else if ($(this).hasClass('btn-trade-in')) {
                $('.buy-modal-container__btns-block_btn').removeClass('buy-modal-container__btns-block_btn-select')
                $(this).addClass('buy-modal-container__btns-block_btn-select')
                $('.buy-modal-container1').hide()
                $('.buy-modal-container__trade-in').show()
            }
        });

        $('.showMeBigModal').click(function () {
            $('.buy-modal').fadeIn(500)
        });

        $('.buy-modal-container__ipoteca_button').click(function () {
            $('.popup').fadeOut(500)
            setTimeout(function () {
                $('.mail-modal').fadeIn(500)
            },500)
        });

        $('.buy-modal-container__cross').click(function () {
            $('.popup').fadeOut(500)
        });

        $('.active-sport__container__dd').accordion({
            heightStyle: "content",
            collapsible: true
        });

        for (var i = 0; i < secondFloorsArray.length; i++) {
            if (secondFloorsArray[i] >= 10) {
                floorsBtnsToDOM(secondFloorsArray[i], secondFloorsArray[i])
            } else {
                floorsBtnsToDOM('0' + secondFloorsArray[i], secondFloorsArray[i])
            }
        }

        $('.commerce-choose__container__floors-btns_btn').eq(0).addClass('commerce-choose__container__floors-btns_btn-selected')

        //ТУТ НАЧАЛО ПОДГРУЗКА АККОРДИОНОВ ПРИ КЛИКЕ НА КНОПКУ

        $('.commerce-choose__container__floors-btns_btn').click(function () {
            if ($(this).hasClass('commerce-choose__container__floors-btns_btn-selected')) {
                return
            }
            $('.active-sport__container__dd').accordion( "destroy" );
            $('.active-sport__container__dd').empty();
            $('.commerce-choose__container__floors-btns_btn').removeClass('commerce-choose__container__floors-btns_btn-selected');
            $(this).addClass('commerce-choose__container__floors-btns_btn-selected');
            for (var q = 0; q < floorsArray.length; q++) {
                let currentFloor = $(this).data('floor')
                if (currentFloor == floorsArray[q]) {
                    for (i in corpusFloorsJSON[key]) {
                        $('.commerce-choose__container__left__floor-scheme_img').attr('src', corpusFloorsJSON[key][currentFloor].bigImgSrc)
                        for (j in corpusFloorsJSON[key][currentFloor]) {
                            if (j !== 'bigImgSrc' && j !== 'dataFloor') {
                                if (i == currentFloor) {
                                    commerceDescriptionToAccordion(
                                        j,
                                        corpusFloorsJSON[key][i][j].stopro,
                                        corpusFloorsJSON[key][i][j].basePrice,
                                        corpusFloorsJSON[key][i][j].type,
                                        corpusFloorsJSON[key][i][j].windowView,
                                        corpusFloorsJSON[key][i][j].square,
                                        corpusFloorsJSON[key][i][j].imgSrc,
                                        corpusFloorsJSON[key][i][j].status,
                                        corpusFloorsJSON[key][i][j].furniture
                                    );
                                }
                            }
                        }
                    }
                }
            }

            $('.active-sport__container__dd').accordion({
                heightStyle: "content",
                collapsible: true
            });
        });

        // ТУТ КОНЕЦ

        $('.default-dropdown_ul_li_link').click(function () {
            localStorage.setItem('corpus', $(this).data('location'))
        });

        if (currentFloor) {
            let floorsBtns = document.querySelectorAll('.commerce-choose__container__floors-btns_btn');
            for (let i = 0; i < floorsBtns.length; i++) {
                let currentBtnData = floorsBtns[i];
                currentBtnData = $(currentBtnData).data('floor');
                if (currentBtnData == currentFloor) {
                    let currentBtn = floorsBtns[i];
                    currentBtn.scrollIntoView(true);
                    $(currentBtn).trigger('click');
                    localStorage.removeItem('floor');
                }
            }
        }



    // Новый код
    //JSON с этажами в переменную
    var corpusFloorsJSON = (function () {
        var corpusFloorsJSON = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'jsons/apartmentsFloorsJSON.json',
            'dataType': "json",
            'success': function (data) {
                corpusFloorsJSON = data;
            }
        });
        return corpusFloorsJSON;
    })();


    function addSVG() {
        var imgWidthPersent = $('.commerce-choose__container__floors-btns_img').width() / 100;
        var imgHeigthPersent = $('.commerce-choose__container__floors-btns_img').height() / 100;

        // if (!draw) {
        //     var draw = SVG('svgContainer').size('100%', '100%');
        // }

    }

    img.onload = function () {
        $('.commerce-choose__container__left commerce-choose__container__left2')
            .height($('.commerce-choose__container__floors-btns_img').height());

        for (let key in corpusFloorsJSON) {
            $('.commerce-choose__container__floors-btns_img').attr('src', corpusFloorsJSON[currentCorpus][currentFloor].bigImgSrc);
        }



    };
    addSVG();
    // Новый код конец
    $('.loader').fadeOut(500)
};
