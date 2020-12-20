// Dependencies
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
ç
const noteFile = path.join(__dirname, "../db/db.json");

// Routing
module.exports = (app) => {
  // Get notes 
  app.get("/api/notes", (request, response) => {
    // write code  
  });

  // Post note
  app.post("/api/notes", (request, response) => {
    // write code
  });

  // Delete note object
  app.delete("/api/notes/:id", (request, response) => {
    // write code
  });
};