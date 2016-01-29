var fs = require("fs");
fs.readFile("createServer.js", function(err,data){
	if(err){
		console.log("read error"+err);
	}else{
		console.log("the data : \n"+data);
	}
});
console.log("program ended");