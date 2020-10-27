$(window).on("load", ()=> {
    $(".loader-container").fadeOut(1000);
    $(".institutional-plan__details").fadeOut(200);
    $(".individual-plan__details").fadeOut(200);
    setTimeout(() => {
        $(".navbar").animate({"opacity": 1}, 500);
        $(".intro-text__main-head").animate({"opacity": 1}, 500);
        $(".intro-text__sub-head").animate({"opacity": 1}, 500);
    }, 300)
})

//////////////////////////////////////////
//responsive navbar
$(".toggleNav").click(() => {
    $(".toggleNav").toggleClass("close");
    $(".navbar-responsive").toggleClass("open");
    $(".navbar-responsive__link").toggleClass("open__link");
})

//////////////////////////////////////
//buy animations
$(".institutional-plan__icon").mouseenter(() => {
    $(".institutional-plan__img").css("opacity", "1");
})

$(".institutional-plan__icon").click(() => {
    $(".institutional-plan__icon").css({
        "opacity": "0",
        "visibility": "hidden"
    });
    $(".institutional-plan__caption").css("opacity", "0");
    $(".institutional-plan__details").fadeIn(400);
    $(".institutional-plan__details .btn--orange").animate({"opacity": 1}, 200);
    $(".institutional-plan__bgimg").css("opacity", "1");
})

$(".institutional-plan__icon").mouseleave(() => {
    $(".institutional-plan__img").css("opacity", "0");
})

$(".individual-plan__icon").mouseenter(() => {
    $(".individual-plan__img").css("opacity", "1");
})

$(".individual-plan__icon").click(() => {
    $(".individual-plan__icon").css({
        "opacity": "0",
        "visibility": "hidden"
    });
    $(".individual-plan__caption").css("opacity", "0");
    $(".individual-plan__details").fadeIn(400);
    $(".individual-plan__details .btn--orange").animate({"opacity": 1}, 200);
    $(".individual-plan__bgimg").css("opacity", "1");
})

$(".individual-plan__icon").mouseleave(() => {
    $(".individual-plan__img").css("opacity", "0");
})