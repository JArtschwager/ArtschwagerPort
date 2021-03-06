//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const routes = require("./routes");


//initialize server
var app = express();

//define port
var PORT = process.env.PORT || 3000;

//css file
app.use(express.static(__dirname + '/public' ));

// Set up middleware (body-parser)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set up routes 
// require("./app/routing/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



// Turn on server
app.listen(PORT, function() {
    console.log("Server running on port: localhost:" + PORT);
  });


