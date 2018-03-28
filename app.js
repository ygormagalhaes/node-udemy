var express = require('express');
var app = express();

app.get('/', (req, res) => {

    res.send('Home do site!');

});

app.get('/skate', (req, res) => {
    
        res.send('O mundo do skate!');
    
    });

app.listen('3000', () => {

    console.log('Aplicação node iniciada!');

});