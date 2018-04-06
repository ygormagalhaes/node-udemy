module.exports.home = (application, req, res) => {

    var connection = application.config.connection();

    var noticiaDAO = new application.app.models.NoticiaDAO(connection);

    noticiaDAO.getNoticiasHome((error, results) => {

        if (error) {

            console.error(error);
        }

        console.log(results);
        res.render('home/index', {
            noticias: results
        });

    });


}