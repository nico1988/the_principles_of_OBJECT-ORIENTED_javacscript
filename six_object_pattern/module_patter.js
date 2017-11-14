// 模块模式创建数据 IIFE 立即调用函数 创造对象
var person = (function() {
    // private data
    var age = 28;
    return {
        // public data
        name: "nico",
        getAge: function() {
            return age;
        },
        growOlder: function() {
            age++;
            console.log(age);
        }
    }
}())
console.log(person.name);
console.log(person.getAge());
console.log(person.growOlder());
console.log(person.age);