var http = require('http');
var bl = require('bl');
  var map = require('through2-map');
var port = process.argv[2];
http.createServer(function(request,response){

 
    request.pipe(map(function (chunk) {
       return chunk.toString().toUpperCase().split('').join('')
     })).pipe(response);
	 
}).listen(port);
