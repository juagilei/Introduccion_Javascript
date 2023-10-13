const person = {
  name: 'John',
  greet: function () {
    console.log(`Hola, soy ${this.name}`)
  }
}

person.greet() // Hola, soy John

// Cambiando a una arrow function
const person2 = {
  name: 'Alice',
  greet: () => {
    console.log(`Hola, soy ${this.name}`)
  }
}

person2.greet() // Hola, soy undefined (no cambia el valor de 'this')
