var fs=require('fs')
var file=process.argv[2]
var a=process.argv[3]
fs.readdir(file,function(err,items){
for(var i=0;i<items.length;i++)
{if(items[i].endsWith("."+a))
	console.log(items[i])

}})