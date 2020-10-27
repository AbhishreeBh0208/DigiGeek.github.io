$(window).on("load", ()=> {
    $(".loader-container").fadeOut(1000);
    setTimeout(() => {
        $(".navbar").animate({"opacity": 1}, 500);
        $(".details .btn--orange").animate({"opacity": 1}, 200);
    }, 300)
})

//////////////////////////////////////////
//responsive navbar
$(".toggleNav").click(() => {
    $(".toggleNav").toggleClass("close");
    $(".navbar-responsive").toggleClass("open");
    $(".navbar-responsive__link").toggleClass("open__link");
})

/////////////////////////////////////
//scroll animations
const $windowHeight = $(window).height();

$(window).scroll(() => {
    if ($(".contact-details__head").offset().top - $(window).scrollTop() < $windowHeight / 1.5) {
        $(".contact-details__head").css({
            "transform": "translateX(-50%) translateY(0)",
            "opacity": 1
        });
    }
    
    if ($(".contact-details__text").offset().top - $(window).scrollTop() < $windowHeight / 1.5) {
        $(".contact-details__text").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }
    
    if ($(".contact-details__email").offset().top - $(window).scrollTop() < $windowHeight / 1.5) {
        $(".contact-details__email").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }

    if ($(".details .form__caption").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".details .form__caption").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }
})

