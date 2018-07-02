var express = require('express');
var consign = require('consign');
var cors = require('cors');

var app = express();
app.use(express.static('./app/public'));
app.use(cors());

consign()
    .include('./app/routes')
    .then('config/oracledbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;