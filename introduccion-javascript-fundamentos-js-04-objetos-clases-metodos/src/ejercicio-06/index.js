class Rectangle {
    constructor(widht, height) {
        this.widht = widht
        this.height = height
    }
    calculateArea() {
        return this.widht * this.height
    }
}
class Square extends Rectangle {
    constructor(sideLength){
        super(sideLength,sideLength)
    }
}
const square = new Square(7)
console.log('El area del cuadrado es: ',square.calculateArea())
