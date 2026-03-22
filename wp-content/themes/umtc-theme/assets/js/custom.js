// Use jQuery safely in noConflict mode
jQuery(document).ready(function($) {
    // StellarNav Initialization
    $('.stellarnav').stellarNav({
      theme: 'light',
      breakpoint: 960,
      position: 'right',
      phoneBtn: '18009997788',
      locationBtn: 'https://www.google.com/maps'
    });
  
    // Swiper Initialization
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      speed: 800,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
    $(document).ready(function() {
      checkDisplay();
    
    $(window).on('resize scroll', function() {
      checkDisplay();
    });
  });
  
  

    // Owl Carousel for Testimonials
    $('.sectors_scroll').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 1,
          nav: false
        },
        1000: {
          items: 4,
          nav: false,
          loop: true,
          margin: 20
        }
      }
    });
  
    // Owl Carousel for Clients
    $('.client_scroll').owlCarousel({
      loop: false,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 4,
          nav: false,
          loop: false,
          margin: 20
        }
      }
    });


     // Owl Carousel for latest umtc
     $('.latest_scroll').owlCarousel({
      loop: false,
      margin: 10,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false,
          loop: false,
          margin: 20
        }
      }
    });

  });

  

  $(document).ready(function() {

    $('.counter').each(function () {
$(this).prop('Counter',0).animate({
    Counter: $(this).text()
}, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
        $(this).text(Math.ceil(now));
    }
});
});

});  
 