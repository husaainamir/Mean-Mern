var fs=require('fs');
var path = require('path');



//var path=process.argv[2];
//fs.readdir(path,function(err,stats)
//{
   // if(stats.isFile())
   // {
   //     console.log('reg file');
   // }

   // if(stats.isDirectory())
    //{
      //  console.log('directory');
    //}

//console.log(stats);
//});
if(process.argv.length<=2)
{
    console.log("usage:"+__filename+"path/to");
    process.exit(-1);
}

var dirName = process.argv[2];
 
fs.readdir(dirName, function(err, items) {
    console.log(items);


    for (var i=0; i<items.length; i++) {
        var p = path.join(dirName , items[i]);
        var x=fs.statSync(p);
        //console.log(items[i]);
        if(x.isFile())
        {
        console.log("reg file");
        }
        if(x.isDirectory())
    {
        console.log('directory');
    }
    }
});