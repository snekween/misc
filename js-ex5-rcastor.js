window.onload = function () {
    console.log("heii");
}

$(".number").focus(function() {
    console.log("focused");
    $(this).after("<div id=\"calc\">test<div>")
});

$("#form > input").focus(function () {
    $("form > #calc").remove();
});

/* $(".number").blur(function () {
    $("#calc").remove();
});
 */
$("#form").on("click", "#calc", function () {
    console.log("dzaii");
});