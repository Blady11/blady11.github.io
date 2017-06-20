$(document).ready(function(){
    'use strict';
    // Select all links with hashes
$('.nav-item, #scroll-to-top, .navbar-brand')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});

$(document).ready(function(){

        $('.counter-num').each(function () {
            $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
});

$(document).ready(function(){
    
    'use strict';
    
    $(window).scroll(function () {
       

        if ($(window).scrollTop() < 80 && $(window ).width() > 768) {
            $('.navbar').css({
                'background-color': 'transparent'
            });
            
        } else {
            $('.navbar').css({
                'opacity': '1'
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(59, 59, 59, 0.7)',
                'border-color': '#444444'
            });
            
            $('.navbar-brand img').css({
               'height': '35px',
               'padding-top': '0'
            });
        }
        
    });
    
});

$(document).ready(function(){
    
    'use strict';
    
    $('.nav-item').click(function () {
       

        if ($(window).width() < 768) {
            $('#mogo-navbar-collapse-1').removeClass('in');
        } 
    
    });
});

$(document).ready(function(){
    
     $('.service2-item div >img:last-child').click(function(){
        
        $(this).parent().parent().children('.scrollbar').toggleClass('active');
        
        
         if ($(this).parent().parent().children('.scrollbar').hasClass('active')){
             $(this).css({
             'transform':'rotate(0)'
         })
         }
         else {
             $(this).css({
             'transform':'rotate(180deg)'
         })
         }
        
    });
});
