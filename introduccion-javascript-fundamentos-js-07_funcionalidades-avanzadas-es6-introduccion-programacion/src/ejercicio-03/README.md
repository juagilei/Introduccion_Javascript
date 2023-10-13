## Ejercicio 03: Interpolación de Variables

Dado un objeto con información personal (nombre, edad, ciudad), utiliza template literals para crear una frase que lo muestre.

```javascript
const person = {
  name: 'Alice',
  age: 30,
  city: 'New York'
}

const message = `Hola, mi nombre es ${person.name}, tengo ${person.age} años y vivo en ${person.city}.`

console.log(message) // Hola, mi nombre es Alice, tengo 30 años y vivo en New York.
```
