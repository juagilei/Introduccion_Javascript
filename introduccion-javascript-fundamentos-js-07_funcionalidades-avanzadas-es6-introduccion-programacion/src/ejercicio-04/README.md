## Ejercicio 04: Expresiones en Template Literals

Dado un arreglo de números, utiliza template literals para mostrar si cada número es par o impar.

```javascript
const numbers = [2, 7, 4, 9, 6]

numbers.forEach((number) => {
  console.log(`El número ${number} es ${number % 2 === 0 ? 'par' : 'impar'}.`)
})
```