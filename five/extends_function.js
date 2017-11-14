function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}
Rectangle.prototype.getArea = function() {
    return this.length * this.width;
}
Rectangle.prototype.toString = function() {
    return "[Rectangle" + this.length + "x" + "this.width" + "]";
}

function Squere(size) {
    Rectangle.call(this, size, size);
}
Squere.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Squere,
        writable: true
    }
})
var Squere = new Squere(6);
console.log(Squere.length);
console.log(Squere.width);
console.log(Squere.getArea());