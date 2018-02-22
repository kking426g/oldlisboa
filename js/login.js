$(function(){
    $(".email").click(function(){
      urlbox("/home/mymessage", 1050, 800);
    });

    $(".logout").click(function(){
      location.href = "/login/logout";
    });

    $('.look_around').click(function(){
      urlbox("/home/mymessage", 1000, 800);
      $('.signup_ok').css('display', 'none');
    });

})
