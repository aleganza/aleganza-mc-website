let banner = $("#banner");


$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    console.log(scroll);

    banner.css("top", scroll*0.8 + "px");
});