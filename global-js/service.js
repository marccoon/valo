window.onload = function () {
    $('.best-card-img1').hover(function(){
        $(this).attr('src','img/cup1.png');
    },function(){
        $(this).attr('src','img/cup.png');
    });
    $('.best-card-img2').hover(function(){
        $(this).attr('src','img/news1.png');
    },function(){
        $(this).attr('src','img/news.png');
    });
    $('.best-card-img3').hover(function(){
        $(this).attr('src','img/circle1.png');
    },function(){
        $(this).attr('src','img/circle.png');
    });
    $('.active-sport__container__dd3').accordion({
        heightStyle: "content",
        collapsible: true
    });
    $('.loader').fadeOut(500)
}