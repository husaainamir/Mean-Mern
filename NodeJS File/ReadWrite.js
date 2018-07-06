var fs = require('fs');

//create a readable stream
var readerStream=fs.createReadStream('input.txt');
//Create a writable stream 
var writeStream=fs.createWriteStream('Output.txt');
//pipe the read and write operartions;
readerStream.pipe(writeStream);
console.log('program ended');      