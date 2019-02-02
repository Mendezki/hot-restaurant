var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

///inital data
/////////////////////////////////////////////
var reservations = [
  {
    routeName: "resone",
    name: "Steve",
    phoneNumber: "010-000-0000",
    email: "test@test.com",
    id: "supersteve"
  },
  {
    routeName: "restwo",
    name: "Marry",
    phoneNumber: "030-000-0000",
    email: "test2@test.com",
    id: "supermarry"
  },
  {
    routeName: "resthree",
    name: "John",
    phoneNumber: "020-000-0000",
    email: "tes3t@test.com",
    id: "superjohn"
  }
];

///////////////////////////

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

app.post("/api/tables", function(req, res) {});

app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
