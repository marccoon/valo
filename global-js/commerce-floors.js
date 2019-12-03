window.onload = function () {
    // Переменная для банков в модалке
    let bankNumber = 1;

    var currentCorpus =  'corpus2';
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
    };

    //JSON с КОРПУСАМИ
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

    //JSON с этажами
    var corpusFloorsJSON = (function () {
        var corpusFloorsJSON = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'jsons/corpusFloorsJSON.json',
            'dataType': "json",
            'success': function (data) {
                corpusFloorsJSON = data;
            }
        });
        return corpusFloorsJSON;
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
      </ul>
    `;
        $('.commerce-choose__top__corpus-info-center').append(corpusDescriptionTemplate);
    }

    // Добавлем описание АПАРТАМЕНТА в аккордеон внизу страницы из JSON-а с Этажами
    function commerceDescriptionToAccordion (number, stopro, basePrice, type, view, square, img, status) {
        let commerceAparDescriptionTemplate = `
    <h3 class="for-tourists__content__text_main">
                    ПОМЕЩЕНИЕ ${number}
                </h3>
                <ul class="for-tourists__content__text_ul">
                    <li class="apartment-li">
                        <div class="apartment-li__left-column">
                            <ul class="apartment-li__left-column_ul">
                                <li class="apartment-li__left-column_ul_li apartment-li__left-column_ul_li_b">
                                    Цена при 100%
                                </li>
                                <li class="apartment-li__left-column_ul_li ">
                                    Цена базовая
                                </li>
                                <li class="apartment-li__left-column_ul_li">
                                    Тип помещения
                                </li>
                                <li class="apartment-li__left-column_ul_li apartment-li__left-column_ul_li_b">
                                    Номер помещения
                                </li>
                                <li class="apartment-li__left-column_ul_li">
                                    Вид из окна
                                </li>
                                <li class="apartment-li__left-column_ul_li apartment-li__left-column_ul_li_b">
                                    Общая площадь
                                </li>
                                <li class="apartment-li__left-column_ul_li apartment-li__left-column_ul_li_b">
                                    <span class="apartment-li__left-column_ul_status">${status}</span>
                                </li>
                            </ul>
                        </div>

                        <div class="apartment-li__center-column">
                            <ul class="apartment-li__left-column_ul">
                                <li class="apartment-li__left-column_ul_li apartment-li__left-column_ul_li_b">
                                    ${stopro}
                                </li>
                                <li class="apartment-li__left-column_ul_li ">
                                    ${basePrice}
                                </li>
                                <li class="apartment-li__left-column_ul_li">
                                     ${type}
                                </li>
                                <li class="apartment-li__left-column_ul_li apartment-li__left-column_ul_li_b">
                                    ${number}
                                </li>
                                <li class="apartment-li__left-column_ul_li">
                                    ${view}
                                </li>
                                <li class="apartment-li__left-column_ul_li apartment-li__left-column_ul_li_b">
                                   ${square}
                                </li>
                            </ul>
                        </div>
                        <a href="${img}" data-fancybox="" class="apartment-li__img_link">
                            <img src="${img}" alt="" class="apartment-li__img">
                        </a>
                    </li>
                </ul>
    `
        $('.active-sport__container__dd2').append(commerceAparDescriptionTemplate);
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
            $('.buy-modal-container__ipoteca_right__banks_bank-card')
                .addClass('buy-modal-container__ipoteca_right__banks_bank-card-checked')
        }
    }

    // Выделяем первый банк рамкой
    $('.buy-modal-container__ipoteca_right__banks_bank-card').eq(0).addClass('buy-modal-container__ipoteca_right__banks_bank-card-checked')

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

    function floorsBtnsToDOM(floor, data) {
        let floorsBtnsTemplate = `
    <button class="commerce-choose__container__floors-btns_btn" data-floor="${data}">
        ${floor}
        этаж
    </button>
    `
    $('.commerce-choose__container__floors-btns').append(floorsBtnsTemplate)
    }

    //По умолчанию показываем корпус 2, если в локал сторадж есть ключ 'корпус'
    // то меняем на значение этого ключа. Ключ передаётся из предыдущей страницы.


    var floorsCounter = 0;
    var floorsArray = [];

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
    })


    for (key in corpusFloorsJSON) {
        if (currentCorpus == key) {
            for (i in corpusFloorsJSON[key]) {
                floorsCounter++
                let currentFloorName = 'floor' + floorsCounter;
                floorsArray.push(currentFloorName)
                if ($('.commerce-choose__container__left__floor-scheme_img').attr('src') == '') {
                    $('.commerce-choose__container__left__floor-scheme_img').attr('src', corpusFloorsJSON[key][i].bigImgSrc)
                }
                for (j in corpusFloorsJSON[key][i]) {
                    if (j !== 'bigImgSrc') {
                        if (i == floorsArray[0]) {
                            commerceDescriptionToAccordion(
                                j,
                                corpusFloorsJSON[key][i][j].stopro,
                                corpusFloorsJSON[key][i][j].basePrice,
                                corpusFloorsJSON[key][i][j].type,
                                corpusFloorsJSON[key][i][j].windowView,
                                corpusFloorsJSON[key][i][j].square,
                                corpusFloorsJSON[key][i][j].imgSrc,
                                corpusFloorsJSON[key][i][j].status
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

    for (var i = 1; i <= floorsArray.length; i++) {
        floorsBtnsToDOM('0'+ i, floorsArray[i - 1])
    }

    $('.commerce-choose__container__floors-btns_btn').eq(0).addClass('commerce-choose__container__floors-btns_btn-selected')

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
                        if (j !== 'bigImgSrc') {
                            if (i == currentFloor) {
                                commerceDescriptionToAccordion(
                                    j,
                                    corpusFloorsJSON[key][i][j].stopro,
                                    corpusFloorsJSON[key][i][j].basePrice,
                                    corpusFloorsJSON[key][i][j].type,
                                    corpusFloorsJSON[key][i][j].windowView,
                                    corpusFloorsJSON[key][i][j].square,
                                    corpusFloorsJSON[key][i][j].imgSrc,
                                    corpusFloorsJSON[key][i][j].status
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

    $('.default-dropdown_ul_li_link').click(function () {
        localStorage.setItem('corpus', $(this).data('location'))
    });

    if (localStorage.getItem('floor')) {
        let floorsBtns = document.querySelectorAll('.commerce-choose__container__floors-btns_btn')
        for (let i = 0; i < floorsBtns.length; i++) {
            let currentBtnData = floorsBtns[i]
            currentBtnData = $(currentBtnData).data('floor')
            if (currentBtnData == localStorage.getItem('floor')) {
                let currentBtn = floorsBtns[i];
                currentBtn.scrollIntoView(true);
                $(currentBtn).trigger('click');
                localStorage.removeItem('floor');
            }
        }
    }

    $('.loader').fadeOut(500)
};