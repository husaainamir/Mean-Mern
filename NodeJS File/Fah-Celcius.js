var http=require("http");

var data=require("./Fah-Celcius1.js");

http.createServer(function(req,res)
{
    if(req.url==="/temperature")
    {
        var res1=data.cToF(60);
        res.write("Temperatue = "+res1.toString());
        res.end();
    }
    else if(req.url==="/Faren")
    {
        var res1=data.fToC(60);
        res.write("Faren = "+res1.toString());
        res.end();
    }
    else if(req.url==="/rectangle")
    {
        var res1=data.rec(2,3);
        res.write("Area of rectangle = "+res1.toString());
        res.end();
    }
    else
    {
        res.end("404 error...Data not found");
    }
}).listen(3000);

console.log("server listening on port 3000");