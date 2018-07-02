var http=require("http");
//var fs=require("fs");
var net=require("./NetPay_cal.js");
var qs=require("querystring");
var Bpay;
var grosspay;
var Npay;

var MongoClient=require('mongodb').MongoClient;


http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
        res.end(`<!Doctype html>
        <html>
            <head>
                <title>Employee Information</title>
            </head>
            <body>
            <h1>Employee Information</h1>
            
                <form action="/" method ="post">
                    <lable>EmpId</lable>
                    <input type="text" id="Eid" name="Eid" placeholder="enter emp id" required/>
                    <br/>
                    <lable>EmpName</lable>
                    <input type="text" id="Ename" name="Ename" required/>
                    <br/>
                    <lable>BasicPay</lable>
                    <input type="text" id="Bpay" name="Bpay"required/>
                    <br/>
                    <lable>NetPay</lable>
                    <input type="text" id="Bpay" name="Npay"required readonly/>
                    <br/>
                    <button>submit</button>
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
    console.log(obj.Bpay);

    var Eid=parseInt(obj.Eid);
    var Ename=obj.Ename;
    
    Bpay=parseFloat(obj.Bpay);
  var result = net.NetpayCalculation(Bpay);
  console.log(result);
   
    

    res.end(`<!Doctype html>
    <html>
        <head>
            <title>Employee Information</title>
        </head>
        <body>
            <form action="/" method ="post">
            <lable>Emp Id</lable>
            <input type="text" id="Eid" name="Eid" placeholder="${Eid}" required/>
            <br/>
            <lable>Emp Name</lable>
            <input type="text" id="Ename" name="Ename" placeholder="${Ename}"  required />
            <br/>
            <lable>Basic Pay</lable>
            <input type="text" id="Bpay" name="Bpay" placeholder="${Bpay}" required />
            <br/>
            <lable>NetPay</lable>
            <input type="text" id="Npay" name="Npay" value="${result}" readonly/>
            </form>
        </body>
    </html>`);

    MongoClient.connect('mongodb://127.0.0.1:27017/sample',function(err,db)
{
    if(err)
    {
        console.log(err);
    }

var insertdoc = [{ EmpId:Eid,Ename:Ename,BasicPay:Bpay,NetPay:result}];
    db.collection('Employee_Details').insertMany(insertdoc,function(err,result)
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
console.log("the server is running");



