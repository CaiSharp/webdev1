//GLOBAL VARIABLES
const net = require('net');
const port = 3000;

//CREATE SERVER
const server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        let local;
        let sortedArr;

        if(!data.toString().includes(`GET /favicon.ico HTTP/1.1`)){

            //SPLIT IN LINES, STORE IN ARRAY
            let lines = data.toString().split('\r\n');

            //LOOK FOR LANGUAGE LINE IN ARRAY && RETURN
            local = searchLine(lines,'Accept-Language:');
            //CUT OUT LOCAL LANGUAGE
            local = filterLang(local,0);

            //FILTER BODY FROM HEAD && REMOVE \r\n
            let indexEmptyLine = (lines.findIndex(el => el.length === 0));
            let contentBody = lines.filter((el,index) => index > indexEmptyLine);
            contentBody = contentBody.toString().split('\n');

            //SORT WITH BUBBLESORT && compareLocal()
            sortedArr = bubbleSort(contentBody,local);
        }
        //WRITE RESPONSE
        sendResponse(socket,local,sortedArr);
    });
}).listen(port);

function searchLine(array, string) {
    let target;

    array.forEach( el => {
        if(el.includes(string)){
            target = el;
        }
    });
    return target;
}

function filterLang(string,langCount) {
    return string.replace('Accept-Language: ', '').split(',')[langCount];
}

function bubbleSort(arr,local) {
    let swap;

    do {
        swap = false;
        for (let i = 1; i < arr.length; ++i) {
            if (arr[i-1].localeCompare(arr[i],local) > 0) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                swap = true;
            }
        }
    } while (swap);
    return arr;
}

function sendResponse(socket, local, arr) {
    socket.write('HTTP/1.1 200 OK\r\n');
    socket.write('Content-Type: text/plain; charset: utf-8\r\n');
    socket.write(`\r\n`);
    socket.write(`Language: ${local}`);
    socket.write(`\r\n`);
    arr.forEach(el => {
        socket.write(`${el}`);
        socket.write(`\r\n`);
    });
    socket.end();
}