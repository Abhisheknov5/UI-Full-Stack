var express = require("express");  // Import the Express framework
var mongoClient = require("mongodb").MongoClient; // Import the MongoDB client
var cors = require("cors"); // Import the CORS middleware

var app = express(); // Create a new Express application
app.use(cors());  // Enable CORS for the app

app.use(express.urlencoded({
    extended:true       // Parse URL-encoded bodies
}));
app.use(express.json()); // Parse JSON bodies


var conStr = "mongodb://127.0.0.1:27017"; // MongoDB connection string

// GET endpoint to fetch all users
app.get("/users", (request, response)=>{
    // Connect to MongoDB and fetch all users
    mongoClient.connect(conStr).then(clientObject=>{
        var database = clientObject.db("tododb");
        database.collection("users").find({}).toArray().then(documents=>{
            // Send the array of users as the response
            response.send(documents);
            response.end();
        });
    });
}); 

// POST endpoint to register a new user
app.post("/register-user",(request, response)=>{
    // Extract user data from the request body
    var user = {
        "UserId":request.body.UserId,
        "UserName":request.body.UserName,
        "Password":request.body.Password,
        "Email":request.body.Email,
        "Mobile":request.body.Mobile
    };
    // Connect to MongoDB and insert the new user
    mongoClient.connect(conStr).then(clientObject=>{
        var database = clientObject.db("tododb");
        database.collection("users").insertOne(user).then(()=>{
            console.log("New User Added");
            response.redirect("/users"); // Redirect to the "/users" endpoint
        });
    });
})

// GET endpoint to fetch appointments for a specific user
app.get("/appointments/:userid", (request, response)=>{
     // Connect to MongoDB and fetch appointments for the specified user ID
    mongoClient.connect(conStr).then(clientObject=>{
        var database = clientObject.db("tododb");
        database.collection("appointments").find({UserId:request.params.userid}).toArray().then(documents=>{
            // Send the array of appointments as the response
            response.send(documents);
            response.end();
        });
    });
});

// POST endpoint to add a new task
app.post("/add-task", (request, response)=>{
    // Extract task data from the request body
    var task = {
        Id:parseInt(request.body.Id),
        Title:request.body.Title,
        Date:new Date(request.body.Date),
        Description:request.body.Description,
        UserId:request.body.UserId
    };
    // Connect to MongoDB and insert the new task
    mongoClient.connect(conStr).then(clientObject=>{
        var database = clientObject.db("tododb");
        database.collection("appointments").insertOne(task).then(()=>{
            console.log("Task Added");
            response.end();
        });
    });

});

// PUT endpoint to edit a task
app.put("/edit-task/:id", (request, response)=>{
    // Extract task ID from the request parameters
    var id = parseInt(request.params.id);
    // Connect to MongoDB and update the task with the specified ID
    mongoClient.connect(conStr).then(clientObject=>{
        var database = clientObject.db("tododb");
        database.collection("appointments").updateOne({Id:id},{$set:{Id:parseInt(request.body.id), Title:request.body.Title, Date: new Date(request.body.Date), Description: request.body.Description, UserId: request.body.UserId}}).then(()=>{
            console.log("Task Updated");
            response.end();
        })
    })
})

// DELETE endpoint to delete a task
app.delete("/delete-task/:id", (request, response)=>{
    // Extract task ID from the request parameters
    var id = parseInt(request.params.id);
    // Connect to MongoDB and delete the task with the specified ID
    mongoClient.connect(conStr).then(clientObject=>{
        var database = clientObject.db("tododb");
        database.collection("appointments").deleteOne({Id:id}).then(()=>{
            console.log("Task Deleted");
            response.end();
        })
    })
})

app.listen(6060);  // Start the server on port 6060
console.log("Server Started : http:/127.0.0.1:6060"); // Log a message indicating the server has started
