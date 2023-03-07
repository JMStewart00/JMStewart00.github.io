// Scroll Reveal instructions

window.sr = ScrollReveal();
sr.reveal('.aboutTitle', {duration: 2000}, 500);
sr.reveal('.aboutRuler', {duration: 2000}, 500);
sr.reveal('.introTitle', {duration: 2000}, 500);
sr.reveal('.overview', {duration: 2000}, 500);
sr.reveal('.portfolio-box', {duration: 2000}, 500);

// Smooth Scroll on href clicks

$(document).ready(function(){
    $('a[href^="#1"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
});

// Calling sticky.js and for the sticky navbar.

  $(document).ready(function(){
    $("nav").sticky({topSpacing:0});
  });

  $("#accordion").accordion({ collapsible: true, active: false });
  $(document).ready(function () {
    $('.accordion-toggle').on('click', function(event){
        // create accordion variables
        var accordion = $(this);
        var accordionContent = accordion.next('.accordion-content');

    });
});

// popover function

$(function () {
  $('[data-toggle="popover"]').popover( { trigger: 'hover' } )
});

// button opening new windows for projects


    $(function () {
        $(".btn-outline-danger").on('click', function(e) {
          var open = "http://" + this.value;
          window.open(open);

        })
    })

