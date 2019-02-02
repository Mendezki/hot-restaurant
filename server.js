var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(___dirname, "home.html"));
});

app.get("/public/tables", function(req, res) {
    res.sendFile(path.join(___dirname, "tables.html"));
});

app.get("/public/reservations", function(req, res) {
    res.sendFile(path.join(___dirname, "reservations.html"));
});

app.get("/api/tables", function(req, res) {
    res.json(tableData);
});

app.post("/api/tables", function(req, res) {
});

app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
})