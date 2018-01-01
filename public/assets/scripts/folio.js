/* Portfolio page GUI Script */
$.GUI().create('Portfolio', function ( gui ) {

  return {
    load: function () {
      gui.log('Load called in folio.js', gui);

      TDella.onMouseMove();
      TDella.initGoogleMaps();
    },
    unload: function () {
      gui.log('Un-load called in folio.js', gui);
    }
  }
});

$.GUI().start('Portfolio', {});

