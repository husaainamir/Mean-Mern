var http=require("http");
var fs = require("fs");
http.createServer(function(req,res){
    console.log(req.method);
    if(req.method=="GET"){
       // res.writeHead(200,{"Context-TYpe":"text/plain"});
        res.writeHead(200,{"Context-TYpe":"text/html"});
        fs.createReadStream("./Form1_Http_post3.html","UTF-8").pipe(res);
    }
    else if(req.method=="POST"){
      var body="";
      req.on("data",function(chunk){
 body+=chunk;
 //console.log("data");
      });
      req.on("end",function(){
          //console.log("end");
             res.end(`data entered in form=>${body}`);
      });
    }

    
}).listen(3000);
         console.log("Form server listening on port 3000");