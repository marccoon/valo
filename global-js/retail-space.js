window.onload = function () {
    let content = document.querySelector('.commerce-big-container')

    function titleFilter (title) {
        let currentTitle = ''
        if (title === 'corpus2') {
            currentTitle = 'Корпус 2'
        } else if (title === 'corpus3') {
            currentTitle = 'Корпус 3'
        } else if (title === 'corpus4') {
            currentTitle = 'Корпус 4'
        } else if (title === 'corpus5') {
            currentTitle = 'Корпус 5'
        } else if (title === 'section1') {
            currentTitle = 'Секция 1'
        } else if (title === 'section2') {
            currentTitle = 'Секция 2'
        } else if (title === 'section3') {
            currentTitle = 'Секция 3'
        } else if (title === 'section4') {
            currentTitle = 'Секция 4'
        }
        return currentTitle
    }

    function newCoords (coords, width, height) {
        let arr = coords.split(','),
            newArray = []
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 !== 1) {
                newArray.push(arr[i] / (width / 100))
            } else {
                newArray.push(arr[i] / (height / 100))
            }
        }
        return newArray
    }

    function coordsToWidth (coords, width, height) {
        newArray = []

        for (let i = 0; i < coords.length; i++) {
            if (i % 2 !== 1) {
                newArray.push(coords[i] * (width / 100))
            } else {
                newArray.push(coords[i] * (height / 100))
            }
        }

        return newArray
    }

    //JSON с этажами в переменную
    let corpusFloorsJSON = (function () {
        let corpusFloorsJSON = null;
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

    // Перебираем корпуса
    for (let corpus in corpusFloorsJSON) {
        //Перебираем этажи
        for (let floor in corpusFloorsJSON[corpus]) {
            let currentFloor = corpusFloorsJSON[corpus][floor]
            let currentClass = corpus + floor
            let currentTitle = titleFilter(corpus)

            const container = document.createElement('div')
            container.className = currentClass + ' commerce-svg-container__content'

            const title = document.createElement('h2')
            title.className = 'commerce-svg-container__title'
            title.innerHTML = currentTitle

            const subTitle = document.createElement('h3')
            subTitle.className = 'commerce-svg-container__floor'
            subTitle.innerHTML = currentFloor.dataFloor + ' Этаж'

            const imgContainer = document.createElement('div')
            imgContainer.id = currentClass
            imgContainer.className = 'img-container-retail'

            const img = document.createElement('img')
            img.src = currentFloor.bigImgSrcHorizontal

            imgContainer.append(img)
            container.append(title)
            container.append(subTitle)
            container.append(imgContainer)

            img.onload = function () {
                const width = img.width
                const height = img.height

                img.style.width = '100%'

                let counter = 0
                for (let key in currentFloor) {
                    if (key !== 'bigImgSrc' && key !== 'bigImgSrcHorizontal' && key !== 'dataFloor') {
                        counter++
                        let onePercentArr = newCoords(currentFloor[key].horizontalCoords, width, height)
                        let newArray = coordsToWidth(onePercentArr, img.width, img.height)

                        const draw = SVG(currentClass).size('100%', '100%');

                        let polygon = draw.polygon(newArray)
                            .fill('transparent')
                            .addClass('visual-floor-svg');

                        $('#' + polygon.node.id).attr('fill', 'rgba(118, 118, 118, 0.59)')

                        if (currentFloor[key].status === 'Продано!') {
                            $('#' + polygon.node.id).hover(function () {
                                $('#bSquare').text('').append(currentFloor[key].square);
                                $('#bStatus').text(currentFloor[key].status);
                                $('#bNumber').text(key);
                                $('.description-apart.sold').css('display', 'flex');
                            }, function () {
                                $('.description-apart.sold').hide()
                            })
                                .mousemove(function (e) {
                                    $('.description-apart.sold')
                                        .css('left', event.clientX + 10)
                                        .css('top', event.clientY + 10)
                                })
                                .click(function () {
                                    location.href = currentFloor[key].link;
                                })
                        } else {
                            $('#' + polygon.node.id).hover(function (){
                                $(this).attr('fill', currentFloor[key].color)
                                $('#aType').text(currentFloor[key].type);
                                $('#aView').text(currentFloor[key].windowView);
                                $('#aSquare').text('').append(currentFloor[key].square);
                                $('#aBasePrice').text(currentFloor[key].basePrice);
                                $('#aStoProPrice').text(currentFloor[key].stopro);
                                $('#aStatus').text(currentFloor[key].status);
                                $('#aNumber').text(key);
                                $('.description-apart.sale').css('display', 'flex');
                            }, function () {
                                $(this).attr('fill', 'transparent')
                                $('.description-apart.sale').hide()
                            })
                                .mousemove(function (e) {
                                    $('.description-apart.sale')
                                        .css('left', event.clientX + 10)
                                        .css('top', event.clientY + 10)
                                })
                                .click(function () {
                                    location.href = ccurrentFloor[key].link;
                                })
                        }
                    }
                }
            }
            // Вставляем шаблон в контейнер
            content.append(container)
        }
    }

    $('.loader').fadeOut(500)
};
