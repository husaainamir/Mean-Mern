var http=require("http");
var fs = require("fs");
var qs= required(querystring);
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
          var obj =qs.parse(body);
          console.log("obj");
          var objString=JSON.stringify(obj);
          res.writeHead(200,{"Content-Type":"text/html"});
          res.end(`
              <!DOCTYPE html>
<html>
<head>
<title>Form results</title>
</head>
<body>
	<h1>Your Form result</h1>
<p>${objString}</p>

</body>
</html>
          `);
          //console.log("end");
             //res.end(`data entered in form=>${body}`);
      });
    }

    
}).listen(3000);
         console.log("Form server listening on port 3000");