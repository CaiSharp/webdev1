const net = require('net');
const HOST = '127.0.0.1';
const PORT = 80;

let visitorCount = 0;

//create server with socket object
net.createServer(function(socket) {

    //log client connection
    console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
    visitorCount++;

    //if data is send from client
    socket.on('data', function(data) {

        //log message from client && give the visitorCount back
        console.log('CLIENT MESSAGE' + socket.remoteAddress + ': ' + data);
        socket.write("You're visitor " + visitorCount);
    });

    //give status if connection to client is closed
    socket.on('close', function(data) {
        console.log('CLOSED: ' + socket.remoteAddress +' '+ socket.remotePort);
    });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);