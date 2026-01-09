const { createServer } = require('node:http')
const fs = require('fs')

const hostname = "127.0.0.1"
const port = 3000


const server = createServer((request, response)=>{
    console.log("request has been made", request.url);
    console.log("URL part: "+request.url + "::: Method part: ", request.method);
    
    response.statusCode = 200;
    if(request.url == "/"){
        response.end("Finding the most difficult task of today!");

    }else if(request.url == "/app"){
        response.end("Hey look we have a new app in town!");
    } else {
        response.writeHead(200, {"Content-type" : "text/html"})
        fs.createReadStream(__dirname + "/index.html").pipe(response)
    }

})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})