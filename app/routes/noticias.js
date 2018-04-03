module.exports = (app) => {

    app.get('/noticias', (req, res) => {

        var connection = app.config.connection();

        var noticiasModel = new app.app.models.NoticiaDAO(connection);

        noticiasModel.getNoticias((error, results) => {
            
            res.render('noticias/noticias', {noticias: results});

        });
    
    });

}