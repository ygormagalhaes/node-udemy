module.exports = (app) => {

    app.get('/noticias', (req, res) => {

        var connection = app.config.connection();

        var consulta = 'SELECT * FROM noticias';

        connection.query(consulta, (error, results) => {

            res.render('noticias/noticias', {noticias: results});

        });
        
    
    });

}