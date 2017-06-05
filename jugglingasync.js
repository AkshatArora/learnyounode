http= require('http');
bl=require('bl');
function print(callback){
for (var i=2;i<5;i++){
http.get(process.argv[i]).on('response',function(response){
	
	response.pipe(bl(function(err,data){
	if(err)
		{console.err(err);}
			var str1=data.toString();
			callback(str1);
	 
	}));	
});}}
print(callback);
function callback(str){
	console.log(str);
}