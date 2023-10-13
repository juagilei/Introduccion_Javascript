// Escribe tu código aquí:
class Product {
    constructor(name,price,quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
    }
    get totalPrice(){
        return this.price * this.quantity
    }
}

const product = new Product('Camisa',30,3)
console.log('El precio total es: ',product.totalPrice)
