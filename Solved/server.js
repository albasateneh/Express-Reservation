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
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app);




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})