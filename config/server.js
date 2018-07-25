var express = require('express'),
    consign = require('consign'),
    cors = require('cors'),
    multiparty = require('connect-multiparty'),
    bodyParser = require('body-parser');

    var app = express();
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({}));
app.use(multiparty());
app.use(cors());


consign()
    .include('./app/routes')
    .then('config/oracledbConnection.js')
    .then('config/mongodbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;