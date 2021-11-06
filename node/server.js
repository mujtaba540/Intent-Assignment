var http=require('http');
var url=require('url');
var fs=require('fs');

function renderHtml(name,res){
fs.readFile(name,null,function(error,data){
    if(error){
        res.writeHead(404);
        res.write("masla");
    }else{
        res.write(data);
    }
    res.end();
});
}

function onRequest(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
var path=url.parse(req.url).pathname;

switch (path){
case '/':
    renderHtml('content.html',res);
    break;
default:
    res.write("Masla");
    res.end();
    break;
}

}

http.createServer(onRequest).listen(8000);