var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent',functio   n(msg){
	console.log(msg);
});

myEmitter.emit('someEvent', 'msg')
