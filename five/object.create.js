var person1 = {
    name: "nico1",
    sayName: function() {
        console.log(this.name);
    }
}
var person2 = Object.create(person1, {
    name: {
        value: "nico2"
    }
})
console.log(person1.sayName());
console.log(person2.sayName());
console.log(person1.isPrototypeOf(person2));

var nakeObject = Object.create(null);