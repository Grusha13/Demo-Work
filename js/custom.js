$(document).ready(function(){
      $(window).scroll(function(){
      var sticky = $('header'),
          scroll = $(window).scrollTop();
    
      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });
      $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);
});



$(".mobile-bar .open").click(function(){
  $(".menu-nav").slideDown();
  $(this).css("display","none");
  $(".mobile-bar .close-bar").css("display","block");
});

$(".mobile-bar .close-bar").click(function(){
  $(".menu-nav").slideUp();
  $(this).css("display","none");
  $(".mobile-bar .open").css("display","block");
});


});

