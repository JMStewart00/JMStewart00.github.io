window.sr = ScrollReveal();
sr.reveal('.aboutTitle', {duration: 2000}, 500);
sr.reveal('.aboutRuler', {duration: 2000}, 500);
sr.reveal('.introTitle', {duration: 2000}, 500);
sr.reveal('.overview', {duration: 2000}, 500);



$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
});

// $(document).ready(function() {
//         var aboveHeight = $('#maincontent').outerHeight();
//         $(window).scroll(function(){
//                 if ($(window).scrollTop() > (aboveHeight - 55)){
//                 $('nav').addClass('fixed').css('top','0').next()
 
//                 } else {
//                 $('nav').removeClass('fixed').next()
//                 .css('padding-top','0');
//                 }
//         });

// });

  $(document).ready(function(){
    $("nav").sticky({topSpacing:0});
  });

