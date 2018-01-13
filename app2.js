// require('./greet.js')();
// require('./greet.js').greet();

// var emitter = require('./emitter');
var emitter = require('events');
var config = require('./config');

var emtr = new emitter();
emtr.on(config.events.GREET, function() {
    console.log('Somewhere someone said hello')
})
emtr.on(config.events.GREET , function(){
    console.log('A greet occur')
})

console.log('hieee');
emtr.emit(config.events.GREET);

