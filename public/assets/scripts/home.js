/* Home page GUI Script */
$.GUI().create('Home', function (gui) {

  var window_height, window_width, menu;

  if ( !Modernizr.touch ) {

      $('body').addClass('no-touch');
      no_touch_screen = true;
  }

  return {
    load: function () {
      gui.log('Load method called in home.js :', TDella);

      $(document).ready( function () {
        TDella.Browser.init();
    
        if (TDella.Browser.browser == 'Explorer' && TDella.Browser.version <= 9) {
          $('body').html(better_browser);   
        }

        window_width = $(window).width();
        window_height = $(window).height();

        burger_menu = $('nav[role="navigation"]').hasClass('navbar-burger') ? true : false;
    
        if ( !Modernizr.touch ) {

          $('body').addClass('no-touch');
          no_touch_screen = true;
        }
    
        TDella.initAnimationsCheck();

        if ( window_width < 992 || burger_menu ) {
          TDella.initRightMenu();   
        }

        if ( window_width < 992 ) {
          $('.over-area').each(function () {

            var click = $(this).attr("onClick"); 

            if ( click == '' ) {
              src = "rubik.showModal(this)";
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
          TDElla.checkResponsiveImage(); 
        }

        if ( $(window).width() > 992 && !burger_menu ) {
          $('nav[role="navigation"]').removeClass('navbar-burger');
          TDella.misc.navbar_menu_visible = 1;
          navbar_initialized = false;
        }
      });

      $(window).on('scroll',function () {
        TDella.checkScrollForTransparentNavbar();    
   
        if ( window_width > 992 ) {
          TDella.checkScrollForParallax();
        }
   
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

      $('.section-we-made-2 .scroller').mousemove(
        function ( event ) {
          if ( !Modernizr.touch ) {

            if ( event.clientX < 200 ) { 
              $(this).css("transform","translateX(0)");
            }

            if (event.clientX > 200 && event.clientX < $(window).width()-200 && event.clientX % 2 == 0 ) {
              pixels = -event.clientX * scroll;
              
              $(this).css("transform","translateX(" + pixels + "px)");
            }

            if(event.clientX > $(window).width()-200) { 
              pixels = -(2500 - $(window).width());
              $(this).css("transform","translateX(" + pixels + "px)");
            }

            $('.projects').css('overflow','hidden');
          }
        }
      );

      //TDella.init.home();
    },
    unload: function () {
      gui.log('tdella unload method called');
    }
  };
});

$.GUI().start('Home', {});

