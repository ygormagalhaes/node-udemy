module.exports = (application) => {

    application.get('/noticias', (req, res) => {
        
        application.app.controllers.noticia.noticias(application, req, res);
    
    });

    application.get('/form-noticia', (req, res) => {
        
        application.app.controllers.noticia.formNoticia(application, req, res);
    
    });

    application.post('/noticias/salvar', (req, res) => {
        
        application.app.controllers.noticia.salvar(application, req, res);

    });

}