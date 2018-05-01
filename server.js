//GLOBAL VARIABLES
const net = require('net');
const port = 3000;
let visitorCounter = 0;

const server = net.createServer(function (socket) {
    socket.on('data', function (data) {

        //WRITE RESPONSE HEADER
        socket.write('HTTP/1.1 200 OK\r\n');
        socket.write('Content-Type: text/plain; charset=utf-8\r\n');

        dataString = data.toString();

        //INCREASES VISITORCOUNT ONLY FOR REQUESTS ON /VISIT, EXCLUDES FAVICION REQUESTS
        checkRequest(dataString);

        //WRITE TO SOCKET && DISPLAY ON SITE
        socket.write('\r\n');
        socket.write(` You're Visitor Number : ${visitorCounter}`);

        //ERROR HANDLING
        socket.on('error', (err) => {
            socket.write('Stuff happend and now nothing works, bummer!');
            socket.end();
        });

        //KILL CONNECTION
        socket.end();
    });
}).listen(port);


//FUNCTIONS
function checkRequest(dataString){
    if (dataString.includes(`/visit`) && !(dataString.includes(`favicon`))){
        visitorCounter++;
        console.log(`Current visitor count : ${visitorCounter}`);
    }else if(!(dataString.includes(`favicon`))){
        console.log(`Current visitor count : ${visitorCounter}`);
    }
}