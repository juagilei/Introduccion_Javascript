## Ejercicio 6: Herencia de Clases

Extiende la clase `Rectangle` para crear una clase `Square` que también tenga un método para calcular el área, pero en este caso, el lado es el mismo para todas las direcciones. Crea una instancia de `Square` y muestra su área.

```javascript
class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength)
  }
}

const square = new Square(7)

console.log('Area del cuadrado:', square.calculateArea())
```
