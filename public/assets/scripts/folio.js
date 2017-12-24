/* Portfolio page GUI Script */
$.GUI().create('Portfolio', function ( gui ) {


  function init () {

  }

  return {
    load: function () {
      gui.log('Load called in folio.js', gui);

      init();
    },
    unload: function () {
      gui.log('Un-load called in folio.js', gui);
    }
  }
});


$.GUI().start('Portfolio', {});

