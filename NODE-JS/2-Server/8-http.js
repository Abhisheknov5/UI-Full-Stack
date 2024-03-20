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
*/
const http = require("http");

http.createServer((request, response)=>{
    response.write(JSON.stringify([{"Name":"TV", "Price":46000.44, "Stock":true},{"Name":"Mobile", "Price":12000.44, "Stock":true}]));
    response.end();
}).listen(3000);
console.log(`Server Started http://127.0.0.1:3000`);