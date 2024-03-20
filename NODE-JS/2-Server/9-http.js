/*
Note: The default response from server is always a string.
      You have to parse the data into string.
      [ JSON.stringfy(data) ]


- Http object provides "writeHead()" which defines the status codes and the content type to deliver.
- It is used to configure a response header.
- A response header comprises of various details about the response sent to client
        a) Status Code
        b) Content Type
        c) Request Method
        d) Request URL
        e) Remote Address
        etc..

Syntax:
    response.writeHead(statusCode, { 'content-type': 'text/html' } )

FAQ: How a web server communicates with Database Server?
Ans:  
- You have to setup database drivers, which act as a middleware to handle communication.
- Every database have its own drivers library, which you have to install in your project.

            >npm install  mongodb  --save
*/
const http = require("http");

http.createServer((request, response)=>{
    response.writeHead(200, {'content-type':'application/json'})
    response.write(JSON.stringify([{"Name":"Mobile", "Price":46000.44, "Stock":true},{"Name":"Mobile", "Price":12000.44, "Stock":true}]));
    response.end();
}).listen(6600);
console.log(`Server started http://127.0.0.1:6600`);