// Dependencies
// =========================================================================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =========================================================================================================
var app = express();
var PORT = 3000;

// Data Parsing
//==============================================================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// ==========================================================================================================
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
})

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, "./public/tables.html"));
})

app.get('/reservations', function (req, res) {
    res.sendFile(path.join(__dirname, "./public/reserve.html"));
})


















app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})