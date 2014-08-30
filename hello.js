var http = require('http');

http.createServer(function (request, response) {
    console.log('requesting...\n');	
	response.writeHead(200, {'Content-Type': 'text/plain'});	
	console.log('FIRST');
    response.end('Hello World\n');
}).listen(5559);

console.log('Server started');