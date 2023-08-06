let nav_main =  $("#nav-a")
let nav_b =  $("#nav-b")

let main_a = $("#main-a")
let main_b = $("#main-b")

// when a nav element is clicked, its corrispondent main section is shown and the nav element set to active
nav_b.click(() => { 
    nav_b.addClass("active")
    nav_main.removeClass("active")

    main_a.css("display", "none")
    main_b.css("display", "block")
});

nav_main.click(() => { 
    nav_main.addClass("active")
    nav_b.removeClass("active")

    main_b.css("display", "none")
    main_a.css("display", "block")
});

// fix that when going from mobile to other screens, no main sections were shown
$(window).resize(() => {
    if($(window).width() <= 850) {
        main_b.css("display", "none")
        main_a.css("display", "none")
    } else {
        if(nav_main.hasClass("active")) {
            main_a.css("display", "block")
        } else if(nav_b.hasClass("active")) {
            main_b.css("display", "block")
        }
    }
})