window.onload = function () {
    if ($(window).width() > 1250) {
        //Находим 1% от высоты и ширины картинки (она динамическая)
        let imgWidthPersent = $('.visual-img').width() / 100;
        let imgHeigthPersent = $('.visual-img').height() / 100;
        //Создаём новый area,
        function newArea(coords, link, hoverImg, className, descriptionClass, descriptionMain, forSale,
                         studios, oneRoom, twoRoom, termOfDelivery, profitProgram, toLS) {
            let defaultCoords = coords;
            let defaultCoordsArr = (defaultCoords.split(','));
            let percentArray = [];

            //По умолчанию размер картинки 1920 на 837, находим 1% от координат area
            // и меняем их под новую ширину и высоту
            for (var i = 0; i < defaultCoordsArr.length; i++) {
                if (i % 2 !== 1) {
                    percentArray.push(defaultCoordsArr[i] / 19.2)
                } else {
                    percentArray.push(defaultCoordsArr[i] / 8.37)
                }
            }
            let newCoords = "";
            for (var i = 0; i < percentArray.length; i++) {
                if (i % 2 !== 1) {
                    newCoords += Math.round(imgWidthPersent * percentArray[i])+ ',';
                } else {
                    newCoords += Math.round(imgHeigthPersent * percentArray[i]) + ',';
                }
            }

            let areaTemplate = `<area class="${className}" onclick="localStorage.setItem('corpus', '${toLS}'); location.href = '${link}';" data-location="visual-floor.html" coords="${newCoords}" shape="poly">`;

            $('.image-map').append(areaTemplate);

            $('.' + className).hover(function () {
                $('.visual-img-mask').attr('src', hoverImg)
                $('.' + descriptionClass).show()
            }, function () {
                $('.visual-img-mask').attr('src', 'img/visual.jpg')
                $('.' + descriptionClass).hide()
            });

            let descriptionTemplate = `
            <div class="visual-corpus-info ${descriptionClass}">
                <h2 class="visual-corpus-info_main">${descriptionMain}</h2>
                <p class="visual-corpus-info_text">${forSale}</p>
                <ul class="visual-corpus-info__ul">
                    <li class="visual-corpus-info__ul_li">
                        <span class="visual-corpus-info__ul_li_left-span">Студии</span>
                        <span class="visual-corpus-info__ul_li_right-span">${studios}</span>
                    </li>
                    <li class="visual-corpus-info__ul_li">
                        <span class="visual-corpus-info__ul_li_left-span">1-комн</span>
                        <span class="visual-corpus-info__ul_li_right-span">${oneRoom}</span>
                    </li>
                    <li class="visual-corpus-info__ul_li">
                        <span class="visual-corpus-info__ul_li_left-span">2-комн</span>
                        <span class="visual-corpus-info__ul_li_right-span">${twoRoom}</span>
                    </li>
                </ul>
                <p class="visual-corpus-info_description">
                    Срок сдачи: ${termOfDelivery} <br>
                    Программа доходности: ${profitProgram}
                </p>
            </div>
        `;
            $('.visual').append(descriptionTemplate)
        };

        //Вся информация о корпусе лежит в 3d-corpuses.json
        //Всё что вам надо сделать - это подготовить JSON с корректной инфой в таком формате.
        //Также нужно будет поменять ссылки на те, которые сформирует битрикс, сохраняя хэш урла
        var corpusesConfigJSON = (function () {
            var corpusesConfigJSON = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': 'jsons/3d-corpuses.json',
                'dataType': "json",
                'success': function (data) {
                    corpusesConfigJSON = data;
                }
            });
            return corpusesConfigJSON;
        })();

        for (let key in corpusesConfigJSON) {
            newArea(
                corpusesConfigJSON[key].coords,
                corpusesConfigJSON[key].link,
                corpusesConfigJSON[key].hoverImg,
                corpusesConfigJSON[key].className,
                corpusesConfigJSON[key].descriptionClass,
                corpusesConfigJSON[key].descriptionMain,
                corpusesConfigJSON[key].forSale,
                corpusesConfigJSON[key].studios,
                corpusesConfigJSON[key].oneRoom,
                corpusesConfigJSON[key].twoRoom,
                corpusesConfigJSON[key].termOfDelivery,
                corpusesConfigJSON[key].profitProgram,
                corpusesConfigJSON[key].toLS
            )
        }

    } else  {

        var corpusesConfigJSON = (function () {
            var corpusesConfigJSON = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': 'jsons/3d-corpuses.json',
                'dataType': "json",
                'success': function (data) {
                    corpusesConfigJSON = data;
                }
            });
            return corpusesConfigJSON;
        })();

        function addLink(link, className, type, number, toLS) {
            let btnTemplate = `
            <a onclick="localStorage.setItem('corpus', '${toLS}'); location.href = '${link}';" class="visual-mobile__container__img_btn ${className}">
                <span class="visual-mobile__container__img_btn_big-span">${number}</span>
                <span class="visual-mobile__container__img_btn_little-span">${type}</span>
            </a>
            `

            $('.visual-mobile__container__img').append(btnTemplate)
        }

        for (let key in corpusesConfigJSON) {
            addLink(
                corpusesConfigJSON[key].link,
                corpusesConfigJSON[key].mobileClassName,
                corpusesConfigJSON[key].type,
                corpusesConfigJSON[key].number,
                corpusesConfigJSON[key].toLS
            );
        }
    }

    $('.loader').fadeOut(500)
};