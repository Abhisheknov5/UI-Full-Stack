const os = require("os");
console.log(os.cpus());
console.log(os.freemem());
console.log("Free Memory : " + (os.freemem()/1024) + "KB");
console.log("Free Memory : " + (os.freemem()/1024) + "MB");
