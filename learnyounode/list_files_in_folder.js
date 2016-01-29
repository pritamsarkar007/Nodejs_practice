var fs = require("fs");
var path = require("path");
var extension = process.argv[3]
fs.readdir(process.argv[2],function(err, list_of_files){
	for(i=0;i<list_of_files.length;i++){
		if(extension===path.extname(list_of_files[i])){
			console.log(list_of_files[i]);
		}
	}
}, extension,path);
console.log("main fucntion finished");