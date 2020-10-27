$(window).on("load", ()=> {
    $(".loader-container").fadeOut(1000);
    $(".institutional-plan__details").fadeOut(200);
    $(".individual-plan__details").fadeOut(200);
    $(".signIn-hero .btn--orange").animate({"opacity": 1}, 200);
    $(".signUp-hero .btn--orange").animate({"opacity": 1}, 200);

    setTimeout(() => {
        $(".navbar").animate({"opacity": 1}, 500);
        $(".hero__text .heading-secondary").animate({"opacity": 1, "transform": "translateX(0)"}, 400);
        $(".hero__text .head-sub").animate({"opacity": 1}, 400);
        $(".hero__text .btn--orange").animate({"opacity": 1}, 400);
        $(".signIn-hero").animate({"opacity": 1}, 200);
    }, 300)
})

//chat content
$("#r1").on("click", () => {
    $("#r1").addClass("active");
    $("#r2").removeClass("active");
    $("#r3").removeClass("active");
    $("#review2").css("opacity", 0);
    $("#review3").css("opacity", 0);
    $("#review1").css("opacity", 1);
})

$("#r2").on("click", () => {
    $("#r2").addClass("active");
    $("#review1").css("opacity", 0);
    $("#review3").css("opacity", 0);
    $("#review2").css("opacity", 1);
    $("#r1").removeClass("active");
    $("#r3").removeClass("active");
})

$("#r3").on("click", () => {
    $("#r3").addClass("active");
    $("#r2").removeClass("active");
    $("#r1").removeClass("active");
    $("#review1").css("opacity", 0);
    $("#review2").css("opacity", 0);
    $("#review3").css("opacity", 1);
})

//////////////////////////////////////////
//responsive navbar
$(".toggleNav").click(() => {
    $(".toggleNav").toggleClass("close");
    $(".navbar-responsive").toggleClass("open");
    $(".navbar-responsive__link").toggleClass("open__link");
})

///////////////////////////////////////////////
//scroll animations
const $windowHeight = $(window).height();


$(window).scroll(() => {
    if ($(".highlight--1").offset().top - $(window).scrollTop() < $windowHeight / 1.5) {
        $(".highlight--1 .highlight__img").css({
            "transform": "translateY(0)",
             "opacity": 1
        });
        $(".highlight--1 .heading-secondary").css({
            "transform": "translateX(0)",
             "opacity": 1
        });
        $(".highlight--1 .head-sub").css({
             "opacity": 1
        });
    }

    if ($(".highlight--2").offset().top - $(window).scrollTop() < $windowHeight / 1.5) {
        $(".highlight--2 .highlight__img").css({
            "transform": "translateY(0)",
             "opacity": 1
        });
        $(".highlight--2 .heading-secondary").css({
            "transform": "translateX(0)",
             "opacity": 1
        });
        $(".highlight--2 .head-sub").css({
             "opacity": 1
        });
    }

    if ($(".highlight--3").offset().top - $(window).scrollTop() < $windowHeight / 1.5) {
        $(".highlight--3 .highlight__img").css({
            "transform": "translateY(0)",
             "opacity": 1
        });
        $(".highlight--3 .heading-secondary").css({
            "transform": "translateX(0)",
             "opacity": 1
        });
        $(".highlight--3 .head-sub").css({
             "opacity": 1
        });
    }

    if ($(".heading-4").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".heading-4").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }

    if ($(".heading-tertiary").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".heading-tertiary").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }

    if ($(".heading-primary").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".heading-primary").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }

    if ($(".world__subhead").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".world__subhead").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }

    if ($(".world__downloads").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".world__downloads").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }

    if ($(".world__customers").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".world__customers").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }

    if ($(".world__countries").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".world__countries").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }

    if ($(".world__children").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".world__children").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }

    if ($(".reviews").offset().top - $(window).scrollTop() < $windowHeight / 1.2) {
        $(".reviews").css({
            "transform": "translateY(0)",
            "opacity": 1
        });
    }
})
