## Ejercicio 30 - Reducir a un Solo Valor

Dado un array de números, utiliza el método `reduce()` para sumar todos los números y obtener un valor total. Luego, imprime el valor total.

```javascript
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((total, num) => total + num, 0)

console.log(sum) // Resultado esperado: 15
```
