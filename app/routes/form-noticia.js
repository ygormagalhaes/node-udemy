module.exports = (app) => {

    app.get('/form-noticia', (req, res) => {
        
        res.render('admin/form_add_noticia');
    
    });

}