/* Home page GUI Script */
// TODO: Add php script support via backend code, to call sharrre plugin 
$.GUI().create('Home', function (gui) {

  if ( !Modernizr.touch ) {
      $('body').addClass('no-touch');
      no_touch_screen = true;
  }

  function initBoxSlider () {
    $(document).ready(function() {

      var $box = $('.box');

        var options_1 = {
            speed: 1200
          , autoScroll: true
          , timeout: 5000
          , effect: 'scrollHorz3d'
        };

        var options_2 = {
            speed: 1200
          , timeout: 1800
          , autoScroll: true
          , effect: 'scrollHorz3d'
        };

        var options_3 = {
            speed: 1200
          , timeout: 6200
          , autoScroll: true
          , effect: 'scrollHorz3d'
        };

      $('.box-1').boxSlider(options_1);
      $('.box-2').boxSlider(options_2);
      $('.box-3').boxSlider(options_3);
    });
  }

  function initSharePlugin () {
    $('#twitter').sharrre({
      share: {
        twitter: true
      },
      enableHover: false,
      enableTracking: true,
      buttons: { twitter: { via: 'T`Della' }},
      click: function (api, options) {
        api.simulateClick();
        api.openPopup('twitter');
      },
      template: '<button class="btn btn-info btn-social btn-neutral btn-block"><i class="fa fa-twitter"></i> Twitter &middot; {total}</button>'
    });

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
      enableHover: false,
      enableTracking: true,
      buttons: { 
        googlePlus: { url: '' }
      },
      click: function (api, options) {
        api.simulateClick();
        api.openPopup('googlePlus');
      },
      template: '<i class="fa fa-google-plus"></i>'
    });



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
      enableHover: false,
      enableTracking: true,
      buttons: { 
        googlePlus: { url: '' }
      },
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
      // initSharePlugin();

      TDella.onMouseMove();
    },
    unload: function () {
      gui.log('tdella unload method called');
    }
  };
});

$.GUI().start('Home', {});
