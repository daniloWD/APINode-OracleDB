var express = require('express');
var consign = require('consign');

var app = express();
app.use(express.static('./app/public'));

consign()
    .include('./app/routes')
    .then('config/oracledbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;