var http=require("http");
var fs=require("fs");
var qs=require("querystring");
var fahren;

var MongoClient=require('mongodb').MongoClient;


http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
        res.end(`<!Doctype html>
        <html>
            <head>
                <title>Temperature convertion</title>
            </head>
            <body>
                <form action="/" method ="post">
                    <lable>Fahren</lable>
                    <input type="text" id="fahren" name="fahren" placeholder="Fahrenet temperature" required/>
                    <br/>
                    <lable>celcius</lable>
                    <input type="text" id="celcius" name="celcius"  required readonly/>
                    <br/>
                    <button>convert</button>
                </form>
            </body>
        </html>`);
    }
    else if(req.method=="POST")
    {
       
        var body="";
        req.on("data",function(chunk)
    {
        body+=chunk;
        //console.log(data);
    });
    req.on("end",function()
    {
    var obj=qs.parse(body);
    console.log(obj.fahren);
    fahren=parseFloat(obj.fahren);
    celcius=(5/9)*(fahren-32.0);

    res.end(`<!Doctype html>
    <html>
        <head>
            <title>Temperature convertion</title>
        </head>
        <body>
            <form action="/" method ="post">
                <lable>Fahren</lable>
                <input type="text" id="fahren" name="fahren" placeholder=${fahren} required/>
                <br/>
                <lable>celcius</lable>
                <input type="text" id="celcius" name="celciu" value=${celcius} required readonly/>
                <br/>
                <button>convert</button>
            </form>
        </body>
    </html>`);

    MongoClient.connect('mongodb://127.0.0.1:27017/website',function(err,db)
{
    if(err)
    {
        console.log(err);
    }
    var insertdoc = [{ Celcius:celcius,Farhenite:fahren}];
    db.collection('temprature').insertMany(insertdoc,function(err,result)
    {
        if(err) throw err;
        {
        console.log("document inserted sucessfully");
        }
    });
       
    db.close();
    
});

    //res.end("fahren = "+fahren.toString()+" celsius= "+celcius.toString());
    });
    
    }
}).listen(3000);