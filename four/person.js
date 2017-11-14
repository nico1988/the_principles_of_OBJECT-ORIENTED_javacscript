function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function() {
    console.log(this.name);
}
try {
    var person1 = new Person("nico1");
    var person2 = new Person("nico2");
} catch (e) {
    console.log(e);
}
person1.sayName();
person2.sayName();