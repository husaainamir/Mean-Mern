var http=require("http");
var data=require("./input.json");
http.createServer(function(req,res)
{
   if(req.url==="/") 
   res.end(JSON.stringify(data));
   else if(req.url==="/instock")
   {
       listInstock(res);
   }
   else if(req.url==="/onorder")
   {
       listOnBackOrder(res);
   }
   else
   {
       res.end("404 error...data not found");

   }
}).listen(3000);
console.log("server listening to this port 3000");
function listInstock(res)
{
    var instock= data.filter(function(item)
{
     return item.avail=="in stock";
});
 res.end(JSON.stringify(instock))
}


function listOnBackOrder(res)
{
    var onorder=data.filter(function(item)
{
     return item.avail=="on back order";
});
 res.end(JSON.stringify(onorder));
}
