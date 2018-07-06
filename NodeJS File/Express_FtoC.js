
const express=require('express');
const app=express();
var as=require("./Express1.js");
app.get("/tempConv/FtoC/:value",function(request,response)
{
    console.log(request.params.value);

    var a=parseFloat(request.params.value)
   var result =as.FtoC(a)
     response.write(" the result is:"+result);
    response.end();
})
app.get("/lnt",function(request,response)  //Express_FtoC.js
{
    response.write("Hello lnt people");
    response.end();

})
app.get("/lnt",function(request,response)  //Express_FtoC.js
{
    console.log(request.url);
    console.log(request.method);
    response.write("Hello lnt people");
    response.end();
})
app.listen(3000);
console.log("server started a song at 3000");

