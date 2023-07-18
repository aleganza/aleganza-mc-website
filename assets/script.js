let nav_main =  $("#nav-mods")
let nav_textures =  $("#nav-textures")

let main_mods = $("#main-mods")
let main_textures = $("#main-textures")

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