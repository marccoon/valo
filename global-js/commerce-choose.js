window.onload = function () {
let bankNumber = 1;

function newCard (imgSrc, attr) {
    let bankCardTemplateContainer = `
        <div class="buy-modal-container__ipoteca_right__banks_bank-card" data-bank-number="bank${attr}">
            <img src="${imgSrc}" alt="" class="buy-modal-container__ipoteca_right__banks_bank-card_img">
        </div>`;

    $('.buy-modal-container__ipoteca_right__banks').append(bankCardTemplateContainer)
}

    var draw = SVG('corpusesSVGContainer').size('100%', '100%');

    // JSON с корпусами координатами SVG и ифной
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

    function newSVGCorp (container, SVGcontainer, coordinates,
                         color, uniqueClass, firstMain, firstSquare,
                         firstPrice, secondMain, secondSquare, secondPrice,
                         thirdMain, thirdSquare, thirdPrice, uniqueDescriptionClass,
                         descriptionPositionLeft, descriptionPositionTop, link, toLS) {
        var newcorp = SVGcontainer.polygon(coordinates)
            .attr({ fill: color })
            .addClass('svg-corpus')
            .addClass(uniqueClass);
        $(container).prepend(newDescriptionForSVGCorp(firstMain, firstSquare, firstPrice, secondMain, secondSquare, secondPrice, thirdMain, thirdSquare, thirdPrice, uniqueDescriptionClass));
        $('.' + uniqueClass).hover(function () {
            $('.' + uniqueDescriptionClass).css('display', 'flex')
        }, function () {
            $('.' + uniqueDescriptionClass).css('display', 'none')
        })
        $('.' + uniqueDescriptionClass).css('left', descriptionPositionLeft).css('top', descriptionPositionTop)
        $('.' + uniqueClass).click(function () {
            localStorage.setItem('corpus', toLS)
            location.href = link;
        });
    }

    function newDescriptionForSVGCorp (firstMain, firstSquare, firstPrice, secondMain, secondSquare, secondPrice, thirdMain, thirdSquare, thirdPrice, uniqueDescriptionClass) {
        var description =
            `
           <div class="commerce-choose__container__left_img-container__discription ${uniqueDescriptionClass}">
           
           <div class="commerce-choose__container__left_img-container__discription_row">
                <h2 class="commerce-choose__container__left_img-container__discription_row_main">
                    ${firstMain}
                </h2>
                <div class="commerce-choose__container__left_img-container__discription_row_bottom">
                     <p class="commerce-choose__container__left_img-container__discription_row_bottom_left">
                          ${firstSquare} м<sup>2</sup>
                     </p>
                     <p class="commerce-choose__container__left_img-container__discription_row_bottom_right">
                          ${firstPrice}  руб.
                     </p>
                </div>
            </div>   
            
            <div class="commerce-choose__container__left_img-container__discription_row">
                <h2 class="commerce-choose__container__left_img-container__discription_row_main">
                    ${secondMain}
                </h2>
                <div class="commerce-choose__container__left_img-container__discription_row_bottom">
                     <p class="commerce-choose__container__left_img-container__discription_row_bottom_left">
                          ${secondSquare} м<sup>2</sup>
                     </p>
                     <p class="commerce-choose__container__left_img-container__discription_row_bottom_right">
                          ${secondPrice}  руб.
                     </p>
                </div>
            </div>
            
            <div class="commerce-choose__container__left_img-container__discription_row">
                <h2 class="commerce-choose__container__left_img-container__discription_row_main">
                    ${thirdMain}
                </h2>
                <div class="commerce-choose__container__left_img-container__discription_row_bottom">
                     <p class="commerce-choose__container__left_img-container__discription_row_bottom_left">
                          ${thirdSquare} м<sup>2</sup>
                     </p>
                     <p class="commerce-choose__container__left_img-container__discription_row_bottom_right">
                          ${thirdPrice}  руб.
                     </p>
                </div>
            </div>  
           
           
           <div class="commerce-choose__container__left_img-container__discription_triangle"></div>
       </div>
    `
        return description;
    }

    // json с инфой об ипотеках и банках
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

    for (key in banksConfigJSON) {
        newCard(banksConfigJSON[key].img, bankNumber)
        bankNumber++
        if (key == 'bank1'){
            $('.buy-modal-container__ipoteca_right__banks_bank-card').addClass('buy-modal-container__ipoteca_right__banks_bank-card-checked')
        }
    }

    //Делаем первый банк выбранным
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

    //Меняем инфу о банке при клике
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

    //Выбираем вариант покупки в модалке
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

    $('.buy-modal-container__ipoteca_button').click(function () {
        $('.popup').fadeOut(500)
        setTimeout(function () {
            $('.mail-modal').fadeIn(500)
        },500)
    });

    $('.showMeBigModal').click(function () {
        $('.buy-modal').fadeIn(500)
    });

    // Загружаем инфу о копусах в JSON
    if ($(window).width() > '1250') {
        for (key in corpusesJSON) {
            newSVGCorp(
                corpusesSVGContainer,
                draw,
                corpusesJSON[key].coordinate,
                corpusesJSON[key].color,
                corpusesJSON[key].uniqueClass,
                corpusesJSON[key].firstMain,
                corpusesJSON[key].firstSquare,
                corpusesJSON[key].firstPrice,
                corpusesJSON[key].secondMain,
                corpusesJSON[key].secondSquare,
                corpusesJSON[key].secondPrice,
                corpusesJSON[key].thirdMain,
                corpusesJSON[key].thirdSquare,
                corpusesJSON[key].thirdPrice,
                corpusesJSON[key].uniqueDescriptionClass,
                corpusesJSON[key].descriptionPositionLeft,
                corpusesJSON[key].descriptionPositionTop,
                corpusesJSON[key].link,
                corpusesJSON[key].toLS
            )
        }
    }
    $('.loader').fadeOut(500)
};