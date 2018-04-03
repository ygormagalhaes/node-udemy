module.exports = (app) => {

    app.get('/form-noticia', (req, res) => {
        
        res.render('admin/form_add_noticia');
    
    });

    app.post('/noticias/salvar', (req, res) => {
        
        var noticia = req.body;

        var connection = app.config.connection();
        
        var noticiasModel = new app.app.models.NoticiaDAO(connection);

        noticiasModel.salvarNoticia(noticia, (error, results) => {

            if (error) {

                console.error(error);

            }

            res.redirect('/noticias');

        });

    });

}