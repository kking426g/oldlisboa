 /*
  * 延用jAlert CSS
  * FAKE燈箱
  * urlbox("http://www.w3schools.com")
  */
var urlbox = function (url,w , h) {
    if ($("#topic .mask,.jAlert")) { $("#topic .mask,.jAlert").remove() };
    $("<div class='mask'>").appendTo("#topic");
    $("<div class='jAlert lbox'>").append(
        $("<iframe>", {
            src : url
        })
    )

    .append(
        $("<div class='title'><p>"+js_lang.website_message+"</p><div class='xx'>", { src : url }).click(function () { $("#topic .mask,.jAlert").remove();})
        ).appendTo("body");

    (typeof w == "number") ? $(".jAlert").width(w) :"";
    (typeof h == "number") ? $(".jAlert").height(h) :"";
}
