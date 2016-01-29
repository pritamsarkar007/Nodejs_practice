var $_http = require("http");
var url = process.argv[2];
var userName = process.argv[3];
var password = process.argv[4];
var options = {
       //rl:"http://"+userName + ":"+ password + "@personatestuser.org"
       url:"http://stackoverflow.com/"
    };
$_http.get(options,callbackFunction);
function callbackFunction(response){
	console.log("got response : "+ response.headers);
	response.setEncoding('utf8');
	response.on("data",successHandler);
	response.on("error",errorHandler);
	response.on("end", function(data){
		console.log("Inside end : "+ data);
	});
}
function successHandler(data){
	console.log(data);
}
function errorHandler(err){
	console.log(err);
}