// const fs =require("fs")
// fs.writeFileSync("newNotes.js","console.log(`Hellooo world!!`)");
// fs.appendFileSync("notes.txt","How are YOu!")    

// const calc=require("./util")

// console.log(calc.add(2,3))
// console.log(calc.sub(5,1))
// console.log(calc.mul(4,2))
// console.log(calc.div(4,2))

// var validator=require("validator")
// console.log(validator.isEmail("muthu@gmail.com"));

const EventEmitter = require('events');
const logEvents = require('./logEvents');
const path = require('path');

class Emitter extends EventEmitter{ };

const myEmitter = new Emitter();

myEmitter.on('log',(msg)=>logEvents(msg))

myEmitter.emit('log',"Log Submitted","notes.txt")



