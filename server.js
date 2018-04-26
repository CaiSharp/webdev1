const net = require('net');
const http = require('http');
const HOST = '127.0.0.1';
const PORT = 5000;
const PORT2 = 3000;

let visitorCount = 0;

//create server with socket object for client/server exchange
net.createServer(function(socket) {

    //log client connection
    console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
    visitorCount++;

    //if data is send from client
    socket.on('data', function(data) {

        //log message from client && give the visitorCount back
        console.log('CLIENT MESSAGE: ' + socket.remoteAddress + ': ' + data);
        console.log('VISITOR COUNT: ' + visitorCount);
        socket.write("You're visitor " + visitorCount);
    });

    //give status if connection to client is closed
    socket.on('close', function(data) {
        console.log('CLOSED: ' + socket.remoteAddress +' '+ socket.remotePort);
    });

}).listen(PORT, HOST);

console.log('Server 1 listening on ' + HOST +':'+ PORT);

//create server for http browser request
http.createServer(function (req,res) {

    //ignore favicon browser request
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'});
        res.end();
        return;
    }

    //sets response head
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //increases visitor count && logs it, displays it in the browser as well
    visitorCount++;
    res.write(`${visitorCount}`);
    res.end();
    console.log(`OI! You're visitor ${visitorCount}!`);
}).listen(PORT2);

console.log('Server 2 listening on ' + HOST +':'+ PORT2);