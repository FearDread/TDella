/* TDella Front End Script */
/* Wrapped in Guerrilla UI Wrapper */
var Browser = {
  init: function () {
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
};

TDella = function () {

  var _this = this, debounce;

  debounce = function (func, wait, immediate) {
    var timeout, context;

    return function () {

      context = this.args = arguments;
      clearTimeout( timeout );

      timeout = setTimeout( function () {

        timeout = null;

        if ( !immediate ) {

          func.apply(context, args);
        }
      }, wait);

      if ( immediate && !timeout ) {

        func.apply(context, args);
      }
    };
  };

  console.log('this obj = ', this);

  return {
    opts: {},
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
      animations: function () {},
      menu: function () {},
      goole: function () {}
    },
    showModal: function () {

    },
    checks: {
      responsive: function () {},
      transparent: debounce ( function () {

      }),
      parallax: debounce (function () {

      }),
      transitions: debounce ( function () {

      }),
    }
  };
};

$.GUI().create('TDella', function (gui) {

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

$.GUI().start('TDella', {});
