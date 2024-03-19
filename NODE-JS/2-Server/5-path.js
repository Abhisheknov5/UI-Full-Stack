const path = require("path");
var uploadFile = "D:\\Images\\profile.jpg";

if(path.extname(uploadFile)===".jpg"){
    console.log(`File Uploads Successfully..`);
} else {
    console.log(`You can upload only JPEG files`);
}
