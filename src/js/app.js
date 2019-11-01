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

      var getVideoSize = function() {
        var video = $('.expand-presence__video'),
          videoSizeWidth = video.attr( "width" ),
          videoSizeHeight = video.attr( "height" ),
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
       }

      $( document ).ready(main, getVideoSize);
      $( window ).ready(getVideoSize);
      $( window).resize(visibleMobileIcon, getVideoSize);
      //Mobile menu

      //---------counterUp-----------//

      // $('.counts__content').counterUp({
      //     delay: 10,
      //     time: 3000
      // });
  });
