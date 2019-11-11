

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

    var navFix = function() {
      var nav_container = $(".faq__sidebar-wrapper"),
          nav = $(".faq__sidebar"),
          sections = $(".faq__section"),
          navigation_links = $(".faq__sidebar-item-link");


      if ($(this).width() > 900) {

      var nav_width = nav.width(),
          top_spacing = 0,
          waypoint_offset = 30;

      $(nav_container).waypoint({
        handler: function(direction) {
          if (direction == 'down') {
            nav_container.css({ 'height':nav.outerHeight() });
            nav.stop().addClass("faq__sticky").css("top",-nav.outerHeight()).animate({"top":top_spacing});
            nav.css('width', nav_width +'px');
          } else {
            nav_container.css({ 'height':'auto' });
            nav.stop().removeClass("faq__sticky").css("top",nav.outerHeight()+waypoint_offset).animate({"top":""});
          }
        },
        offset: function() {
          return -nav.outerHeight()-waypoint_offset;
        }
      });

      sections.waypoint({
        handler: function(direction) {

          var active_section = $(this);
          var active_link = $('.faq__sidebar a[href="#' + active_section[0].element.id + '"]');
          navigation_links.removeClass("faq__sidebar-item-link--selected");
          active_link.addClass("faq__sidebar-item-link--selected");
        },
        offset: '25%'
      })

      } else if ($(this).width() < 900) {
        nav.removeClass('faq__sticky');
      }

      navigation_links.click( function(event) {
        $.scrollTo(
          $(this).attr("href"),
          {
            duration: 200,
            offset: { 'left':0, 'top':-0.15*$(window).height() }
          }
        );
      });
    };


$( document ).ready(function() {
    AOS.init();
    mobileMenu();
    navFix();
  $("#arrowToTop").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},1500);
  });
});



$(window).on('resize', function () {
  visibleMobileIcon();
  navFix();
});