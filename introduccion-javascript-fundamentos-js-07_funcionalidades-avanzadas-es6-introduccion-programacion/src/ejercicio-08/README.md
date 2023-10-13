## Ejercicio 08: Rest Parameters en una Función

    Crea una función que acepte un número indefinido de argumentos y devuelva su suma utilizando rest parameters.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}

const result = sum(1, 2, 3, 4, 5)

console.log(`La suma es: ${result}`) // La suma es: 15
```
