var app = require('./config/server');

app.connection = require('./config/connection');

var routeHome = require('./app/routes/home')(app);

var routeFormNoticia = require('./app/routes/form-noticia')(app);

var routeNoticias = require('./app/routes/noticias')(app);

app.listen('3000', () => {

    console.log('Aplicação node iniciada!');

});