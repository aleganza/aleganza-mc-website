let nav_main =  $("#nav-mods")
let nav_textures =  $("#nav-textures")

let main_mods = $("#main-mods")
let main_textures = $("#main-textures")

// when a nav element is clicked, its corrispondent main section is shown and the nav element set to active
nav_textures.click(() => { 
    nav_textures.addClass("active")
    nav_main.removeClass("active")

    main_mods.css("display", "none")
    main_textures.css("display", "block")
});

nav_main.click(() => { 
    nav_main.addClass("active")
    nav_textures.removeClass("active")

    main_textures.css("display", "none")
    main_mods.css("display", "block")
});

// fix that when going from mobile to other screens, no main sections were shown
$(window).resize(() => {
    if($(window).width() <= 850) {
        main_textures.css("display", "none")
        main_mods.css("display", "none")
    } else {
        if(nav_main.hasClass("active")) {
            main_mods.css("display", "block")
        } else if(nav_textures.hasClass("active")) {
            main_textures.css("display", "block")
        }
    }
})