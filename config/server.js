var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

app.use(express.static('./app/public'))

consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .then('./config/connection.js')
    .into(app);

module.exports = app;