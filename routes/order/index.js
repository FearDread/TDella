/*******************************************/
/* TDella Creations Order Script           */
/*******************************************/

var data, utils, config;

utils = require('../../src/utils');
config = require('../../src/config');

exports.add = function (app) {

  data = utils.addPageObj( config );

  app.get('/order-now', function (req, res) {
      res.render('order', data);
  });

  app.post('/order', function (req, res) {
    console.log('order submitted :: ' + req.body);
  });
};
