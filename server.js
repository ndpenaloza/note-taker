// Dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes");

// PORT
const PORT = process.env.PORT || 8888;

// Express
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Listener
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT + "!");
});