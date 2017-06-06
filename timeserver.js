var net = require ('net')
function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
net.createServer(function(socket){
	var d= new Date();
	var data=d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
	
    socket.write(data);
	socket.end("\n");
}).listen(process.argv[2]); 
