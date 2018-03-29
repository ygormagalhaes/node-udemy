var express = require('express');
var consign = require('consign');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign().include('./app/routes').into(app);

app.connection = require('../config/connection');

module.exports = app;