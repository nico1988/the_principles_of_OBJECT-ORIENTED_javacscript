function Person(name) {
    this.name = name;
}
Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
    },
    toString: function() {
        return "[Person" + this.name + "]"
    }
}
var person1 = new Person("nico1");
var person2 = new Person("nico2");

console.log(person1 instanceof Person);
console.log(person1.constructor == Person);
console.log(person1.constructor == Object);
console.log(Person.constructor == Object);

Object.freeze(person1);
Person.prototype.sayHi = function() {
    console.log("hi");
}
person1.sayHi();
console.log(Person.prototype);