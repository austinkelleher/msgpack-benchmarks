var uuid = require('node-uuid');

exports.randomString = function(len) {
    var str = '';
    for (var i = 0; i < len; i++) {
        str += uuid.v4();
    }
    return str;
};

exports.randomObj = function(len) {
    var obj = {};
    for (var i = 0; i < len; i++) {
        var key = uuid.v4();
        obj[key] = key;
    }
    return obj;
};
