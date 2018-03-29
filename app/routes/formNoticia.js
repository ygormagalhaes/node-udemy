module.exports = (app) => {

    app.get('/form-noticia', (req, res) => {
        
        res.render('admin/form_add_noticia');
    
    });

    app.post('/noticias/salvar', (req, res) => {
        
        var noticia = req.body;
        res.send(noticia);

    });

}