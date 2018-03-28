var http = require('http');

var server = http.createServer( (req, res) => {
    
    var categoria = req.url;

    if ( categoria === '/moda' ) {

        res.end( 'Página de moda!' );

    } else {

        res.end( 'Minha home!' );

    }


} );

server.listen( 3000 );