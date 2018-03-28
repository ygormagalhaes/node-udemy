var mysql = require('mysql');

module.exports = () => {

    return mysql.createConnection({
        host: '192.168.254.5',
        user: 'root',
        password: '12345',
        database: 'portal_noticias'
    });

}