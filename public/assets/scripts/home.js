/* Home page GUI Script */
$.GUI().create('Home', function ( gui ) {

  if ( !Modernizr.touch ) {
      $('body').addClass('no-touch');
      no_touch_screen = true;
  }

  function initBoxSlider () {
    gui.$(document).ready(function() {
      var $box, opts_1, opts_2, opts_3;

      $box = gui.$('.box');

      opts_1 = {
        speed: 1200,
        autoScroll: true,
        timeout: 5000,
        effect: 'scrollHorz3d'
      };

      opts_2 = {
        speed: 1200,
        timeout: 1800,
        autoScroll: true,
        effect: 'scrollHorz3d'
      };

      opts_3 = {
        speed: 1200,
        timeout: 6200,
        autoScroll: true,
        effect: 'scrollHorz3d'
      };

      $('.box-1').boxSlider(opts_1);
      $('.box-2').boxSlider(opts_2);
      $('.box-3').boxSlider(opts_3);
    });
  }

  function initSharePlugin () {

    /* Navigation Share Icons */
    $('#twitterNav').sharrre({
      share: {
        twitter: true
      },
      enableHover: false,
      enableTracking: true,
      buttons: { twitter: {via: 'CreativeTim'}},
      click: function(api, options){
        api.simulateClick();
        api.openPopup('twitter');
      },
      template: '<i class="fa fa-twitter"></i>'
    });

   $('#facebookNav').sharrre({
      share: {
        facebook: true
      },
      enableHover: false,
      enableTracking: true,
      click: function (api, options) {
        api.simulateClick();
        api.openPopup('facebook');
      },
      template: '<i class="fa fa-facebook"></i>'
    });

   $('#googleplusNav').sharrre({
      share: {
        googlePlus: true
      },
      urlCurl: '',
      enableHover: false,
      enableTracking: true,
      click: function (api, options) {
        api.simulateClick();
        api.openPopup('googlePlus');
      },
      template: '<i class="fa fa-google-plus"></i>'
    });

    /* Share Buttons */

    $('#facebook').sharrre({
      share: {
        facebook: true
      },
      enableHover: false,
      enableTracking: true,
      click: function(api, options){
        api.simulateClick();
        api.openPopup('facebook');
      },
      template: '<button class="btn btn-info btn-social btn-neutral btn-block"><i class="fa fa-facebook-square"></i> Facebook &middot; {total}</button>'
    });

    $('#googleplus').sharrre({
      share: {
        googlePlus: true
      },
      urlCurl: '',
      enableHover: false,
      enableTracking: true,
      click: function (api, options) {
        api.simulateClick();
        api.openPopup('googlePlus');
      },
      template: '<button class="btn btn-info btn-social btn-neutral btn-block"><i class="fa fa-google-plus-square"></i> Google+ &middot; {total}</button>'
    });
  }

  return {
    load: function () {
      gui.log('Load method called in home.js :', TDella);

      initBoxSlider();
      initSharePlugin();

      TDella.onMouseMove();
    },
    unload: function () {
      gui.log('tdella unload method called');
    }
  };
});

$.GUI().start('Home', TDella.globals);
