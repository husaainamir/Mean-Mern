

const express =require('express');
const app=express();
app.get("/",function(request,response)
{
    response.write("Hello world");
    response.end();
})

app.listen(3001);
console.log("server started a song at 3001");  


/* const express = require('express');
const app=express();

app.get("/",function(request,response)
{
    response.write("Hello world");
    response.end();
})


app.get("/lnt",function(request,response)
{
    response.write("Hello lnt people");
    response.end();

})
app.listen(3000); */


