//GLOBAL VARIABLES
const net = require('net');
const port = 3000;

//CREATE SERVER
const server = net.createServer(function (socket) {
    socket.on('data', function (data) {

        //SPLIT IN LINES
        let lines = data.toString().split('\r\n');

        //GET LINE WITH ACCEPTED LANGUAGE
        let lang = getLine(lines, 'Accept-Language').replace('Accept-Language: ', '').split(',')[0];

        //GET LIST WITH ARGUMENTS
        let list = lines[(lines.indexOf('') + 1)].split('\n');

        //SORT  ARGUMENTS
        let sortedList = sortBubble(list);

        console.log(`Locale: ${lang}`);

        //SEND RESPONSE && END CONNECTION
        sendResponse(socket, sortedList);
    });
}).listen(port);

function getLine(array, query) {
    return array.filter((line) => {
        return line.includes(query);
    }).toString();
}

function sortBubble(array) {
    let sorted = array.slice(0, array.length);
    let changed;

    do {
        changed = false;
        for (let i = 0; i < sorted.length - 1; i++) {
            if (sorted[i].localeCompare(sorted[i + 1]) > -1) {
                let temp = sorted[i];
                sorted[i] = sorted[i + 1];
                sorted[i + 1] = temp;
                changed = true;
            }
        }
    } while (changed);
    return sorted;
}

function sendResponse(socket, list) {
    socket.write('HTTP/1.1 200 OK\r\n');
    socket.write('Content-Type: text/plain; charset: utf-8\r\n');
    socket.write('\r\n');
    list.forEach((el, index, array) => {
        if (index !== array.length - 1) {
            socket.write(el + "\r\n");
        } else {
            socket.write(el);
        }
    });
    socket.end();
}