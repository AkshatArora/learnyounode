
var file_name = process.argv[2];
var a = process.argv[3];var n;
var filtered=require('./model_example.js')
filtered(file_name,a,function(err,d){
	if(err)
		return err;
console.log(d)
}
)


