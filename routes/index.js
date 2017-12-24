/*******************************************/
/* TDella Creations Routes Script          */
/*******************************************/
var utils, pubdir, data, config;

config = require('../src/config');
utils = require('../src/utils');

exports.add = function (app) {

	app.use( function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

		next();

	});

	app.get('/', function (req, res) {
    data = {
      title: 'T`Della Creations',
      url: config.website.name,
      social: config.website.social,
      environment: config.environment,
      modal_1: {
        title: '',
        pname: '',
        ptext: '',
        text_right: '',
        text_left: '',
        pimage: ''
      },
      modal_4: {
        title: 'Fancy Details',
        pname: 'Wedding Gift',
        text_right: '<p> Pencil’s certified Bluetooth Smart wireless delivers a fast, stable connection with industry-leading power conservation </p><br /><p> Each Pencil is milled from a single, solid piece of material. Graphite brushed aluminum model shown</p>',
        ptext: '<p> Pencil’s certified Bluetooth Smart wireless delivers a fast, stable connection with industry-leading power conservation </p><br /><p> Each Pencil is milled from a single, solid piece of material. Graphite brushed aluminum model shown</p>',
        pimage: '/assets/img/rubik_background3.png'
      }
    };

		res.render('home', data);
	});

  app.get('/order-now', function (req, res) {
    console.log('render order page / wizard');

    res.render('order', {});
  });

	app.get('/about', function (req, res) {
		console.log('render about tracy page');

		res.render('about', {});
	});

	app.get('/portfolio', function (req, res) {
		console.log('render portfolio page');
    // utils.cleanObj( data );
    // TODO: Add utils cleanObj method to verify fresh object used every tiome

    data = {
      title: 'T`Della Creations',
      url: config.website.name,
      social: config.website.social,
      environment: config.environment,
      modal_1: {
        title: '',
        pname: '',
        ptext: '',
        text_right: '',
        text_left: '',
        pimage: ''
      },
      modal_4: {
        title: 'Fancy Details',
        pname: 'Wedding Gift',
        text_right: '<p> Pencil’s certified Bluetooth Smart wireless delivers a fast, stable connection with industry-leading power conservation </p><br /><p> Each Pencil is milled from a single, solid piece of material. Graphite brushed aluminum model shown</p>',
        ptext: '<p> Pencil’s certified Bluetooth Smart wireless delivers a fast, stable connection with industry-leading power conservation </p><br /><p> Each Pencil is milled from a single, solid piece of material. Graphite brushed aluminum model shown</p>',
        pimage: '/assets/img/rubik_background3.png'
      }
    };

		res.render('portfolio', data);
	});

  app.get('/builder', function (req, res) {
    console.log('render builder / demo page');

    res.render('builder', {});
  });

};
