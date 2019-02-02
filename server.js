var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(___dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(___dirname, "tables.html"));
});

app.get("/reservations", function(req, res) {
    res.sendFile(path.join(___dirname, "reservations.html"));
});

var server = http.createServer(handleRequest);
function handleRequest(req, res) {
    var path = req.url;
} 

server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
})