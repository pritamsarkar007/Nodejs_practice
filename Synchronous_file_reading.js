var fs = require("fs");
var data = fs.readFileSync("createServer.js");
console.log("data is : \n"+ data);
console.log("program ended");