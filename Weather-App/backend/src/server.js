// Import necessary modules and dependencies
// Express framework for server
const express = require("express");

// Axios framework for server
const axios = require("axios");
// Cors for handling Cross-Origin Resource Sharing
const cors = require("cors");

// Creating an Express application
const app = express();

// Import Open Weather APIs
const { fetchCurrWeather, fetchCurrAQI } = require("./owConfig");

// Port number for the server to listen on
const port = 8000;

// Middleware setup
// Enable CORS for all routes
app.use(cors());

// Parse incoming JSON data
app.use(express.json());

// Test endpoint. Define endpoint for a simple ping route.
app.get("/ping", (req, res) => {
  res.json({
    message: "Ping Success!",
  });
});

// Open weather
const lat = "44.34";
const lon = "10.99";

app.get("/weather", (req, res) => {
  const data = axios.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=aa06c5bd726a3a36aaa80f484396993b");
  res.send(data);
  console.log(data);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

// Check if the example file exists
/*
 *const fs = require("fs");
 *fs.access(dbPath, fs.constants.F_OK, (err) => {
 *  if (err) {
 *    console.error(`Database file not found at path: ${dbPath}`);
 *    process.exit(1); // Exit the application if the file is not found
 *  } else {
 *    console.log(`Database file found at path: ${dbPath}`);
 *    // Proceed with connecting to the database
 *  }
 *});
 */

// Connect to an example database. Remove if not necessary
/*
 *let db = new sqlite.Database(dbPath, (err) => {
 *  if (err) {
 *    console.log(err); // Log any errors that occur during database connection
 *  } else {
 *    console.log(`Connected to database ${dbPath}`);
 *  }
 *});
 */
