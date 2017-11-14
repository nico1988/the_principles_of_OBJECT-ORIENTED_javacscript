// 模块模式创建数据 IIFE 立即调用函数 创造对象
// 将变量暴露在顶端
var person = (function() {
    var age = 25;
    var name = "NICO";

    function getAge() {
        return age;
    }
    return {
        name: name,
        getAge: getAge
    }
}())
console.log(person.getAge());
console.log(person.name);