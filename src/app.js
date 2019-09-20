const http = require('http');
const server = http.createServer();
const url = require('url');

server.on('request', (request, response) => {
    let path = url.parse(request.url).pathname;
    console.log(path);

    let set_response = (content, respone, status = 200) => {
        response.writeHead(status, {'Content-Type': 'text/plain'});
        response.write(content);
        response.end();
    };

    if (path === '/') {
        set_response("Hello world!");
    } else if (path == '/about') {
        set_response("Made by VIVES students.");
    } else {
        set_response("Error", 400);
    }
});

server.listen(3000, () => {
    console.log('Node server created at port 3000');
});