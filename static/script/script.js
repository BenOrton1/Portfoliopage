$(document).ready(function () {
    $(".portfolio-button").click(function () {
        console.log("button pressed");
        $("#home").addClass("hide");
        $("#about-me").addClass("hide");
        $("#portfolio").removeClass("hide");
        
    });
    $(".about-button").click(function () {
        console.log("button pressed")
        $("#home").addClass("hide");
        $("#portfolio").addClass("hide");
        $("#about-me").removeClass("hide");
    });
    $(".home-button").click(function () {
        console.log("button pressed")
        $("#home").removeClass("hide");
        $("#portfolio").addClass("hide");
        $("#about-me").addClass("hide");
    });
});