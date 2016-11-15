'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var responseTime = function responseTime(cb) {
  return function (req) {

    var startAt = process.hrtime();

    req.on('end', function () {

      var diff = process.hrtime(startAt);
      var time = diff[0] * 1e3 + diff[1] * 1e-6;

      cb(req, time);
    });
  };
};

exports.default = responseTime;
module.exports = exports['default'];