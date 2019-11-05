//Скрипты для выгрузки из JSON-а инфы о банках на главной страницы и страницы "ипотека"
let bankNumber = 1;
function newCard (imgSrc, attr) {
    let bankCardTemplateContainer = `
    <div class="buy-variants__banks_right_item" data-bank-number="bank${attr}">
        <img src="${imgSrc}" alt="" class="buy-variants__banks_right_item_img">
    </div>
    `;
    $('.buy-variants__banks_right').append(bankCardTemplateContainer)
}

(function showBanks () {
    var banksConfigJSON = (function () {
        var banksConfigJSON = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'data.json',
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
        if (key == 'bank1') {
            $('.buy-variants__banks_right_item').addClass('buy-variants__banks_right_item-checked')
        }
    }
    for (key in banksConfigJSON) {
        if ('bank1' == key) {
            $('.buy-variants__banks_right_item').removeClass('buy-variants__banks_right_item-checked')
            $('#bankImg').attr('src', banksConfigJSON[key].img)
            if (banksConfigJSON[key].maxSum !== '∞') {
                $('#maxSum').text(banksConfigJSON[key].maxSum + ' млн. руб.')
            } else {
                $('#maxSum').text(banksConfigJSON[key].maxSum)
            }
            $('#vzn').text(banksConfigJSON[key].vznos)
            $('#stav').text(banksConfigJSON[key].stav)
            $('#srok').text(banksConfigJSON[key].srok)
        }
    }

    $('.buy-variants__banks_right_item').eq(0).addClass('buy-variants__banks_right_item-checked')
    $('.buy-variants__banks_right_item').click(function () {
        for (key in banksConfigJSON) {
            if ($(this).data('bank-number') == key) {
                $('.buy-variants__banks_right_item').removeClass('buy-variants__banks_right_item-checked')
                $(this).addClass('buy-variants__banks_right_item-checked')
                $('#bankImg').attr('src', banksConfigJSON[key].img)
                if (banksConfigJSON[key].maxSum !== '∞') {
                    $('#maxSum').text(banksConfigJSON[key].maxSum + ' млн. руб.')
                } else {
                    $('#maxSum').text(banksConfigJSON[key].maxSum)
                }
                $('#vzn').text(banksConfigJSON[key].vznos)
                $('#stav').text(banksConfigJSON[key].stav)
                $('#srok').text(banksConfigJSON[key].srok)
            }
        }
    });
})();