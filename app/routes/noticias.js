module.exports = (app) => {

    app.get('/noticias', (req, res) => {

        var connection = app.config.connection();

        var noticiaDAO = new app.app.models.NoticiaDAO(connection);

        noticiaDAO.getNoticias((error, results) => {
            
            res.render('noticias/noticias', {noticias: results});

        });
    
    });

}