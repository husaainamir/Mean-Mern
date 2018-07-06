var http= require ('http');
var server=http.createServer(function(request,response){
    console.log('request starting..');
    //respond
    console.log(request.method);
    if(request.url=="/hello"){
        response.write('hello client');
        response.end();
    }
if(request .url=="/lnt"){
    response.write(JSON.stringify({userName:"abc",age:16}));
}
});
server.listen(3001);
console.log('Server running at http://127.0.0.1:3001/');