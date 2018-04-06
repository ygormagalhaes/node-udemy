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

    getNoticiasHome(callback) {

        var consulta = 'SELECT * FROM noticias ORDER BY data DESC LIMIT 5';
        this.connection.query(consulta, callback);

    }

}

module.exports = () => {

    return NoticiaDAO;

}