//GLOBAL VARIABLES
const net = require('net');
const port = 3000;

const server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        let lines = data.toString().split('\r\n');
        lines.forEach((line) => console.log(line));

        //my magic goes here

        socket.write('HTTP/1.1 200 OK\r\n');
        socket.write('Content-Type: text/plain; charset=utf-8\r\n');
        socket.write('\r\n');
        socket.write('This is the end, my friend\r\n');
        socket.end();
    });
}).listen(port);