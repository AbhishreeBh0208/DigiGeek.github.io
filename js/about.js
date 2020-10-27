$(window).on("load", ()=> {
    $(".loader-container").fadeOut(1000);
    setTimeout(() => {
        $(".navbar").animate({"opacity": 1}, 500);
        $(".main-head .heading-primary").animate({"opacity": 1}, 400);
        $(".main-head .small-des").animate({"opacity": 1}, 700);
    }, 300)
})

//////////////////////////////////////////
//responsive navbar
$(".toggleNav").click(() => {
    $(".toggleNav").toggleClass("close");
    $(".navbar-responsive").toggleClass("open");
    $(".navbar-responsive__link").toggleClass("open__link");
})

///////////////////////////////////////////
//scroll animations
const $windowHeight = $(window).height();

$(window).scroll(() => {
    if ($(".intro-one .heading-primary").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".intro-one .heading-primary").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }

    if ($(".intro-one .small-des").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".intro-one .small-des").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }

    if ($(".pic-box--1").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".pic-box--1").css({
            "transform": "translateX(-45%) translateY(0)",
            "opacity": 1
        });
    }

    if ($(".about-pic--1").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".about-pic--1").css({
            "transform": "translateX(-50%) translateY(0)",
            "opacity": 1
        });
    }

    if ($(".pic-box--2").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".pic-box--2").css({
            "transform": "translateX(-40%) translateY(0)",
            "opacity": 1
        });
    }

    if ($(".about-pic--2").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".about-pic--2").css({
            "transform": "translateX(-50%) translateY(0)",
            "opacity": 1
        });
    }

    if ($(".company-des--1").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".company-des--1").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }

    if ($(".big-des--1").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".big-des--1").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }

    if ($(".company-des--2").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".company-des--2").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }

    if ($(".big-des--2").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".big-des--2").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }
})
    