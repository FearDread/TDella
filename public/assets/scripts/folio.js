/* Portfolio page GUI Script */
$.GUI().create('Portfolio', function ( gui ) {

  function _AddEvents () {

    gui.$('.btn-contact').click(function ( event ) {
      event.stopPropagation();

      var $form = gui.$('#contact');
      var vals = $form.serialize(); 

      gui.xhr(url, function ( response ) {

        if ( response.error || !response ) {

        } else {
        
        }

      });

    });

  }

  return {
    load: function () {
      gui.log('Load called in folio.js ', gui.$);

      TDella.onMouseMove();
      TDella.initGoogleMaps();

      _AddEvents();
    },
    unload: function () {
      gui.log('Un-load called in folio.js', gui);
    }
  }
});

$.GUI().start('Portfolio', TDella.globals);
