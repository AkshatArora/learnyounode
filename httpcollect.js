const http = require('http')
    , bl         = require('bl')
    , url        = process.argv[2];

http.get(url).on('response',function(response){
	
	 response.pipe(bl(function(err,data){
		 str=data.toString();
		 console.log(str.length);
		 console.log(str);
	 }));
	
});
