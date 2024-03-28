/*
 You can also configure a simple connection without webserver.
- Node App connects with mongodb and returns data, which is not sent a response to client. It is just used on server.
*/

var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://127.0.0.1:27017").then(clientObj=>{
    var database = clientObj.db("tododb");

    database.collection("appointments").find({}).toArray().then(documents=>{
        console.log(documents);
    })
})

/*
Note: You can use various web debuggers for testing API requests and data.
            - postman
            - fiddler
            - swagger etc..
*/

