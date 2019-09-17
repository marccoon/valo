window.onload = function () {
    $('.calculator__content__cards-slider').slick();

    $('.calculator__content__dropdowns_dropdown').click(function (e) {
        if ($('.calculator__content__dropdowns_dropdown').hasClass('active-calc-dd')) {
            $('.apartments-dropdowns-list').removeClass('active-calc-dd')
            $('.dropdown-menu-lists').fadeOut(300);
        }
        let currentDropMenu = this.querySelector('.calculator__content__dropdowns_dropdown_container');
        if ($(currentDropMenu).is(':visible')) {
            this.classList.remove('active-calc-dd')
            $(currentDropMenu).fadeOut(300);
        } else if($(currentDropMenu).is(':hidden'))  {
            $(currentDropMenu).fadeIn(300)
            this.classList.add('active-calc-dd')
        }
    });

    $(document).mouseup(function (e) {
        var container = $(".calculator__content__dropdowns_dropdown");
        if (container.has(e.target).length === 0){
            $(container).removeClass('active-calc-dd')
            $('.calculator__content__dropdowns_dropdown_container').fadeOut(300);
        }
    });
};



