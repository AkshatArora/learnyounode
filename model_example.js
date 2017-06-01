 var fs=require('fs')
function read_dir(file_name,extension,callback){
fs.readdir(file_name,function(err,data){
	if(err)
		return callback(err)
for(var i=0;i<data.length;i++)
{if(data[i].endsWith("."+extension))
	{n=data[i]
callback(null,n)
	}
	}})}



module.exports=read_dir 


