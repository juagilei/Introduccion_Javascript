## Ejercicio 02: Arrow Functions y `this`

Crea un objeto con un método que utilice `this## Ejercicio Luego, cambia el método a una arrow function y observa cómo cambia el comportamiento.

```javascript
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
```
