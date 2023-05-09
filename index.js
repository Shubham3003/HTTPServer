const http=require("http")

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hello from home sides");
    } else if(req.url=="/about"){
        res.end("Hello from about sides");
    } else if(req.url=="/contact"){
        res.end("Hello from contact sides");
    } else {
        res.writeHead(404,{"content-type": "text/html" });
        res.end("<h1> 404 error pages,page doesnt exist</h1>");
    }

});
server.listen(8000, "127.0.0.1",() => {
    console.log("Server is running at port 8000...");
 });