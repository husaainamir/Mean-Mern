var http=require("http");
//var fs=require("fs");
var qs=require("querystring");
var celcius;
var fahren;
http.createServer(function(req,res){
    if (req.method=="GET"){
    res.end(`<!DOCTYPE html>
    <html>
            <head>
                        <title>Temperature conversion</title>
                        </head>
                        <body>
        <form action="/" method="post">
        <label>fahren</label>
        <input type="text" id="fahren" name="fahren" 
           placeholder="Fahrenheit temperature " />
        <button>send</button>
        </form> 
        </body>  
        </html>      
        `);   
    }
            else if(req.method=="POST")
            {
          var body="";
          req.on("data",function(chunk){
              body+=chunk;
              console.log("data");
          });
          req.on("end",function(){
              var obj=qs.parse(body);
              console.log(obj.fahren);
              fahren=parseFloat(obj.fahren);
              celcius =(5/9)*(fahren-32.0);
              res.end("Fahren=" +fahren.toString() +"Celcius=" +celcius.toString());
          });
        }
    }).listen(3000);
    console.log("Form server listening on port 3000");
    


