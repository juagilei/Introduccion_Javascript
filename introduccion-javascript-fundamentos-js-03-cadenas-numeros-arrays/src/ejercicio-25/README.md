## Ejercicio 25 - Filtrar Números Pares

Dado un array de números, utiliza el método `filter()` para crear un nuevo array que contenga solo los números pares. Luego, imprime el nuevo array resultante.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const evenNumbers = numbers.filter((num) => num % 2 === 0)

console.log(evenNumbers) // Resultado esperado: [2, 4, 6, 8]
```
