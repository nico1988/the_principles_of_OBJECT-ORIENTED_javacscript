var object = {};
var prototype = Object.getPrototypeOf(object);
console.log(Object.prototype == prototype);
console.log(Object.prototype.isPrototypeOf(object));
console.log(object.toString());
object.toString = "abc";
console.log(object.toString);
delete object.toString;
console.log(object.toString);