var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
})