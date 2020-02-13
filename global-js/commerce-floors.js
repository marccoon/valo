window.onload = function () {

    // ТУТ ВСЁ ЧТО КАСАЕТСЯ БАНКОВ =======================================================================================
    // Переменная для банков в модалке
    var bankNumber = 1;
    var colorForClass = 0;
    var img = document.querySelector('.commerce-choose__container__floors-btns_img');
    var currentCorpus =  'corpus2';
    var currentFloor =  'floor1';
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

    // КОНЕЦ ВСЕГО, ЧТО КАСАЕТСЯ БАНКОВ =======================================================================================

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

    //JSON с этажами в переменную
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

    for (key in corpusFloorsJSON[currentCorpus]) {
        floorsCounter++
        let currentFloorName = key;
        floorsArray.push(currentFloorName);
        secondFloorsArray.push(corpusFloorsJSON[currentCorpus][key].dataFloor);
    }

    if (!draw) {
        var draw = SVG('svgContainer').size('100%', '100%');
    }

    function addSVG (coords, color, className, type, view, square, basePrice, stoPro, status, link, apartNumber) {
        if (status === 'Продано!') {
            let imgWidthPersent = $('.commerce-choose__container__floors-btns_img').width() / 100;
            let imgHeigthPersent = $('.commerce-choose__container__floors-btns_img').height() / 100;
            let defaultCoordsArr = (coords.split(','));
            let percentArray = [];
            let newCoords = "";

            //В зависимости от корпуса, этажа и размера картинки находим 1% от их размера
            //Картинки разного размера. Это делается для сохраниния пропорций и корректного
            // отображения SVG
            if (currentCorpus === 'section1') {
                if (currentFloor === "floor1") {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 17.05)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 15.98)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 17.34)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 16.18)
                        }
                    }
                }
            } else if (currentCorpus === 'section2') {
                if (currentFloor === "floor1") {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 24.06)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 15.95)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 23.99)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 16.58)
                        }
                    }
                }
            }else if (currentCorpus === 'section3') {
                if (currentFloor === "floor1") {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 22.17)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 15.87)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 24.12)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 18.28)
                        }
                    }
                }
            } else if (currentCorpus === 'section4') {
                if (currentFloor === "floor1") {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 16.52)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 15.45)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 15.98)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 15.44)
                        }
                    }
                }
            } else if (currentCorpus === 'corpus2') {
                if (currentFloor === 'floor1') {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 11.24)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.11)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 10.69)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.11)
                        }
                    }
                }
            } else if (currentCorpus === 'corpus3') {
                if (currentFloor === 'floor1') {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 11.31)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.31)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 10.75)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.31)
                        }
                    }
                }
            } else if (currentCorpus === 'corpus4') {
                if (currentFloor === 'floor1') {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 11.75)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.40)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 11.25)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.40)
                        }
                    }
                }
            } else if (currentCorpus === 'corpus5') {
                if (currentFloor === 'floor1') {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 12.85)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.59)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 11.81)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.01)
                        }
                    }
                }
            }

            // Пересчитываем координаты в соответствии с размером картинки
            for (var i = 0; i < percentArray.length; i++) {
                if (i % 2 !== 1) {
                    newCoords += Math.round(imgWidthPersent * percentArray[i])+ ',';
                } else {
                    newCoords += Math.round(imgHeigthPersent * percentArray[i]) + ',';
                }
            }

            // убираем последниюю запятую в массиве, чтобы SVG.js не лагал
            newCoords = newCoords.slice(0, -1);

            //Рисуем новый полигон
            let currentClass = 'visual-floor-svg-' + className;

            let polygon = draw.polygon(newCoords)
                .fill('transparent')
                .addClass(currentClass)
                .addClass('visual-floor-svg');

            $('.' + currentClass).attr('fill', 'rgba(118, 118, 118, 0.59)');
            //Принаведении на этот полигон показываем SVG
            $('.' + currentClass).hover(function () {
                $(this).attr('fill', 'rgba(118, 118, 118, 0.59)');
                $('#bSquare').text('').append(square);
                $('#bStatus').text('Нет в наличии');
                $('#bNumber').text(apartNumber);
                $('.description-apart.sold').css('display', 'flex');
            }, function () {
                $(this).attr('fill', 'rgba(118, 118, 118, 0.59)');
                $('.description-apart.sold').hide()
            });

            $('.' + currentClass).mousemove(function (event) {
                $('.description-apart.sold')
                    .css('left', event.clientX + 10)
                    .css('top', event.clientY + 10)
            });
        } else {
            let imgWidthPersent = $('.commerce-choose__container__floors-btns_img').width() / 100;
            let imgHeigthPersent = $('.commerce-choose__container__floors-btns_img').height() / 100;
            let defaultCoordsArr = (coords.split(','));
            let percentArray = [];
            let newCoords = "";

            //В зависимости от корпуса, этажа и размера картинки находим 1% от их размера
            //Картинки разного размера. Это делается для сохраниния пропорций и корректного
            // отображения SVG
            if (currentCorpus === 'section1') {
                if (currentFloor === "floor1") {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 17.05)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 15.98)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 17.34)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 16.18)
                        }
                    }
                }
            } else if (currentCorpus === 'section2') {
                if (currentFloor === "floor1") {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 24.06)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 15.95)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 23.99)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 16.58)
                        }
                    }
                }
            } else if (currentCorpus === 'section3') {
                if (currentFloor === "floor1") {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 22.17)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 15.87)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 24.12)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 18.28)
                        }
                    }
                }
            } else if (currentCorpus === 'section4') {
                if (currentFloor === "floor1") {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 16.52)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 15.45)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 15.98)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 15.44)
                        }
                    }
                }
            } else if (currentCorpus === 'corpus2') {
                if (currentFloor === 'floor1') {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 11.24)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.11)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 10.69)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.11)
                        }
                    }
                }
            } else if (currentCorpus === 'corpus3') {
                if (currentFloor === 'floor1') {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 11.31)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.31)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 10.75)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.31)
                        }
                    }
                }
            } else if (currentCorpus === 'corpus4') {
                if (currentFloor === 'floor1') {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 11.75)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.40)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 11.25)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.40)
                        }
                    }
                }
            } else if (currentCorpus === 'corpus5') {
                if (currentFloor === 'floor1') {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 12.85)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.59)
                        }
                    }
                } else {
                    for (var i = 0; i < defaultCoordsArr.length; i++) {
                        if (i % 2 !== 1) {
                            percentArray.push(defaultCoordsArr[i] / 11.81)
                        } else {
                            percentArray.push(defaultCoordsArr[i] / 39.01)
                        }
                    }
                }
            }

            // Пересчитываем координаты в соответствии с размером картинки
            for (var i = 0; i < percentArray.length; i++) {
                if (i % 2 !== 1) {
                    newCoords += Math.round(imgWidthPersent * percentArray[i])+ ',';
                } else {
                    newCoords += Math.round(imgHeigthPersent * percentArray[i]) + ',';
                }
            }

            // убираем последниюю запятую в массиве, чтобы SVG.js не лагал
            newCoords = newCoords.slice(0, -1);

            //Рисуем новый полигон
            let currentClass = 'visual-floor-svg-' + className;

            let polygon = draw.polygon(newCoords)
                .fill('transparent')
                .addClass(currentClass)
                .addClass('visual-floor-svg');

            //Принаведении на этот полигон показываем SVG
            $('.' + currentClass).hover(function (event) {
                $(this).attr('fill', color);
                $('#aType').text(type);
                $('#aView').text(view);
                $('#aSquare').text('').append(square);
                $('#aBasePrice').text(basePrice);
                $('#aStoProPrice').text(stoPro);
                $('#aStatus').text(status);
                $('#aNumber').text(apartNumber);
                $('.description-apart.sale').css('display', 'flex');
            }, function () {
                $(this).attr('fill', 'transparent');
                $('.description-apart.sale').hide()
            });

            $('.' + currentClass).mousemove(function (e) {
                $('.description-apart.sale')
                    .css('left', event.clientX + 10)
                    .css('top', event.clientY + 10)
            });

            $('.' + currentClass).click(function () {
                location.href = link;
            })
        }
    }

    for (var i = 0; i < secondFloorsArray.length; i++) {
        if (secondFloorsArray[i] >= 10) {
            floorsBtnsToDOM(secondFloorsArray[i], secondFloorsArray[i])
        } else {
            floorsBtnsToDOM('0' + secondFloorsArray[i], secondFloorsArray[i])
        }
    }

    $('.commerce-choose__container__floors-btns_img').attr('src', corpusFloorsJSON[currentCorpus][currentFloor].bigImgSrc);

    $('.commerce-choose__container__floors-btns_btn').eq(0).addClass('commerce-choose__container__floors-btns_btn-selected')

    $('.commerce-choose__container__floors-btns_btn').click(function () {

        $('polygon').remove();
        $('.commerce-choose__container__floors-btns_btn').removeClass('commerce-choose__container__floors-btns_btn-selected');

        $(this).addClass('commerce-choose__container__floors-btns_btn-selected');
        currentFloor = $(this).data('floor');

        $('.commerce-choose__container__floors-btns_img').attr('src', corpusFloorsJSON[currentCorpus][currentFloor].bigImgSrc);
        $('#svgContainer').height($('.commerce-choose__container__floors-btns_img').height())
    });

    img.onload = function () {
        for (key in corpusFloorsJSON[currentCorpus][currentFloor]) {
            if (key !== 'dataFloor' && key !== 'bigImgSrc') {
                addSVG(
                    corpusFloorsJSON[currentCorpus][currentFloor][key].coords,
                    corpusFloorsJSON[currentCorpus][currentFloor][key].color,
                    colorForClass,
                    corpusFloorsJSON[currentCorpus][currentFloor][key].type,
                    corpusFloorsJSON[currentCorpus][currentFloor][key].windowView,
                    corpusFloorsJSON[currentCorpus][currentFloor][key].square,
                    corpusFloorsJSON[currentCorpus][currentFloor][key].basePrice,
                    corpusFloorsJSON[currentCorpus][currentFloor][key].stopro,
                    corpusFloorsJSON[currentCorpus][currentFloor][key].status,
                    corpusFloorsJSON[currentCorpus][currentFloor][key].link,
                    key
                );
                colorForClass++;
            }
        }
        $('#svgContainer').height($('.commerce-choose__container__floors-btns_img').height())
    };

    $('.default-dropdown_ul_li_link').click(function () {
        localStorage.setItem('corpus', $(this).data('location'))
    });

    if (currentFloor) {
        let floorsBtns = document.querySelectorAll('.commerce-choose__container__floors-btns_btn');
        for (let i = 0; i < floorsBtns.length; i++) {
            let currentBtnData = floorsBtns[i];
            currentBtnData = $(currentBtnData).data('floor');
            if (currentBtnData === currentFloor) {
                let currentBtn = floorsBtns[i];
                currentBtn.scrollIntoView(true);
                $(currentBtn).trigger('click');
                localStorage.removeItem('floor');
            }
        }
    }

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

    $('.loader').fadeOut(500)
};
