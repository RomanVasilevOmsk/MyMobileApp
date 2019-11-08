

    //------------swiper---------//
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      breakpoints: {
        4000: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 4,
        },
        992: {
           slidesPerView: 3,
         }
      },
      spaceBetween: 80,
      centeredSlides:	true,
      loop: true,
    });

    swiper.autoplay.start();
    //------------swiper---------//


    //Mobile menu
    var mobileMenu = function() {
        var nav = $('.header__nav'),
        iconClose = $('.header__icon-close'),
        iconMenu = $('.header__icon-hamburger'),
        body = $('body');
        iconMenu.click(function() {
            nav.animate({left: '0'}, 100);
            iconClose.css({'display' : 'block'});
            iconMenu.css({'display' : 'none'});
            body.css({'overflow-y' : 'hidden'}).animate({left: '100%'}, 200);
        });


      /* Close menu */
      iconClose.click(function() {
          nav.animate({left: '-100%'}, 100);
          body.css({'overflow-y' : 'scroll'}).animate({left: '0px'}, 200);
          iconMenu.css({'display' : 'flex'});
          iconClose.css({'display' : 'none'});
      });

      };

    var visibleMobileIcon = function() {
      var nav = $('.header__nav'),
        iconClose = $('.header__icon-close'),
        iconMenu = $('.header__icon-hamburger');

      var navPosition = nav.css( "left" );
      if($(window).width() < 767.98) {
        if(navPosition === "0px"){
          iconClose.css({'display' : 'block'});
          iconMenu.css({'display' : 'none'});
        }
        else{
          iconClose.css({'display' : 'none'});
          iconMenu.css({'display' : 'flex'});
        }
      } else {
        iconClose.css({'display' : 'none'});
        iconMenu.css({'display' : 'none'});
      }
    };

    var getVideoSize = function() {
      var video = $('.expand-presence__video'),
        windowsWidth = $(window).width();
      switch( true ) {
        case (windowsWidth > 1200):
            video.attr({'width' : '599'});
            video.attr({'height' : '365'});
          break;
        case (windowsWidth < 1200 && windowsWidth > 992):
            video.attr({'width' : '464'});
            video.attr({'height' : '260'});
          break;
        case (windowsWidth < 992 && windowsWidth > 768):
            video.attr({'width' : '312'});
            video.attr({'height' : '175'});
          break;
          case (windowsWidth < 768 ):
            video.attr({'width' : '275'});
            video.attr({'height' : '154'});
          break;
      }
      };

$( document ).ready(function() {
    AOS.init();
    getVideoSize();
    mobileMenu();

  $("#arrowToTop, .header__nav-link--anchor, .footer__nav-link--anchor").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},1500);
  });
});



$(window).on('resize', function () {
  visibleMobileIcon();
  getVideoSize();
});