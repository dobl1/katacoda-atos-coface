'use strict';


/**
 * Create a new temperature
 * Create a single `temperature` entity.
 *
 * body Temperature 
 * returns Object
 **/
exports.createTemperature = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get list of temperatures
 * Get an array of all the `temperatures` entities.
 *
 * returns List
 **/
exports.getAllTemperatures = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "value" : 28.9,
  "date" : "2019-08-21T12:50:00",
  "cityName" : "Nice"
}, {
  "value" : 28.9,
  "date" : "2019-08-21T12:50:00",
  "cityName" : "Nice"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

