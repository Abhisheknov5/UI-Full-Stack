/*
2. path
- It provides properties and methods that can access details about files on server.
- File details include
    - Name
    - Extention
    - Location [path]
    - MIME type
    - Root Directory
    etc..

Members:
resolve
normalize
isAbsolute
join
relative
toNamespacedPath
dirname
basename
extname
format
parse
sep
delimiter
win32
posix
_makeLong

Syntax:
    const path = require("path");
   
    console.log(path.extname("D:\\pic.jpg"));        => .jpg
*/
const path = require("path");
for(var property in path){
    console.log(property);
}