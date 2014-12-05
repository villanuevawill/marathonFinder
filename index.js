var express = require("express"),
	http = require("http");

var app = express();
app.get('/', function(request, response){
	response.writeHead(200, {"Content-type": "text/html"});
	response.end("<html> <head><title>hello!</title></head><body><p>hello world!</p></body> </html>");
});
http.createServer(app).listen(8000);