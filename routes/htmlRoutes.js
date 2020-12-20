// Dependencies 
const path = require("path");

module.exports = (app) => {
// Route HTML
    app.get("./notes", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/index.html"));
    });
 };


