var events =require('events');
var eventEmitter= new events.EventEmitter();
evenEmitter.on('sayHi',function(){
    console.log('hi...........',);
});
eventEmitter.on('sayHello',function(){
    console.log('Hello............');
});
console.log('before sayHi');
evenEmitter.emit('sayHi');
console.log('after sayHi');
console.log('before sayHello');
evenEmitter.emit('sayHello');
console.log('after sayHello');
