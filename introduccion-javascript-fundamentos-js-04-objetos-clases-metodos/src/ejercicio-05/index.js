// Escribe tu código aquí:
class Rectangle {
    constructor(widht, height) {
        this.widht = widht
        this.height = height
    }
    calculateArea() {
        return this.widht * this.height
    }
}

const rectangle = new Rectangle(5,10)
console.log('El area del rectangulo es: ', rectangle.calculateArea())