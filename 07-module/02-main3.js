#!/usr/bin/node

var Circle = require('./02-export-object.js');

var c = new Circle(10);

console.log('diameter:',c.diameter());;
console.log('circumference:',c.circumference());
console.log('area:',c.area());

