'use strict';

var utils = require('../utils/writer.js');
var Temperature = require('../service/TemperatureService');

module.exports.createTemperature = function createTemperature (req, res, next) {
  var body = req.swagger.params['body'].value;
  Temperature.createTemperature(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllTemperatures = function getAllTemperatures (req, res, next) {
  Temperature.getAllTemperatures()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
