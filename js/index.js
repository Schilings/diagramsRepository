// noinspection JSUnresolvedVariable

/**
 * 首页的js
 */

const $ = jQuery;

// 入口函数
$(function () {
    // 加载样式效果
    loadStyleEffect();

    // 加载环保视频
    (async function () {
        await loadVideo();
    })();

    // 加载小知识
    (async function () {
        await loadKnowledge();
    })();
});

// 加载事件
function loadEvents() {
    // 刷新新闻
    $('#refresh-news').click(() => {
        (async function () {
            await loadNews();
        })();
    });


    // 刷新视频
    $('#refresh-video').click(() => {
        (async function () {
            await loadVideo();
        })();
    });


    // 刷新小知识
    $('#refresh-knowledge').click(() => {
        (async function () {
            await loadKnowledge();
        })();
    });
}


// 加载环保视频
async function loadVideo() {
    let url = API.VIDEO_API.ALL;
    let data = await get(url, {
        type: 'r',
        length: 2
    });
    data = data.data;
    let frames = $('.video-frame');
    let names = $('.video-name');
    for (let i = 0; i < 2; i++) {
        $(frames[i]).attr('src', data[i]['videoUrl']);
        $(names[i]).html(data[i]['videoName']);
    }
}



// 加载小知识
async function loadKnowledge() {
    let data = [{
        "holidayId": 4,
        "holidayName": "世界水日",
        "holidayDate": "3月22日",
        "holidayReason": "联合国大会作出决议确定<br>致力于解决因水资源需求上升而引起的全球性水危机"
    }, {
        "holidayId": 5,
        "holidayName": "世界地球日",
        "holidayDate": "4月22日",
        "holidayReason": "世界地球日是一项世界性的环境保护运动<br>联合国大会一致通过决议，决定世界地球日"
    }, {
        "holidayId": 7,
        "holidayName": "防治荒漠化和干旱日",
        "holidayDate": "6月17日",
        "holidayReason": "为防治荒漠化<br>由联合国通过决议"
    }, {
        "holidayId": 9,
        "holidayName": "世界动物日",
        "holidayDate": "10月4日",
        "holidayReason": "为唤起世人关注濒危生物<br>中国从1997年开始纪念世界动物日"
    }, {
        "holidayId": 2,
        "holidayName": "植树日",
        "holidayDate": "3月12日",
        "holidayReason": "党和国家十分重视绿化建设<br>国务院提议，为动员全国各族人民植树造林"
    }, {
        "holidayId": 6,
        "holidayName": "国际生物多样性日",
        "holidayDate": "5月22日",
        "holidayReason": "为了保护全球的生物多样性<br>联合国大会通过决议成立国际生物多样性日"
    }];


    let titles = $('.knowledge-item h3');
    let contents = $('.knowledge-item p');

    for (let i = 0; i < 6; i++) {
        $(titles[i]).html(data[i]['holidayName']);
        $(contents[i]).html(`${data[i]['holidayDate']}<br>${data[i]['holidayReason']}`);
    }
}



// 加载样式效果
function loadStyleEffect() {

    // 加载时候的动图
    $(window).load(function () {
        // noinspection JSUnresolvedFunction
        $('#loading').fadeOut();
        // noinspection JSUnresolvedFunction
        $('#loadingDiv').delay(1000).fadeOut("slow");
    });

    // 滚动到30的时候，导航栏折叠
    // noinspection JSUnresolvedFunction
    $(window).on('ready , scroll', function () {
        if ($(window).scrollTop() > 30) {
            // noinspection JSUnresolvedFunction
            $('#navbar').addClass('minified');
        } else {
            // noinspection JSUnresolvedFunction
            $('#navbar').removeClass('minified');
        }
    });

    // 轮播图翻页效果
    // noinspection JSUnresolvedFunction
    $('#nav-menu').onePageNav({
        currentClass: 'active',
        scrollSpeed: 500,
        easing: 'linear'
    });

    // 动画效果
    // noinspection JSUnresolvedFunction
    let wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 250,
            mobile: true,
            live: true
        }
    );
    // noinspection JSUnresolvedFunction
    wow.init();


    // 视差效果
    // noinspection JSUnresolvedFunction
    $(window).stellar({
        responsive: true,
        positionProperty: 'position'
    });


    // 轮播图
    // noinspection JSUnresolvedFunction
    $('#slider').sliderPro({
        width: '100%',
        height: 768,
        fade: true,
        arrows: true,
        waitForLayers: true,
        buttons: true,
        autoplay: true,
        autoScaleLayers: false,
        imageScaleMode: 'cover',
        slideAnimationDuration: 1500,
        breakpoints: {
            600: {
                height: 480
            }
        }
    });


}
