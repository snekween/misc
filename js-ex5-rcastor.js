window.onload = function () {
    console.log("heii");
}



$(".number").focus(function() {
    console.log("focused");
    // $(this).after("<div id=\"calc\">test<div>");
    $(this).after("<div id=\"calc\"><input type=\"text\" id=\"entry\"><button id=\"extract\" ()\">extract</button></div>");
    $("#form").on("click", "#extract", function () {
        let entry = $("#form > #calc > #entry").val();
        console.log(entry);
    });
});

// $("#form > input").focus(function () {
//     $("form > #calc").remove();
// });

/* $(".number").blur(function () {
    $("#calc").remove();
});
 */
$("#form").on("click", "#calc", function () {
    console.log("dzaii");
});