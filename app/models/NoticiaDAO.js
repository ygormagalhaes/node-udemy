class NoticiaDAO {

    constructor(connection) {

        this.connection = connection;

    }

    getNoticias(callback) {

        var consulta = 'SELECT * FROM noticias';
        this.connection.query(consulta, callback);

    }

    salvarNoticia(noticia, callback) {

        var insert = `INSERT INTO noticias (titulo, noticia) VALUES ('${noticia.titulo}', '${noticia.noticia}')`;
        this.connection.query(insert, callback);

    }

}

module.exports = () => {

    return NoticiaDAO;

}