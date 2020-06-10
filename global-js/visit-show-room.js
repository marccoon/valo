const cards = document.querySelectorAll('.visit-card')

cards.forEach((i) => {
    const img = $(i).find('.visit-card__img')
    const quantity = img.length
    const width = $(i).innerWidth()
    const step = width / quantity
    const container = $(i).find('.visit-dots')

    $(img[0]).addClass('active')

    for (let i = 0; i < img.length; i++) {
        let template = `<div class="visit-dot"></div>`

        if (i === 0) {
            template = `<div class="visit-dot active"></div>`
        }

        $(container).append(template)
    }

    i.onclick = function () {
        $('.modal-3d').css({
            display: 'flex'
        })

        let src = $(this).data('3d-tour')

        $('.modal-3d').find('iframe').attr('src', src)
    }

    i.onmousemove = e => {
        let counter = 0
        for (let i = 0; i < e.offsetX; i+=step) {
            counter++
        }

        counter <= 0 ? counter = 1 : null
        $(img).removeClass('active')
        $(img[counter - 1]).addClass('active')
        $(i).find('.visit-dot').removeClass('active')
        $(i).find(`.visit-dot:eq(${counter - 1})`).addClass('active')
    }
})

$('.loader').fadeOut(500)
