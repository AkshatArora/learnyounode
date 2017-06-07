var http=require('http');
var fs = require('fs');
var port=process.argv[2];
var path = process.argv[3];
http.createServer(function(request,response){
var readstream=fs.createReadStream(path);
	response.writeHead(200,{'Content-Type':'text/plain'});
	readstream.pipe(response);
	
}).listen(port);