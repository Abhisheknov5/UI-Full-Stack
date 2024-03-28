const http = require("http");

http.createServer((request, response)=>{
    response.write(JSON.stringify([{"Name":"TV", "Price":46000.44, "Stock":true},{"Name":"Mobile", "Price":12000.44, "Stock":true}]));
    response.end();
}).listen(3000);
console.log(`Server Started http://127.0.0.1:3000`);