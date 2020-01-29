'use strict';


/**
 * Create a new City
 * Create a single `city` entity.
 *
 * body City 
 * returns Object
 **/
exports.createCity = function(body) {
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
 * List all cities
 * Get an array of all the `cities` entities.
 *
 * returns List
 **/
exports.getAllCities = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Paris",
  "lat" : 48.902803,
  "long" : 2.372743
}, {
  "name" : "Paris",
  "lat" : 48.902803,
  "long" : 2.372743
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

