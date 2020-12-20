// Dependencies
const express = require("express");

// Express
const app = express();

// Port
const PORT = process.env.PORT || 8888;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "./public"));

// // Routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Listener
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT + "!");
});