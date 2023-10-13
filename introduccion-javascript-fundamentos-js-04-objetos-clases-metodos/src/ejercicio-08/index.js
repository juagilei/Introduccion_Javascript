// Escribe tu código aquí:
class Product {
    constructor(name, price, quantity) {
      this.name = name
      this.price = price
      this._quantity = quantity
    }
    get quantity(){
        return this.quantity
    }
    set quantity(newQuantity) {
        this._quantity = newQuantity
    }
    get totalPrice (){
        return this.price * this._quantity
    }
}

    const product = new Product('car',25000,3)
    console.log('Precio: ',product.totalPrice)
    product.quantity = 2
    console.log('Precio actualizado: ',product.totalPrice)
    