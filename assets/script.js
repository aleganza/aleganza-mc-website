// api

async function fetchAPI() {
    /* const url = "https://minecraft.curseforge.com/api/game/versions"; */
    const url = "https://my-burger-api.herokuapp.com/burgers";

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin:": "*",
            "X-Api-Token": "0a330a6c-11ec-4ea3-898f-8de95fa63080"
        }
    }).catch(err => {
        console.log(err.response.data);
    });
    const data = await response.json();

    console.log(data);
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