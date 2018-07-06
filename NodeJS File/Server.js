var http=require("http");
var fs= require("fs");
var path=require("path");
http.createServer(function(req,res){
    console.log('$(req.method)request for $(req.url}')
{
    var csPath=path.join(__dirname,'public,require.url');
    var filesStream= fs.createReadStream(cssPath);

 if(req.url.match("birds.jpg")){
    var imgPath=path.join(__dirname,'public',req.url);
    var ImgStream=fs.createReadStream(imgPath);
}
else{
    res.end("404 File Not Found");
}
}}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
