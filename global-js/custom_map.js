function mapInit(){
    var placemark1,
     station1,
     station2,
     station3,
     station4,
     med1,
     med2,
     med3,
     med4,
     med5,
     med6,
     med7,
     mus1,
     mus2,
     mus3,
     mus4,
     mus5,
     mus6,
     mus7,
     park1,
     park2,
     park3,
     park4,
     park5,
     park6,
     park7,
     park8,
     park9,
     park10,
     teatr1,
     teatr2,
     teatr3,
     teatr4,
     teatr5,
     teatr6,
     teatr7,
     shop1,
     shop2,
     shop3,
     shop4,
     shop5,
     shop6,
     shop7,
     shop8,
     shop9,
     shop10,
     school1,
     school2,
     school3,
     school4,
     school5,
     school6,
     school7,
     school8,
     school9,
     school10,
     school11,
     school12,
     school13,
     school14,
     school15,
     school16,
     metro1,
     metro2,
     metro3,
     metro4,
     metro5,
     metro6,
     metro7;

    var myMap = new ymaps.Map("map", {
        center: [59.88774310637677,30.34267540146708],
        zoom: 13,
        controls: ['typeSelector', 'zoomControl']
        },
        {
            suppressMapOpenBlock: true
        });

    myMap.behaviors.disable([
       'scrollZoom',
       'rulerControl'
    ]);


    var myPin = new ymaps.GeoObjectCollection({}, {});

    placemark1 = new ymaps.Placemark([59.88509258,30.36819994], {},{
        iconLayout: 'default#image',
        iconImageHref: 'img/metka1.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-33, -72],
    });
    station1 = new ymaps.Placemark([59.92997443256934,30.362131466561266],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/station.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72],
    });
    station2 = new ymaps.Placemark([59.91988463795576,30.32921757440426],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/station.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    station3 = new ymaps.Placemark([59.90668638628005,30.298822751852846],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/station.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    station4 = new ymaps.Placemark([59.93181489789502,30.441086159175907],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/station.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    med1 = new ymaps.Placemark([59.874086607727264,30.362708293576127],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/med-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    med2 = new ymaps.Placemark([59.88298120173243,30.415397415211704],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/med-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    med3 = new ymaps.Placemark([59.882592215539596,30.37115536195046],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/med-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    med4 = new ymaps.Placemark([59.85698383691669,30.334489232259738],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/med-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    med5 = new ymaps.Placemark([59.84923812192067,30.295908792131087],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/med-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    med6 = new ymaps.Placemark([59.83871015039832,30.418844269723376],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/med-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    med7 = new ymaps.Placemark([59.892768122636404,30.40966664800796],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/med-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    mus1 = new ymaps.Placemark([59.89376016035116,30.362862262220563],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mus.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    mus2 = new ymaps.Placemark([59.887993334786046,30.330323277547542],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mus.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    mus3 = new ymaps.Placemark([59.88776509748478,30.36474958044588],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mus.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    mus4 = new ymaps.Placemark([59.86596540709588,30.350794729601592],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mus.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    mus5 = new ymaps.Placemark([59.86541435132542,30.34037611632498],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mus.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    mus6 = new ymaps.Placemark([59.864816059565904,30.39498910222491],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mus.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    mus7 = new ymaps.Placemark([59.900104660432376,30.400584410288563],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mus.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    park1 = new ymaps.Placemark([59.867278954113765,30.36551988989855],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/park-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    park2 = new ymaps.Placemark([59.863512978514564,30.363695987768406],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/park-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    park3 = new ymaps.Placemark([59.858509562501276,30.401734963698303],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/park-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    park4 = new ymaps.Placemark([59.85373871207012,30.410575524611403],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/park-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    park5 = new ymaps.Placemark([59.8692811401699,30.418534962634997],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/park-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    park6 = new ymaps.Placemark([59.876304368356735,30.42774020032661],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/park-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    park7 = new ymaps.Placemark([59.88251721856197,30.43941317395943],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/park-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    park8 = new ymaps.Placemark([59.86719935894905,30.32894793429339],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/park-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    park9 = new ymaps.Placemark([59.867760443245665,30.29976550021134],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/park-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    park10 = new ymaps.Placemark([59.88143601807282,30.37198957409663],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/park-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    teatr1 = new ymaps.Placemark([59.896444002909064,30.352873282846886],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/teatr.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    teatr2 = new ymaps.Placemark([59.86913450025541,30.35076414288315],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/teatr.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    teatr3 = new ymaps.Placemark([59.860616468039446,30.34503157131453],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/teatr.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    teatr4 = new ymaps.Placemark([59.85348127991571,30.35055753065744],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/teatr.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    teatr5 = new ymaps.Placemark([59.869559825841215,30.41140913515789],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/teatr.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    teatr6 = new ymaps.Placemark([59.88690405755331,30.331845858259896],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/teatr.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    teatr7 = new ymaps.Placemark([59.89090225292841,30.428121861628842],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/teatr.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    shop1 = new ymaps.Placemark([59.88333665619906,30.369834089484904],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/shop-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    shop2 = new ymaps.Placemark([59.88899506172387,30.37819549666914],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/shop-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    shop3 = new ymaps.Placemark([59.87711711434841,30.35889255961505],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/shop-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    shop4 = new ymaps.Placemark([59.87570502723671,30.373316832978748],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/shop-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    shop5 = new ymaps.Placemark([59.89607208614472,30.35749518009317],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/shop-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    shop6 = new ymaps.Placemark([59.8982890059847,30.39901006405853],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/shop-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    shop7 = new ymaps.Placemark([59.87017172800201,30.37919199093985],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/shop-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    shop8 = new ymaps.Placemark([59.86837497889387,30.367577648670927],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/shop-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    shop9 = new ymaps.Placemark([59.86320987609457,30.40427482999574],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/shop-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    shop10 = new ymaps.Placemark([59.87418970724711,30.336696157876357],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/shop-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school1 = new ymaps.Placemark([59.889689053280954,30.35986619158127],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school2 = new ymaps.Placemark([59.87835964928847,30.369341891857108],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school3 = new ymaps.Placemark([59.87691354102951,30.38012622883598],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school4 = new ymaps.Placemark([59.87221806425116,30.394399000000007],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school5 = new ymaps.Placemark([59.87368994503922,30.371693880950822],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school6 = new ymaps.Placemark([59.877958064265904,30.390527000000016],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school7 = new ymaps.Placemark([59.874214064256236,30.408798999999924],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school8 = new ymaps.Placemark([59.89130856420684,30.413182499999994],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school9 = new ymaps.Placemark([59.90026034364079,30.36542108465576],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school10 = new ymaps.Placemark([59.879649411524696,30.321658128974864],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school11 = new ymaps.Placemark([59.876364064261786,30.32521949999996],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school12 = new ymaps.Placemark([59.87513363208927,30.31914908465572],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school13 = new ymaps.Placemark([59.87813499101495,30.335852398147516],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school14 = new ymaps.Placemark([59.887905064229166,30.364673499999938],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school15 = new ymaps.Placemark([59.88246872462059,30.380968016532908],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    school16 = new ymaps.Placemark([59.890090064234805,30.330196499999996],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/school-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    metro1 = new ymaps.Placemark([59.88416464703041,30.36907133068844],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/metro-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    metro2 = new ymaps.Placemark([59.89612129868244,30.357714863754268],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/metro-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    metro3 = new ymaps.Placemark([59.87035462374698,30.379013096554576],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/metro-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    metro4 = new ymaps.Placemark([59.879207783537176,30.318799449491745],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/metro-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    metro5 = new ymaps.Placemark([59.86633107624373,30.32168265010836],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/metro-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    metro6 = new ymaps.Placemark([59.891773639188216,30.31795977116392],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/metro-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    metro7 = new ymaps.Placemark([59.853467872605165,30.321782699417962],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/metro-icon.png',
        iconImageSize: [61, 81],
        iconImageOffset: [-30, -72]
    });
    myPin.add(placemark1).add(station1).add(station2).add(station3).add(station4).add(med1).add(med2).add(med3).add(med4).add(med5).add(med6).add(med7).add(mus1).add(mus2).add(mus3).add(mus4).add(mus5).add(mus6).add(mus7).add(park1).add(park2).add(park3).add(park4).add(park5).add(park6).add(park7).add(park8).add(park9).add(park10).add(teatr1).add(teatr2).add(teatr3).add(teatr4).add(teatr5).add(teatr6).add(teatr7).add(shop1).add(shop2).add(shop3).add(shop4).add(shop5).add(shop6).add(shop7).add(shop8).add(shop9).add(shop10).add(school1).add(school2).add(school3).add(school4).add(school5).add(school6).add(school7).add(school8).add(school9).add(school10).add(school11).add(school12).add(school13).add(school14).add(school15).add(school16).add(metro1).add(metro2).add(metro3).add(metro4).add(metro5).add(metro6).add(metro7);
    myMap.geoObjects.add(myPin);

}



