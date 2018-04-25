const net = require('net');
const HOST = '127.0.0.1';
const PORT = 80;


const client = new net.Socket();
client.connect(PORT, HOST, function() {

    //log server connection
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('Gimme the views! Arr!');
});

//event handler for data from server
client.on('data', function(data) {

    //log data and kill connection
    console.log('SERVER: ' + data);
    client.destroy();
});

//log when connection closed
client.on('close', function() {
    console.log('Connection closed');
});