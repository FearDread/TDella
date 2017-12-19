/* Home page GUI Script */
$.GUI().create('Home', function (gui) {

  return {
    load: function () {
      gui.log('Load method called in TDella script');

      var della = new TDella();

      Browser.init();
      if ( Browser.type == 'Explorer' && Browser.version <= 9){
          $('body').html(better_browser);
        // $('body').html( Browser.notify );
      }

      window_width = $(window).width();
      window_height = $(window).height();

      menu = $('nav[role="navigation"]').hasClass('navbar-burger') ? true : false;

      della.init.animations();

      if ( window_width < 952 || menu ) {
        della.init.menu();
      }

      della.checks.responsive();
      // della.init.goole.maps();
    },
    unload: function () {
      gui.log('tdella unload method called');
    }
  };
});

$.GUI().start('Home', {});

