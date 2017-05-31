var fs = require('fs')
var n;
function length(callback) {
  fs.readFile(process.argv[2],'utf8',function doneReading(err, fileContents) {
  var  myString = fileContents.toString()
	var ar=myString.split('\n')
	 n=ar.length-1
    callback()
  })
}

function logMyNumber() {
  console.log(n)
}

length(logMyNumber)