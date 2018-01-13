var http = require('http');
var fs = require('fs');
var host = '127.0.0.1';
var port = '1338';
var server = http.createServer((req, res)=>{
    console.log('server Started');
    console.log(req.url);
    fs.readFile('./'+req.url , (error , data)=>{
        if(error){
            res.writeHead(404 , {'Content-type': 'text/plain'});
            res.end('this page does not exist');
        } else {
            res.writeHead(200 , {'Content-type': 'application/json'});
            res.end(data);
        }
    })

})
console.log('this will print first');
server.listen(port, host, ()=>{
   console.log(`${port} with host ${host} is been used`)
})

