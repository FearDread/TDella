/* Utility Methods */
exports.json = function(req) {
    return req.query && req.query.json;
};

exports.extend = function (child, parent) {
    var key;

    for (key in parent) {
        if ({}.hasOwnProperty.call(parent, key)) {
            child[key] = parent[key]; 
        } 
    }
        
    function ctor() {
        this.constructor = child;
    } 
    
    ctor.prototype = parent.prototype;

    child.prototype = new ctor();
    child.__super__ = parent.prototype;

    return child;
};

exports.addError = function (msg) {
    return {
        success: false,
        error: true,
        message: msg || "Error ...",
        status: 403
    };
};

exports.addPageObj = function (props) {
  if ( !props ) return {};

  return {
    title: 'T`Della Creations',
    url: props.website.name,
    social: props.website.social,
    environment: props.environment,
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
};

exports.path = function (req) {
    return req.url;
};

exports.isObj = function (obj) {
  return (obj instanceof Object);
};

exports.isStr = function (str) {
  return (typeof str === 'string');
};

exports.isFunc = function (obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
};

exports.isAuth = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    return res.json({success: false, message: 'Your not authenticated, please login.'});
};

exports.merge = function (out) {
    var i, obj, key;

    out = out || {};

    for (i = 1; i < arguments.length; i++) {
        obj = arguments[i];

        if (!obj)
            continue;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {

                    merge(out[key], obj[key]);

                } else {

                    out[key] = obj[key];
                }
            }
        }
    }

    return out;
};

exports.xmlToJson = function (xml) {
    var old, obj = {}, i, j, item, nodeName, attribute;

    if (xml.nodeType == 1) { 
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};

            for (j = 0; j < xml.attributes.length; j++) {
                attribute = xml.attributes.item(j);

                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { 
        obj = xml.nodeValue;
    }

    if (xml.hasChildNodes()) {
        for(i = 0; i < xml.childNodes.length; i++) {
            item = xml.childNodes.item(i);
            nodeName = item.nodeName;

            if (typeof(obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof(obj[nodeName].push) == "undefined") {
                    old = obj[nodeName];

                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }

                obj[nodeName].push(xmlToJson(item));
            }
        }
    }

    return obj;
};

exports.each = function(array) {
    return array.forEach.call(array);
};

exports.showCommingSoon = function(app) {

  app.get('*', function (req, res) {

    res.render('comingsoon', undefined);

  });

};
