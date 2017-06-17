const http 	= require('http');
const fs 	= require('fs');

http.createServer(function(req,res){
	fs.readFile('./index.html', (err, data) => {
		if(err) console.log(err);
		res.writeHead(200,{"Content-Type":"text/html"
		});
		res.end();
	});

}).listen(process.env.PORT || 8000);