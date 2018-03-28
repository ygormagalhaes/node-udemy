module.exports = (app) => {

    app.get('/noticias', (req, res) => {

        var consulta = 'SELECT * FROM noticias';

        app.connection.query(consulta, (error, results) => {

            res.send(results);

        });
        
        // res.render('noticias/noticias');
    
    });

}