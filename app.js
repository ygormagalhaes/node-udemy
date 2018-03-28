var app = require('./config/server');

app.get('/', (req, res) => {

    res.render('home/index');

});

app.get('/form-noticia', (req, res) => {
    
    res.render('admin/form_add_noticia');

});

app.get('/noticias', (req, res) => {
    
    res.render('noticias/noticias');

});

app.listen('3000', () => {

    console.log('Aplicação node iniciada!');

});