var express = require("express"),
	http    = require("http");

var app = express();

app.get('/', function(request, response){
	response.writeHead(200, {"Content-type": "text/plain"});
	response.end("Hello world!\n");
});

http.createServer(app).listen(8000);