const http = require("http"); // Import the http module to create an HTTP server
const mongoClient = require("mongodb").MongoClient; // Import the MongoClient class from the mongodb module

http.createServer((request, response) => { // Create an HTTP server with a callback function that runs when a request is received
    mongoClient.connect("mongodb://127.0.0.1:27017") // Connect to the MongoDB server
    .then(clientObject => { // If the connection is successful, execute the following code
        var database = clientObject.db("tododb"); // Select the "tododb" database
        database.collection("appointments").find({}).toArray() // Find all documents in the "appointments" collection and convert them to an array
        .then(documents => { // If the documents are retrieved successfully, execute the following code
            response.writeHead(200, {'content-type':'application/json'}); // Set the response header to indicate that the response contains JSON data
            response.write(JSON.stringify(documents)); // Convert the documents array to a JSON string and send it as the response body
            response.end(); // End the response
        })
        .catch(error => { // If there is an error retrieving the documents, log the error to the console
            console.log(error);
        });
    })
    .catch(error => { // If there is an error connecting to the MongoDB server, log the error to the console
        console.log(error.message);
    });

}).listen(2000); // Listen for incoming requests on port 2000

console.log(`Server Started http://127.0.0.1:2000`); // Log a message to the console indicating that the server has started
