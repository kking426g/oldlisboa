$(function () {
    //真人娛樂 選項
    $("li a").on('click', function(){
        localStorage.setItem("live_option", $(this).attr('data-img'));
    })
})
