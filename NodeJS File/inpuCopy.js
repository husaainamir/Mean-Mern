/*var fs= require("fs");
fs.link('input3.txt','input-copy.txt',function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("File copied successfully");
    }
});*/

var fs= require("fs");
fs.unlink('New Text Document - Copy (3).txt',function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("File deleted successfully");
    }
});