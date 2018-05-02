//GLOBAL VARIABLES
const net = require('net');
const readline = require('readline');
const port = 3000;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const socket = new net.Socket();

socket.connect(port, '10.51.4.108', function () {
    console.log('Connected');
});

rl.on('line', (line) => {
    socket.write(line);
});

socket.on('data', function (data) {
    console.log(data.toString());
});