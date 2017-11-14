// 构造函数的私有成员

function Person(name) {
    var age = 28;
    this.name = name;
    this.getAge = function() {
        return age;
    }
}
var person = new Person("nico");
console.log(person.age);
console.log(person.name);
console.log(person.getAge(0));
person.age = 33;
console.log(person.getAge());