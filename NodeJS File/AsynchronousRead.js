var fs = require("fs");
//Asynchronous read
fs.readFile('input.txt',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log("Asynchronous read: "+ data.toString());
    }
});