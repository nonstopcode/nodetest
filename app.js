const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 5000;

fs.readFile('index.html', (err, html) =>{
	if(err){
		throw err;
	}

	const server = http.createServer((req, res) => {
		res.statusCode= 200;
		res.setHeader('Content-type', 'text/html');
		res.end(html);
		res.end();
	});

	server.listen(port, hostname, () => {
		console.log('Server started on port '+port);
	});
});
