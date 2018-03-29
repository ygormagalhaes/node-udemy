module.exports = () => {

    this.getNoticias = (connection, callback) => {

        var consulta = 'SELECT * FROM noticias';
        connection.query(consulta, callback);

    }

    return this;

}