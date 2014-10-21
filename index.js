var through2 = require('through2');
var gutil = require('gulp-util');

var __indexOf = [].indexOf;

function _getParts (path) {
  return path.split(/\/|\\/);
}

module.exports = function streamFiles () {

  return through2.obj(function (file, encoding, callback) {

    var rel = [];
    var abs = _getParts(file.path);
    var base = _getParts(__dirname);

    for (_i = 0, _len = abs.length; _i < _len; _i++) {

      part = abs[_i];

      if (__indexOf.call(base, part) < 0) {
        rel.push(part);
      }
    }

    console.log(gutil.colors['bold'](rel.join('/')));

    this.push(file);

    callback();
  });
};