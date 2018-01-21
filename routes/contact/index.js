/*******************************************/
/* TDella Creations Contact Script         */
/*******************************************/

var utils, pubdir, data, config, mailer;

mailer = require('nodemailer');
config = require('../../src/config');
utils = require('../../src/utils');

exports.add = function (app) {


  app.get('/contact-us', function (req, res) {
    console.log('render contact page and add email logic');

    data = utils.addPageObj(data);

    res.render('contact', data);

  });

  app.post('/contact-us', function (req, res) {
      var opts, transport, edata;

      opts = {
          from: req.body.name + ' &lt;' + req.body.email + '&gt;',
          to: config.support.email,
          subject: req.body.subject,
          text: req.body.message
      };

      transport = mailer.createTransport('SMTP', {
          service: 'Gmail',
          auth: {
              user: config.support.user,
              pass: config.support.password
          }
      });

      transport.sendMail(opts, function (error, response) {
        edata = {}; 
        if (error) {
          console.log('error sending email ...' + response);

          edata = utils.addError();
          res.render('home', edata);

        } else {
          edata = {
            response: 'Thanks! We will get back to you soon!'
          };

          res.render('contact', edata);

        };
    });
  });
};
