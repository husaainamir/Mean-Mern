var fs =require('fs');// synchronous read function example
var data=fs.readFileSync('input.txt');
console.log("Synchronous read:"+data.toString());
console.log("Program Ended");