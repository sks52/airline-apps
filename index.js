var airlinesJSON = require('./airlines.json');
var Fuse = require('fuse.js');

var airlines = new Fuse(airlinesJSON, { keys: ['name'] } );

module.exports = airlines;
