let heigth = ($(window).height());
window.onresize = function(event) {
    heigth = ($(window).height());
    $('.loader').height(heigth)
};
var haderContent = `
<div class="header-wrapper header-open-menu">
        <div class="header__left">
            <a href="index.html"><img src="img/header-logo.png" alt="" class="header-img"></a>
            <label>
                <input type="checkbox" id="hamb" class="header__menu-checkbox">
                <img src="img/ham.png" alt="menu" class="header__menu_btn">
            </label>
        </div>
        <div class="header__center">
            <ul class="header__center__lists">
                <li class="header__center__lists_li">пн-пт: 10:00 – 19:00</li>
                <li class="header__center__lists_li">сб-вс: 11:00 – 17:00</li>
            </ul>
            <ul class="header__center__lists-right">
                <li class="header__center__lists_li-right"><a href="tel: +78122107057" class="header__center__lists_li-right_link">+7 (812) 210-70-57</a></li>
                <li class="header__center__lists_li-right"><a href="tel: +78002229385" class="header__center__lists_li-right_link">+7 (800) 222-93-85</a></li>
            </ul>
        </div>
        <div class="header__right-big">
            <div class="header__right-big__container">
                <a href="favourite.html" class="header__right-big__container__item">
                    <p class="header__right-big__container__item_counter">0</p>
                </a>
                <a href="calculator.html" class="header__right-big__container__item header__right-big__container__item2">

                </a>
                <input class="header__right-big__container__item header__right-big__container__item3">
            </div>
            <div class="header__right">
                <img src="img/YIT.png" alt="" class="header__right_img">
                <img src="img/TMG.png" alt="" class="header__right_img">
            </div>
        </div>
    </div>

    <menu class="header__menu">
        <div class="header__menu-container">
            <img src="img/hresteg.png" alt="Крестик" id="headerCross" class="header__menu_cross">
            <div class="header-wrapper">
                <div class="owl-carousel header-slider owl-theme">
                    <div class="header-slider__item">
                        <ul class="header-slider__item_lists">
                            <li class="header-slider__item_lists_li-main"><a href="about-project.html" class="header-slider__item_lists_li-main_link">О проекте</a></li>
                            <li class="header-slider__item_lists_li-line"></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link header-link-blue" href="#">Что такое VALO </a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="documents.html">Документы</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">Архитектура</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">Технологии</a></li>
                        </ul>
                    </div>

                    <div class="header-slider__item">
                        <ul class="header-slider__item_lists">
                            <li class="header-slider__item_lists_li-main"><a href="about-company.html" class="header-slider__item_lists_li-main_link">О КОМПАНИИ</a></li>
                            <li class="header-slider__item_lists_li-line"></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">ГАЛС</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="services.html">VALO Service</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="company-blog.html">Блог компании </a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="faq.html">FAQ</a></li>
                        </ul>
                    </div>

                    <div class="header-slider__item">
                        <ul class="header-slider__item_lists">
                            <li class="header-slider__item_lists_li-main"><a href="partners.html" class="header-slider__item_lists_li-main_link">ПАРТНЕРЫ VALO</a></li>
                            <li class="header-slider__item_lists_li-line"></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">TMG Group</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">YIT</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">GLOBAL EM</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">Mercure</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">Hospitality management</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">Еврономер</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">Агентства</a></li>
                        </ul>
                    </div>

                    <div class="header-slider__item">
                        <ul class="header-slider__item_lists">
                            <li class="header-slider__item_lists_li-main"><a href="#" class="header-slider__item_lists_li-main_link">ВЫБОР АПАРТАМЕНТОВ</a></li>
                            <li class="header-slider__item_lists_li-line header-slider__item_lists_li-line-30"></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="apartments.html">Планировки</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">Выбор на 3D плане</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="commerce-choose.html">Коммерческие помещения</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">Паркинг</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">Отделка</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">Оснащение</a></li>
                        </ul>
                    </div>

                    <div class="header-slider__item">
                        <ul class="header-slider__item_lists">
                            <li class="header-slider__item_lists_li-main"><a href="#" class="header-slider__item_lists_li-main_link">ИНВЕСТИРОВАНИЕ</a></li>
                            <li class="header-slider__item_lists_li-line"></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="profit-programs.html">Доходные программы</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="portfolio-programs.html">Портфельные программы</a></li>
                        </ul>
                    </div>

                    <div class="header-slider__item">
                        <ul class="header-slider__item_lists">
                            <li class="header-slider__item_lists_li-main"><a href="how-to-buy.html" class="header-slider__item_lists_li-main_link">КАК КУПИТЬ</a></li>
                            <li class="header-slider__item_lists_li-line"></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="ipoteca.html">Ипотека</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="instalment.html">Рассрочка</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="stopro.html">100% оплата</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="trade-in.html">Trade-in</a></li>
                        </ul>
                    </div>

                    <div class="header-slider__item">
                        <ul class="header-slider__item_lists">
                            <li class="header-slider__item_lists_li-main"><a href="#" class="header-slider__item_lists_li-main_link">ХОД СТРОИТЕЛЬСТВА</a></li>
                            <li class="header-slider__item_lists_li-line header-slider__item_lists_li-line-30"></li>
                        </ul>
                    </div>

                    <div class="header-slider__item">
                        <ul class="header-slider__item_lists">
                            <li class="header-slider__item_lists_li-main"><a href="#" class="header-slider__item_lists_li-main_link">ПРЕИМУЩЕСТВА</a></li>
                            <li class="header-slider__item_lists_li-line"></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="location.html">Локация</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#"> Услуги собственникам и арендаторам</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="infrastructure.html">Инфраструктура</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">Безопасность</a></li>
                            <li class="header-slider__item_lists_li-link"><a class="header-link" href="#">Гостиничные технологии</a></li>
                        </ul>
                    </div>

                    <div class="header-slider__item">
                        <ul class="header-slider__item_lists">
                            <li class="header-slider__item_lists_li-main"><a href="#" class="header-slider__item_lists_li-main_link">КОНТАКТЫ</a></li>
                            <li class="header-slider__item_lists_li-line"></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="header_bottom-text">Используйте скролл</p>
            <img src="img/header-menu-arr.png" alt="" class="header_bottom-img">
        </div>
    </menu>
`;
$('header').append(haderContent)
let footerContent = `
        <div class="footer-wrapper">
        <div class="footer-left">
            <div class="footer__images">
                <img src="img/YIT.png" alt="" class="footer__images_img">
                <img src="img/TMG.png" alt="" class="footer__images_img">
                <p class="footer__images__text">Генеральный подрядчик:
                    очередь 1 и 2 – YIT,
                    очередь 3 – TMG Group</p>
            </div>
            <p class="footer-left__text">
                © 2018     ООО «ГАЛС» Сайт не является публичной офертой*
            </p>
        </div>

        <div class="footer-right">
            <div class="footer-right-social">
                <a href=""><img src="img/you.png" alt="" class="footer-right-social-img footer-right-social-img1"></a>
                <a href=""><img src="img/inst.png" alt="" class="footer-right-social-img footer-right-social-img2"></a>
                <a href=""><img src="img/vkn.png" alt="" class="footer-right-social-img footer-right-social-img3"></a>
                <a href=""><img src="img/fac.png" alt="" class="footer-right-social-img footer-right-social-img4"></a>
            </div>
            <div class="footer-right__text-block">
                <ul class="footer-right__text-block__lists footer-right__text-block__lists-time">
                    <li class="footer-right__text-block__lists_li">Отдел продаж:</li>
                    <li class="footer-right__text-block__lists_li">пн-пт: 10:00 – 19:00,</li>
                    <li class="footer-right__text-block__lists_li">сб-вс: 11:00 – 17:00</li>
                </ul>

                <ul class="footer-right__text-block__lists footer-right__text-block__lists-right">
                    <li class="footer-right__text-block__lists_li">Разрешительная документация</li>
                    <li class="footer-right__text-block__lists_li">Политика конфиденциальности</li>
                </ul>
            </div>
        </div>
    </div>
`
$('footer').append(footerContent)
$('.header__menu_btn').click(function () {
    $('.header__menu').fadeIn(500);
});
$('.header__menu_cross').click(function () {
    $('.header__menu').fadeOut(500);
});
var owl = $('.header-slider');
owl.owlCarousel({
    loop:true,
    dots: false,
    nav:true,
    margin:10,
    responsive:{
        1360:{
            items:4
        },
        0:{
            items:2
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
$('.header__right-big__container__item3').click(function () {
    if ($('.header__right-big__container__item3').hasClass('header__right-big__container__item3-active')) {
        $('.header__right-big__container__item3').removeClass('header__right-big__container__item3-active')
    } else {
        $('.header__right-big__container__item3').addClass('header__right-big__container__item3-active')
    }
});
$(document).mouseup(function (e) {
    let container = $(".header__right-big__container__item3");
    if (container.has(e.target).length === 0){
        $('.header__right-big__container__item3').removeClass('header__right-big__container__item3-active');
        $('.header__right-big__container__item3').val('');
    }
});
$('.showMeCallBack, .how-to-buy__managers_btn').click(function () {
    $('.mail-modal').fadeIn(500)
});
//Все дропдауны на сайте
$('.default-dropdown').hover(function () {
    $(this).children('.default-dropdown').css('top', $(this).innerHeight() + 3)
});
$('.default-dropdown').click(function () {
    $(this).children('.default-dropdown').css('top', $(this).innerHeight() + 3)
});
