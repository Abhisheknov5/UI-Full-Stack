/*
1. os
- It is a server object the provides information about server.
- Server information includes details like
    - OS type
    - OS version
    - Memory Used
    - Memory Available
    - Processor Type [CPU]
    - CPU Architecture
    etc..
- OS object is defined in "os" module, which you have to import.
- Node JS uses "require()" method to import any module, as it uses module systems
  like, CommonJS, requireJS, UMD, AMD

Syntax:
        const os = require("os");

Members:

arch
availableParallelism
cpus
endianness
freemem
getPriority
homedir
hostname
loadavg
networkInterfaces
platform
release
setPriority
tmpdir
totalmem
type
userInfo
uptime
version
machine
constants
EOL
devNull

*/
const os = require("os");
for(var  property in os)
{
    console.log(property);
}

