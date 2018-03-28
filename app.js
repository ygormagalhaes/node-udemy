var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render('secao/home');

});

app.get('/skate', (req, res) => {
    
        res.send('O mundo do skate!');
    
    });

app.listen('3000', () => {

    console.log('Aplicação node iniciada!');

});