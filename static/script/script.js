$(document).ready(function () {
    $("#about-me").hide(1000);
    $(".portfolio-button").click(function () {
        console.log("button pressed");
        $("#home").addClass("hide");
        $("#portfolio").removeClass("hide");
        
    });
    $(".about-button").click(function () {
        console.log("button pressed")
        $("#home").addClass("hide");
        $("#portfolio").hide(1000);
        $("#about-me").show(1000);
    });
});