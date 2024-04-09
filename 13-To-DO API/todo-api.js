var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var app = express();
app.use(cors());

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

var conStr = "mongodb://127.0.0.1:27017";

app.get("/users", (request, response)=>{
    mongoClient.connect(conStr).then(clientObject=>{
        var database = clientObject.db("tododb");
        database.collection("users").find({}).toArray().then(documents=>{
            response.send(documents);
            response.end();
        });
    });
});

app.post("/register-user", (request, response)=>{
    var user = {
        UserId: request.body.UserId,
        UserName: request.body.UserName,
        Password: request.body.Password,
        Email: request.body.Email,
        Mobile: request.body.Mobile
    };
    mongoClient.connect(conStr).then(clientObject=>{
        var database = clientObject.db("tododb");
        database.collection("users").insertOne(user).then(()=>{
            console.log("New User Added");
            response.redirect("/users");
        });
    });
});

app.listen(6060);
console.log("Server Started : http://127.0.0.1:6060");