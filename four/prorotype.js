var object = {};
var prototype = Object.getPrototypeOf(object);
console.log(Object.prototype == prototype);
console.log(Object.prototype.isPrototypeOf(object));