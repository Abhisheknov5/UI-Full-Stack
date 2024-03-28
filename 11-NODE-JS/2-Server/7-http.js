/*
 Http Object:-

- It is used to configure a web server.
- Web server resembles both hardware and software.
- It satisfies the client request by sending and receving data.
- It uses request and response objects.

Process Flow:

  Client Request => HttpServer => HttpHandler => Routing Engine => Route Table => Resources in Application => Resource is loaded into Browser => Parsed => Rendered => Painted

Syntax:
        const  http = require("http");

        http.createServer(function(request, response){
              request.members;
              response.members;
        }).listen(port)
*/

const http = require("http");
http.createServer((request, response)=>{
  response.write("<h1>Welcome to Node Server</h1> - <p>Status Running..</p>");
  response.end();

}).listen(3030);
console.log(`Server Start http://127.0.0.1:3030`);
