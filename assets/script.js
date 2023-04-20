async function fetchAPI() {
    const url = "https://api.modrinth.com/v2/project/plenty-of-armors";

    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
}

// banner

let banner = $("#banner");

$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    console.log(scroll);

    banner.css("top", scroll*0.8 + "px");
});

// modal image gallery

let open = $("#open-modal");

open.click(function () {
    open.parent().find(".modal-gallery").css("display", "block");
});

let close = $("#close-modal");

close.click(function () {
    close.parent().css("display", "none");
});