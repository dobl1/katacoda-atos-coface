'use strict';

var utils = require('../utils/writer.js');
var City = require('../service/CityService');

module.exports.createCity = function createCity (req, res, next) {
  var body = req.swagger.params['body'].value;
  City.createCity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllCities = function getAllCities (req, res, next) {
  City.getAllCities()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
