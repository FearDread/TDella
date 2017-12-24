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
    misc:{
      navbar_menu_visible: 0
    },
    initAnimationsCheck: function () {},
    initRightMenu: function () {},
    checkResponsiveImage: function () {

      responsive_background = $('.section-header > div .responsive-background');
        
      if (responsive_background.length == 0) {
           $('.section-header > div > img, .section-header video').each(function(){

             var $image = $(this);
             var src = $image.attr("src");
                
             if ( $image.attr("responsive-src") ) {
               src = $image.attr("responsive-src");    
             }
                
                div = '<div class="responsive-background" style="background-image:url(' + src + ')"/>';
                $image.after(div);
                $image.addClass('hidden-xs hidden-sm'); 
            });
        }
    },
    checkScrollForTransparentNavbar: debounce(function() {	
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
    
    checkScrollForParallax: debounce(function() {	
        	no_of_elements = 0;
        	$('.parallax').each(function() {
        	    var $elem = $(this);
        	    
        	    if(isElementInViewport($elem)){
                  var parent_top = $elem.offset().top;          
                  var window_bottom = $(window).scrollTop();
                  var $image = $elem.children('img');
                              	  
            	  oVal = ((window_bottom - parent_top) / 3);
                  $image.css('transform','translate3d(0px, ' + oVal + 'px, 0px)');    
        	    }
            });
    		
    }, 6),
    
    checkScrollForContentTransitions: debounce(function() {
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
    }, 6),
    
    showModal: function(button){
        var id = $(button).data('target');
        var $project = $(button).closest('.project');
        
        var scrollTop = $(window).scrollTop();
        var distanceTop = $project.offset().top;

        var projectTop = distanceTop - scrollTop; 
        var projectLeft = $project.offset().left;
        var projectHeight = $project.innerHeight();
        var projectWidth = $project.innerWidth();

        modal = $('#' + id);

        $(modal).css({
         'top'  :    projectTop,
         'left' :    projectLeft, 
         'width' :   projectWidth,
         'height' :  projectHeight,
         'z-index'  : '1032'
        });
        
        $(modal).addClass('has-background');
        
        setTimeout(function(){
           $(modal).addClass('open');
        },30);

        setTimeout(function(){
           $('body').addClass('noscroll');
           $(modal).addClass('scroll');
        },1000);
    
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
    
    initGoogleMaps: function(){
        var myLatlng = new google.maps.LatLng(44.433530, 26.093928);
        
        var mapOptions = {
          zoom: 16,
          center: myLatlng,
          scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
          disableDefaultUI: true,
          styles: [{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"},{"gamma":"1.82"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"gamma":"1.96"},{"lightness":"-9"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"lightness":"25"},{"gamma":"1.00"},{"saturation":"-100"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#ffaa00"},{"saturation":"-43"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"},{"hue":"#ffaa00"},{"saturation":"-70"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"on"},{"saturation":"-100"},{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"saturation":"-100"},{"lightness":"40"},{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"gamma":"0.80"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"off"}]}]
        }
        var map = new google.maps.Map(document.getElementById("contactUsMap"), mapOptions);
        
        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });
        
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },
    Browser: {
      init: function () {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
      },
      searchString: function (data) {

        for (var i = 0; i < data.length; i++) {

          var dataString = data[i].string;
          this.versionSearchString = data[i].subString;

          if (dataString.indexOf(data[i].subString) !== -1) {
            return data[i].identity;
          }
        }
      },
      searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);

        if (index === -1) return;

        var rv = dataString.indexOf("rv:");

        if (this.versionSearchString === "Trident" && rv !== -1) {
            return parseFloat(dataString.substring(rv + 3));
        } else {
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        }
      },
      dataBrowser: [
        {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
        {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
        {string: navigator.userAgent, subString: "Safari", identity: "Safari"},
        {string: navigator.userAgent, subString: "Opera", identity: "Opera"}
      ],
      better_browser: '<div class="container"><div class="better-browser row"><div class="col-md-2"></div><div class="col-md-8"><h3>We are sorry but it looks like your Browser doesn\'t support our website Features. In order to get the full experience please download a new version of your favourite browser.</h3></div><div class="col-md-2"></div><br><div class="col-md-4"><a href="https://www.mozilla.org/ro/firefox/new/" class="btn btn-warning">Mozilla</a><br></div><div class="col-md-4"><a href="https://www.google.com/chrome/browser/desktop/index.html" class="btn ">Chrome</a><br></div><div class="col-md-4"><a href="http://windows.microsoft.com/en-us/internet-explorer/ie-11-worldwide-languages" class="btn">Internet Explorer</a><br></div><br><br><h4>Thank you!</h4></div></div>'
    }

  }

})();
