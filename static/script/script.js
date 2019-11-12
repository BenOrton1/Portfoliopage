$(document).ready(function () {
    $("#portfolio").hide(1000);
    $("#about-me").hide(1000);
    $(".portfolio-button").click(function () {
        console.log("button pressed")
        $("#home").hide(1000);
        $("#about-me").hide(1000);
        $("#portfolio").show(1000);
    });
    $(".about-button").click(function () {
        console.log("button pressed")
        $("#home").hide(1000);
        $("#portfolio").hide(1000);
        $("#about-me").show(1000);
    });
});