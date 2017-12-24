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

      TDella.Browser.init();

      if ( TDella.Browser.type == 'Explorer' && TDella.Browser.version <= 9 ) {
          $('body').html( TDella.Browser.better_browser );
      }

      window_width = $(window).width();
      window_height = $(window).height();

      menu = $('nav[role="navigation"]').hasClass('navbar-burger') ? true : false;

      TDella.init.animations();

      if ( window_width < 952 || menu ) {
        TDella.init.menu();
      }

      TDella.checks.responsive();
      TDella.init.home();
    },
    unload: function () {
      gui.log('tdella unload method called');
    }
  };
});

$.GUI().start('Home', {});

