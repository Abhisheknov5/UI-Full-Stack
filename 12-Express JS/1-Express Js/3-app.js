var express = require("express");

var app = express();

app.get("/", (request, response) => {
    response.send("<h2>Amazon.in</h2>");
});

app.get("/mobiles", (request, response)=>{
    response.send("<h2>Mobiles Home</h2><p>You are watching mobiles page</p>");
});

app.get("/watches", (request, response)=> {
    response.send("<h2>Watches Home</h2><p>You are in Watches page.</p>");
});

app.get("/products", (request, response)=> {
     var products = [
        {Id:1, Name:"TV", Price:45000.44, Category:"Electronics"},
        {Id:2, Name:"Mobile", Price:12000.44, Category:"Electronics"},
        {Id:3, Name:"Shoe", Price:2400.44, Category:"Footwear"}
     ];
     response.send(products);
});

app.get("/products/:id", (request, response)=> {
    var products = [
        {Id:1, Name:"TV", Price:45000.44, Category:"Electronics"},
        {Id:2, Name:"Mobile", Price:12000.44, Category:"Electronics"},
        {Id:3, Name:"Shoe", Price:2400.44, Category:"Footwear"}
     ];
    var id= request.params.id;

    response.send(products.find(product=> product.Id==id));
});
app.get("/categories/:category", (request, response)=>{
    var products = [
        {Id:1, Name:"TV", Price:45000.44, Category:"Electronics"},
        {Id:2, Name:"Mobile", Price:12000.44, Category:"Electronics"},
        {Id:3, Name:"Shoe", Price:2400.44, Category:"Footwear"}
     ];
     response.send(products.filter(product=> product.Category==request.params.category));

})


app.get("/c*", (request, response)=>{
    response.send("<h2>Custom Route</h2><p>Do you mean Cameras?");
});

app.get("*", (request, response)=>{
    response.send("<h2>Not Found</h2><p>Page you requested Not found</p>");
});

app.listen(5050);
console.log(`Server Started : http://127.0.0.1:5050`);