/*******************************************/
/* TDella Creations Order Script           */
/*******************************************/

var data, utils, config;

exports.add = function (app) {

  app.get('/order', function (req, res) {
    console.log('rener order page and add post method logic');

    res.render('order', data);

  });

  app.post('/order', function (req, res) {
    console.log('order submitted :: ' + req.body);

    res.reload();

  });

};
