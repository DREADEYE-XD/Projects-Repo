// Import necessary modules and dependencies
const express = require("express"); // Express framework for server
const cors = require("cors"); // Cors for handling Cross-Origin Resource Sharing
const openai = require("./openAI/config/openai.js"); // OpenAI library for AI-based interactions
const sqlite = require("sqlite3").verbose(); // SQLite for database operations
const app = express(); // Creating an Express application
const port = 8000; // Port number for the server to listen on
//const model_trainer = require("./openAI/trainer/dataSet-v1.0.jsonl")
// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON data

// Define the path to the SQLite database file
const dbPath = `${__dirname}/database/country.db`;

// Check if the database file exists
const fs = require("fs");
fs.access(dbPath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`Database file not found at path: ${dbPath}`);
    process.exit(1); // Exit the application if the file is not found
  } else {
    console.log(`Database file found at path: ${dbPath}`);
    // Proceed with connecting to the database
  }
});

// Connect to the SQLite database
let db = new sqlite.Database(dbPath, (err) => {
  if (err) {
    console.log(err); // Log any errors that occur during database connection
  } else {
    console.log(`Connected to database ${dbPath}`);
  }
});

// Define endpoint for a simple ping route
app.get("/ping", (req, res) => {
  res.json({
    message: "Ping Success!",
  });
});

// Endpoint to retrieve data from the 'CountryData' table in the database
app.post("/viewCountryData", (req, res) => {
  // Perform a SELECT query to retrieve all data from 'CountryData'
  db.all(`SELECT * FROM CountryData`, (err, rows) => {
    if (err) {
      throw err; // Throw an error if there's an issue with the query
    }

    // Check if data rows were returned
    if (rows.length > 0) {
      console.log(rows); // Log the retrieved data
      res.status(200).json({ data: rows }); // Send the retrieved data as a JSON response
    } else {
      res.status(400).json({ message: "No data found" }); // Send an error message if no data found
    }
  });
});

//async function main(){
//  let file = await openai.files.create({
//    file: fs.createReadStream(model_trainer),
//    purpose: 'fine-tuning',
//  });
//
//  let fineTune = await openai.fineTuning.jobs.create({ 
//    model: 'gpt-3.5-turbo-1106', 
//    training_file: `${model_trainer}`.id
//  });
//}
//
//main().catch((err) => {
//  console.error(err);
//  process.exit(1);
//});
//Fine Tuner


// Endpoint to retrieve data from the 'alertDump' table in the database
app.post("/viewAlertDump", (req, res) => {
  // Perform a SELECT query to retrieve all data from 'alertDump'
  db.all(`SELECT * FROM alertDump`, (err, rows) => {
    if (err) {
      throw err; // Throw an error if there's an issue with the query
    }

    // Check if data rows were returned
    if (rows.length > 0) {
      //console.log(rows); // Log the retrieved data
      res.send(rows);
      res.status(200)
      //.json({ data: rows }); // Send the retrieved data as a JSON response
    } else {

      res.send("No Data Found");
      res.status(400) // Send an error message if no data found
    }
  });
});

// Endpoint to retrieve data from the 'alertDump' table in the database
app.post("/viewAlertDump/custom", (req, res) => {
  // Perform a SELECT query to retrieve all data from 'alertDump'
  db.all(`SELECT * FROM AlertDump WHERE LOWER(Object) LIKE '%cpu%' GROUP BY node_hint ORDER BY 2 desc`, (err, rows) => {
    if (err) {
      throw err; // Throw an error if there's an issue with the query
    }

    // Check if data rows were returned
    if (rows.length > 0) {
      //console.log(rows); // Log the retrieved data
      res.send(rows);
      res.status(200)
      //.json({ data: rows }); // Send the retrieved data as a JSON response
    } else {

      res.send("No Data Found");
      res.status(400) // Send an error message if no data found
    }
  });
});

app.post("/chat", async (req, res) => {
  const question = req.body.question;

  try {
    // Use OpenAI's GPT-3 model to generate a response to the user's question
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [{"role": "system", "content": "You are a helpful SQLite Database assistant."},{ role: "user", content: question }],
      max_tokens: 4000,
      temperature: 0,
    });

    const answerContent = response?.choices?.[0]?.message?.content.replace(/```json([\s\S]*)```/, '$1');;
    console.log("Response: " + answerContent);
    if (answerContent) {
      // Parse the answer content as JSON
      const answerJson = JSON.parse(answerContent);
      console.log(answerJson);
      // Send the JSON response back to the frontend
      res.json({
        answer: answerJson,
        prompt: question,
      });
    } else {
      res.status(500).json({ error: "Unable to parse the answer content." });
    }
  } catch (error) {
    console.error("Error processing chat request:", error);
    
    res.status(500).json({ error: "Internal server error." });
  }
});


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

// Endpoint for handling chat requests and interacting with OpenAI
// app.post("/chat", (req, res) => {
  //   //console.log("Req: " + req);
//   const question = req.body.question; // Extract the user's question from the request body


//   // Use OpenAI's GPT-3 model to generate a response to the user's question
//   openai.chat.completions
//     .create({
//       model: "gpt-3.5-turbo-1106",
//       messages: [{ role: "user", content: question }],
//       max_tokens: 800,
//       temperature: 1,
//     })
    
//     .then((response) => {
//       //console.log((response.choices[0])) // Log the response received from OpenAI
//       return response?.choices?.[0]; // Return the first choice of response
//     })
//     .then((answer) => {
//       //console.log({ answer }); // Log the generated answer
//       // Process the answer by splitting, filtering, and trimming the content
//       const array = answer.message.content
//         ?.split("\n")
//         .filter((value) => value)
//         .map((value) => value.trim());

//       return array; // Return the processed answer
//     })
//     .then((answer) => {
//       // Send the processed answer and the user's question back as a JSON response
//       res.json({
//         answer: answer,
//         prompt: question,
//       });
//     });
//   //console.log({ question }); // Log the user's question from the request {remove if not required}.
// });

