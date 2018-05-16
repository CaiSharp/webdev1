//GLOBAL VARIABLES
const net = require('net');
const fs = require('fs');
const path = require('path');

const port = 8000;
const directory = path.join(__dirname, 'public');

const contentType = {
    txt: 'text/plain',
    html: 'text/html',
    css: 'text/css',
    jpg: 'image/jpeg',
    png: 'image/png',
    js: 'application/javascript'
};

//CREATE SERVER
const server = net.createServer(socket => {
    socket.on('data', data => {
        let input = data.toString();

        //GET REQUEST && END SOCKET IF NOT VALID
        let request = getRequest(input,socket);

        //CREATE FILE PATH && SET CONTENT TYPE (PLAIN TEXT IN CASE THERE"S NONE)
        if(request !== undefined){
            let file = path.join(directory, request);
            let type = contentType[path.extname(file).slice(1)] || 'text/plain';

            //READ FILE FROM DIRECTORY && WRITE TO SOCKET
            const fileSystem = fs.readFile(file,(error, data) => {
                if (error) {
                    sendError(404,socket);
                } else {
                    socket.write('HTTP/1.1 200 OK\n');
                    socket.write(`Content-Type: ${type}\n\n`);
                    socket.write(data);
                    socket.end();
                }
            });
            console.log(file);
        }
    });
}).listen(port);

function getRequest(stringReq,socket) {

    //SPLIT PATH FROM DATA AND RETURN IF VALID GET REQUEST
    if(stringReq.match(/\n\r?\n\r?/)){
        let lines = stringReq.split(/\n/)[0].split(' ');

        if(lines[0] === 'GET'){
            return lines[1];
        } else {
            sendError(501,socket);
        }
    }
}

function sendError(errorNum,socket) {

    switch (errorNum){
        case 404:
            socket.write('HTTP/1.1 404 Not Found\n');
            socket.write('Content-Type: text/plain\n\n');
            socket.write('Not Found');
            socket.end();
            break;

        case 501:
            socket.write('HTTP/1.1 501 Not Implemented\n');
            socket.write('Content-Type: text/plain\n\n');
            socket.write('Method not implemented');
            socket.end();
            break;

        default:
            socket.write('HTTP/1.1 444 GG\n');
            socket.write('Content-Type: text/plain\n\n');
            socket.write('GG no RE, Something went wrong.');
            socket.end();
            break;
    }
}
