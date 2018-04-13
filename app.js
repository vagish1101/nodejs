var http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var fs = require('fs');
var util = require('util');

let Student = function(name){
    this.name = name;
}

util.inherits(Student, events.EventEmitter);

var vagish = new Student('Vagish');
vagish.on('score' , function(marked){
    console.log(`${vagish.name} has scored ${marked}`)
})
vagish.emit('score', 95)
eventEmitter.on('clicked', ()=>{
  //  console.log('something is clicked');
})

eventEmitter.emit('clicked');
http.createServer(function (req, res) {
   // console.log('hii');
    let body = 'thi';
    let content_length = body.length;
    res.writeHead(200 , {
            'Content-Type':'text/plain',
            'Content-Length': content_length
        })
    res.end('VAGISH');
}).listen(3000)

console.log('Server is running')

