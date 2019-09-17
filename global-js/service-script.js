$(document).ready(function(){
    $('.collapsible').collapsible();
});
$('.slider-one').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        }
    }
});
$('.slider-two').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        }
    }
});

$('.slider-third').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        1300: {
            items: 2
        }
    }
});
$('.slider-four').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        650: {
            items: 2
        },
        950: {
            items: 3
        }
    }
});
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
$( "#accordion" ).accordion();

