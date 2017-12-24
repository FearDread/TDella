/* TDella Front End Object */
/* Includes Browser detection Object */
/* TODO:: Make TDella Global a self executing function
TDella = (function () {

})(TDella);
*/

TDella = (function () {

  var search = 0, 
      test = true,
      ftop = false,
      opacity = 0,
      elements = 0,
      window_height,
      window_width,
      transition = 0,
      notouch = false,
      transparent = true, 
      navbar_init = false,
      timestamp = Date.now();

  function determineScroll (s) {
    return s = ( 2500 - $( window ).width() ) / $( window ).width();
  }

  function debounce (func, wait, immediate) {

    var timeout;
    return function() {
      var context = this, args = arguments;

      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  };

  function isElementInViewport (elem) {
    var $elem = $(elem),
        scrollElem = (( navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html' ),
        elemTop = Math.round( $elem.offset().top ),
        elemBottom = elemTop + $elem.height(),
        viewportTop = $(scrollElem).scrollTop(),
        viewportBottom = viewportTop + $(window).height();

    return (( elemTop < viewportBottom ) && ( elemBottom > viewportTop ));
  }

  return {
    opts: {},
    debounce: debounce,
    init: {
      home: function () {
        var $box,
            options_1,
            options_2,
            options_3;

        $(document).ready(function() {
          $box = $('.box');

          options_1 = {
            speed: 1200
              , autoScroll: true
              , timeout: 5000
              , effect: 'scrollHorz3d'
            };

          options_2 = {
            speed: 1200
            , timeout: 1800
            , autoScroll: true
            , effect: 'scrollHorz3d'
          };

          options_3 = {
            speed: 1200
            , timeout: 6200
            , autoScroll: true
            , effect: 'scrollHorz3d'
          };

          $('.box-1').boxSlider(options_1);
          $('.box-2').boxSlider(options_2);
          $('.box-3').boxSlider(options_3);

        });
      },
      animations: function () { 
        $('[class*="add-animation"]').each(function(){
           var offset_diff = 30;

           if( $(this).hasClass('title') ) {
               offset_diff = 110;
           }
           
           var waypoints = $(this).waypoint(function( direction ) {
             if ( direction == 'down' ) {
               $(this.element).addClass('animate');    
             } else {
               $(this.element).removeClass('animate');
             }
           }, { offset: window_height - offset_diff });
        });
      },
      menu: function () {
         if ( !navbar_init ) {
            $nav = $('nav[role="navigation"]');
            $nav.addClass('navbar-burger');
             
            $navbar = $nav.find('.navbar-collapse').first().clone(true);
              
            ul_content = '';
             
            $navbar.children('ul').each(function(){
                content_buff = $(this).html();
                ul_content = ul_content + content_buff;   
            });
             
            ul_content = '<ul class="nav navbar-nav">' + ul_content + '</ul>';
            $navbar.html(ul_content);
             
            $('body').append($navbar);
                            
            background_image = $navbar.data('nav-image');
            if(background_image != undefined){
                $navbar.css('background',"url('" + background_image + "')")
                       .removeAttr('data-nav-image')
                       .css('background-size',"cover")
                       .addClass('has-image');                
            }
             
            $toggle = $('.navbar-toggle');
             
            $navbar.find('a').removeClass('btn btn-round btn-default');
            $navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
            $navbar.find('button').addClass('btn-simple btn-block');

            $link = $navbar.find('a');
            
            $link.click(function(e){
                var scroll_target = $(this).data('id');
                var scroll_trigger = $(this).data('scroll');
                
                if(scroll_trigger == true && scroll_target !== undefined){
                    e.preventDefault();

                    $('html, body').animate({
                         scrollTop: $(scroll_target).offset().top - 50
                    }, 1000);
                }
                
             });

            
            $toggle.click(function (){    

                if(rubik.misc.navbar_menu_visible == 1) {                    
                    $('html').removeClass('nav-open'); 
                    TDella.menu.visible = 0;

                    $('#bodyClick').remove();
                     setTimeout(function(){
                        $toggle.removeClass('toggled');
                     }, 550);
                
                } else {
                    setTimeout(function(){
                        $toggle.addClass('toggled');
                    }, 580);
                    
                    div = '<div id="bodyClick"></div>';
                    $(div).appendTo("body").click(function() {
                        $('html').removeClass('nav-open');
                        rubik.misc.navbar_menu_visible = 0;
                        $('#bodyClick').remove();
                         setTimeout(function(){
                            $toggle.removeClass('toggled');
                         }, 550);
                    });
                   
                    $('html').addClass('nav-open');
                    rubik.misc.navbar_menu_visible = 1;
                    
                }
            });
            navbar_initialized = true;
        }
      
      },
      goole: function () {}
    },
    showModal: function (button) {
      var id, scrollTop, distanceTop, modal;
      var $project, projectTop, projectLeft, projectHeight, projectWidth;

      id = $(button).data('target');
      $project = $(button).closest('.project');
      
      scrollTop = $(window).scrollTop();
      distanceTop = $project.offset().top;

      projectTop = distanceTop - scrollTop; 
      projectLeft = $project.offset().left;
      projectHeight = $project.innerHeight();
      projectWidth = $project.innerWidth();

      modal = $('#' + id);

      $(modal).css({
        'top': projectTop,
        'left': projectLeft, 
        'width': projectWidth,
        'height': projectHeight,
        'z-index': '1032'
      }).addClass('has-background');
      
      // $(modal).addClass('has-background');
      
      setTimeout(function () {
         $(modal).addClass('open');
      }, 30);

      setTimeout(function () {
         $('body').addClass('noscroll');
         $(modal).addClass('scroll');
      }, 1000);
  
      $('.icon-close').click(function(){
        $project_content = $(this).closest('.project-content');
        $project_content.removeClass('open scroll');
        
        $('body').removeClass("noscroll");
        //$('a').removeClass('no-opacity');

          setTimeout(function(){
              $project_content.removeClass('has-background');

              setTimeout(function(){    
                  $project_content.removeAttr('style');     
              }, 450); 
          },500);
      });
    },
    checks: {
      responsive: function () {
        responsive_background = $('.section-header > div .responsive-background');
        
        if(responsive_background.length == 0){
            $('.section-header > div > img, .section-header video').each(function(){
                var $image = $(this);
                var src = $image.attr("src");
                
                if($image.attr("responsive-src")){
                    src = $image.attr("responsive-src");    
                }
                
                div = '<div class="responsive-background" style="background-image:url(' + src + ')"/>';
                $image.after(div);
                $image.addClass('hidden-xs hidden-sm'); 
            });   
        }
      },
      transparent: debounce ( function () {
        if($(document).scrollTop() > 560 ) {
              if(transparent) {
                  transparent = false;
                  $('nav[role="navigation"]').removeClass('navbar-transparent');
              }
          } else {
              if( !transparent ) {
                  transparent = true;
                  $('nav[role="navigation"]').addClass('navbar-transparent');
              }
          }
      }, 17),
      parallax: debounce (function () {

        $('.content-with-opacity').each(function() {
          var $content = $(this);
             
          if ( isElementInViewport ( $content )) {
            var window_top = $(window).scrollTop();

            opacity = 1 - (window_top / 230);
                  
            if ( opacityVal < 0 ) {

              opacityVal = 0;
              return;

             } else {

               $content.css('opacity',opacityVal);    
             }
        	 }
        });
      }, 6, false),
      transitions: debounce ( function () {
         $('.content-with-opacity').each(function() {
             var $content = $(this);
             
             if(isElementInViewport($content)){          
                  var window_top = $(window).scrollTop();
            	  opacityVal = 1 - (window_top / 230);
                  
                  if(opacityVal < 0){
                      opacityVal = 0;
                      return;
                  } else {
                    $content.css('opacity',opacityVal);    
                  }
                      
        	    }            
         });
      }, 6, false)
    },
    Browser: {
      init: function () {
        console.log('Browser object :: ', this);
        this.browser = this.search(this.data) || "Other";
        this.version = this.getVersion(navigator.userAgent) || this.getVersion(navigator.appVersion) || "Unknown";
      },
      search: function (data) {
        var string, i;

        for ( i = 0; i < data.length; i++ ) {

            string = data[i].string;
            this.query = data[i].subString;

            if ( string.indexOf( data[i].subString ) !== -1 ) {
                return data[i].identity;
            }
        }
      },
      getVersion: function (string) {
        var index, rver;

        index = string.indexOf(this.versionString);
        if (index === -1) {
            return;
        }

        rv = string.indexOf("rv:");

        if (this.versionString === "Trident" && rv !== -1) {

            return parseFloat(string.substring(rv + 3));

        } else {

            return parseFloat(string.substring(index + this.versionString.length + 1));

        }
      },
      data: [
        {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
        {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
        {string: navigator.userAgent, subString: "Safari", identity: "Safari"},
        {string: navigator.userAgent, subString: "Opera", identity: "Opera"}
      ]
    }
  }
})();
