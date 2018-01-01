/* Init module needed on most pages */
$.GUI().create('Init', function ( gui ) {

  return {
    load: function () {
      gui.log('tinit load method called :', gui);

      gui.$(document).ready( function () {

        var window_width = $(window).width();
        var window_height = $(window).height();

        TDella.Browser.init();

        if (TDella.Browser.browser == 'Explorer' && TDella.Browser.version <= 9) {
          $('body').html(better_browser);   
        }


        burger_menu = $('nav[role="navigation"]').hasClass('navbar-burger') ? true : false;

        if ( !Modernizr.touch ) {

          $('body').addClass('no-touch');
          var no_touch_screen = true;
        }

        TDella.initAnimationsCheck();

        if ( window_width < 992 || burger_menu ) {
          TDella.initRightMenu();   
        }

        if ( window_width < 992 ) {
          $('.over-area').each(function () {
            var click = $(this).attr("onClick"); 
            if ( click == '' ) {
              src = "TDella.showModal(this)";
              $(this).attr("onClick", src);
            }
          });
        
          TDella.checkResponsiveImage();
        }

        setTimeout(function () {
          $('.loading').css('opacity','0');

          setTimeout(function(){
            $('.loading').addClass('hide');
          }, 500);
        }, 3000);

        if ( $('#contactUsMap').length != 0 ) {
          TDella.initGoogleMaps();   
        }

        if ( $('.content-with-opacity').length != 0 ) {
          TDella.opacity = 1;
        }

      });

      $(window).load(function () {
        TDella.initAnimationsCheck();
      });  

      $(window).resize(function () {

        if ( $(window).width() < 992 ) {
          TDella.initRightMenu();  
          TDella.checkResponsiveImage(); 
        }

        if ( $(window).width() > 992 && !burger_menu ) {
          $('nav[role="navigation"]').removeClass('navbar-burger');

          TDella.navbar_menu_visible = 1;
          navbar_initialized = false;
        }
      });

      $(window).on('scroll', function () {
        TDella.checkScrollForTransparentNavbar();
        TDella.checkScrollForParallax();

        if ( TDella.opacity == 1 ) {
          TDella.checkScrollForContentTransitions();
        }
      });

      $('a[data-scroll="true"]').click(function(e){         
        var scroll_target = $(this).data('id');
        var scroll_trigger = $(this).data('scroll');

        if ( scroll_trigger == true && scroll_target !== undefined ) {
          e.preventDefault();
        
          $('html, body').animate({
            scrollTop: $(scroll_target).offset().top - 50
          }, 1000);
        }
      });
    },
    unload: function () {
      gui.log('tinit unload method called');
    }
  }

});

$.GUI().start('Init', TDella.globals);
