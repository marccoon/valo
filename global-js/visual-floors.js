window.onload = function () {
    var currentClassNumber = 0;
    var img = document.querySelector('.visual-floors_img');
    var corpusNumberStr = '';
    var currentCorpus =  'corpus2';
    if (localStorage.getItem('corpus')) {
        currentCorpus = localStorage.getItem('corpus');
    }

    if (currentCorpus == 'corpus2') {
        corpusNumberStr = 'Корпус 2'
    } else if (currentCorpus == 'corpus3') {
        corpusNumberStr = 'Корпус 3'
    } else if (currentCorpus == 'corpus4') {
        corpusNumberStr = 'Корпус 4'
    } else if (currentCorpus == 'corpus5') {
        corpusNumberStr = 'Корпус 5'
    } else if (currentCorpus == 'section1') {
        corpusNumberStr = 'Корпус 1 Секция 1'
    } else if (currentCorpus == 'section2') {
        corpusNumberStr = 'Корпус 1 Секция 2'
    } else if (currentCorpus == 'section3') {
        corpusNumberStr = 'Корпус 1 Секция 3'
    } else if (currentCorpus == 'section4') {
        corpusNumberStr = 'Корпус 1 Секция 4'
    }


    $('.visual-current-corp').text(corpusNumberStr)

    var visualFloorsJSON = (function () {
        var visualFloorsJSON = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'jsons/visual-floors.json',
            'dataType': "json",
            'success': function (data) {
                visualFloorsJSON = data;
            }
        });
        return visualFloorsJSON;
    })();


    if ($(window).width() >1250) {
        img.onload = function () {
            var imgWidthPersent = $('.visual-floors_img').width() / 100;
            var imgHeigthPersent = $('.visual-floors_img').height() / 100;
            if (!draw) {
                var draw = SVG('visualFloorsContainer').size('100%', '100%');
            }

            function addSVG (coords, color, className,
                             link, descriptionMain,forSale, studios,
                             oneRoom, twoRoom, termOfDelivery, profitProgram, floorLS) {

                let defaultCoordsArr = (coords.split(','));
                let percentArray = [];
                let newCoords = "";

                for (var i = 0; i < defaultCoordsArr.length; i++) {
                    if (i % 2 !== 1) {
                        percentArray.push(defaultCoordsArr[i] / 19.2)
                    } else {
                        percentArray.push(defaultCoordsArr[i] / 8.37)
                    }
                }

                for (var i = 0; i < percentArray.length; i++) {
                    if (i % 2 !== 1) {
                        newCoords += Math.round(imgWidthPersent * percentArray[i])+ ',';
                    } else {
                        newCoords += Math.round(imgHeigthPersent * percentArray[i]) + ',';
                    }
                }

                newCoords = newCoords.slice(0, -1);

                let polygon = draw.polygon(newCoords)
                    .fill('transparent')
                    .addClass('visual-floor-svg-' + className)
                    .addClass('visual-floor-svg');

                var currentClass =  '.visual-floor-svg-' + className
                var newDescriptionClass = currentClass + '-description'
                let descriptionTemplate = `
            <div class="visual-corpus-info ${'visual-floor-svg-' + className + '-description'}">
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
                 ${profitProgram}
             </p>
         </div>
        `;

                $('.visual-floors__container').append(descriptionTemplate);

                $(currentClass).hover(function () {
                    $(this).attr('fill', color);
                    $(newDescriptionClass).show()
                }, function () {
                    $(this).attr('fill', 'transparent');
                    $(newDescriptionClass).hide()
                });

                $(currentClass).click(function () {
                    localStorage.setItem('floor', floorLS)
                    location.href = link;
                })
            }

            for (let key in visualFloorsJSON) {
                if (key == currentCorpus) {
                    for (let i in visualFloorsJSON[key]) {
                        currentClassNumber++
                        if (i !== 'containerImgLink' && i !== 'tabletContainerImgLink' && i !== 'mobileContainerImgLink') {
                            addSVG(
                                visualFloorsJSON[key][i].coords,
                                visualFloorsJSON[key][i].fill,
                                currentClassNumber,
                                visualFloorsJSON[key][i].link,
                                visualFloorsJSON[key][i].descriptionMain,
                                visualFloorsJSON[key][i].forSale,
                                visualFloorsJSON[key][i].studios,
                                visualFloorsJSON[key][i].oneRoom,
                                visualFloorsJSON[key][i].twoRoom,
                                visualFloorsJSON[key][i].termOfDelivery,
                                visualFloorsJSON[key][i].profitProgram,
                                visualFloorsJSON[key][i].floorLS,
                            )
                        }
                    }
                }
            }
        };

        for (let key in visualFloorsJSON) {
            $('.visual-floors_img').attr('src', visualFloorsJSON[currentCorpus].containerImgLink)
        }
    }  else if ($(window).width() <= 1250 && $(window).width() > 750) {
        let classCouner = 0;

        function newLinkToDd (link, floorLS, mobileFloor) {
            let ddLinkTemplate = `            
            <li class="default-dropdown_ul_li">
                <span class="default-dropdown_ul_li_link" onclick="localStorage.setItem('floor', '${floorLS}'); location.href = '${link}';">${mobileFloor}</span>
            </li>`;

            $('.visual-floors-dd').append(ddLinkTemplate)
        }

        for (let key in visualFloorsJSON) {
            if (key == currentCorpus) {
                for (let i in visualFloorsJSON[key]) {
                    classCouner++;
                    if (i !== 'containerImgLink' && i !== 'tabletContainerImgLink' && i !== 'mobileContainerImgLink') {
                        newLinkToDd(
                            visualFloorsJSON[key][i].link,
                            visualFloorsJSON[key][i].floorLS,
                            visualFloorsJSON[key][i].mobileFloor,
                        )
                    }
                }
            }
        }

        for (let key in visualFloorsJSON) {
            $('.visual-floors_img').attr('src', visualFloorsJSON[currentCorpus].tabletContainerImgLink)
        }
    } else if ($(window).width() <= 750) {
        let classCouner = 0;

        function newLinkToDd (link, floorLS, mobileFloor) {
            let ddLinkTemplate = `            
            <li class="default-dropdown_ul_li">
                <span class="default-dropdown_ul_li_link" onclick="localStorage.setItem('floor', '${floorLS}'); location.href = '${link}';">${mobileFloor}</span>
            </li>`;

            $('.visual-floors-dd').append(ddLinkTemplate)
        }

        for (let key in visualFloorsJSON) {
            if (key == currentCorpus) {
                for (let i in visualFloorsJSON[key]) {
                    classCouner++;
                    if (i !== 'containerImgLink' && i !== 'tabletContainerImgLink' && i !== 'mobileContainerImgLink') {
                        newLinkToDd(
                            visualFloorsJSON[key][i].link,
                            visualFloorsJSON[key][i].floorLS,
                            visualFloorsJSON[key][i].mobileFloor,
                        )
                    }
                }
            }
        }

        for (let key in visualFloorsJSON) {
            $('.visual-floors_img').attr('src', visualFloorsJSON[currentCorpus].mobileContainerImgLink)
        }
    }

    $('.loader').fadeOut(500)
};