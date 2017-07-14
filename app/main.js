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


  $(document).ready(function(){
    $("nav").sticky({topSpacing:0});
  });

  $("#accordion").accordion({ header: "div", collapsible: true, active: false });
  $(document).ready(function () {
    $('.accordion-toggle').on('click', function(event){
        // create accordion variables
        var accordion = $(this);
        var accordionContent = accordion.next('.accordion-content');


    });
});
