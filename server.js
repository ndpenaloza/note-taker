// Dependencies
const express = require("express");
const path = require("path");

// PORT
const PORT = process.env.PORT || 8888;

// Express
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "/public"));


// the Listener
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT + "!");
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});