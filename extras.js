$(document).ready(function () {
    $(".about").hide();
    
    $("#openAbout").animate({ background: "none", color: "white" }, "slow", function () {
        $(this).removeClass("itemHighlight");
    })

    $("#closeAbout").click(function () {
        $(".about").animate({ top: "-102vh"}, "slow", function () {
            $(this).hide();
        });
    });
    $("#openAbout").click(function () {
        $(".about").show(function () {
            $(this).animate({ top: "0" });
        });
    });
    
    
    $("#map").load("kepler.html");
});