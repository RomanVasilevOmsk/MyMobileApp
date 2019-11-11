

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



      //---------counterUp-----------//

      // $('.counts__content').counterUp({
      //     delay: 10,
      //     time: 3000
      // });
  // });


$( document ).ready(function() {
    AOS.init();
    mobileMenu();
  $("#arrowToTop").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},1500);
  });

  $('.about-main__gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 230,
      opener: function(element) {
        return element.find('img');
      }
    }
  });
});



$(window).on('resize', function () {
  visibleMobileIcon();
});