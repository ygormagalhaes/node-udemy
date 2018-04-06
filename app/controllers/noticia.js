module.exports.noticias = (app, req, res) => {

    var connection = app.config.connection();

    var noticiaDAO = new app.app.models.NoticiaDAO(connection);

    noticiaDAO.getNoticias((error, results) => {

        res.render('noticias/noticias', { noticias: results });

    });

};

module.exports.formNoticia = (application, req, res) => {

    res.render('admin/form_add_noticia', { erros: null, noticia: {} });

};

module.exports.salvar = (application, req, res) => {

    var noticia = req.body;

    req.assert('titulo', 'O campo título é obrigatório.').notEmpty();
    req.assert('resumo', 'O campo resumo é obrigatório.').notEmpty();
    req.assert('resumo', 'O campo resumo deve ter entre 50 e 200 caracteres.').len(50, 255);
    req.assert('autor', 'O campo autor é obrigatório.').notEmpty();
    req.assert('autor', 'O campo autor deve ter entre 2 e 100 caracteres.').len(2, 100);
    req.assert('data', 'O campo data é obrigatório.').notEmpty();
    req.assert('noticia', 'O campo notícia é obrigatório.').notEmpty();

    var erros = req.validationErrors();

    if (erros) {

        console.log(erros);
        res.render('admin/form_add_noticia', { erros: erros, noticia: noticia });
        return;

    }

    var connection = application.config.connection();

    var noticiaDAO = new application.app.models.NoticiaDAO(connection);

    noticiaDAO.salvarNoticia(noticia, (error, results) => {

        if (error) {

            console.error(error);

        }

        res.redirect('/noticias');

    });

};