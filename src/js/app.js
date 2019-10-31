$(document).ready(function(){
  AOS.init();
  //------------swiper---------//
      // var swiper = new Swiper('.swiper-container', {
      //     direction: 'vertical',
      //     pagination: {
      //         autoplay: {
      //             delay: 4000
      //         },
      //         el: '.swiper-pagination',
      //         clickable: true,
      //     },
      // });
      // swiper.autoplay.start();
  //------------swiper---------//


      //Mobile menu
      var main = function() {
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
      }

      $( document ).ready(main);

      $( window).resize(visibleMobileIcon);
      //Mobile menu

      //---------counterUp-----------//

      // $('.counts__content').counterUp({
      //     delay: 10,
      //     time: 3000
      // });
  });
