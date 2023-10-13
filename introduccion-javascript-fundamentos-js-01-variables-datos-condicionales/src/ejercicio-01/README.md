## Ejercicio 1: Variables y Tipos de Datos

1. Declara una variable llamada `nombre` y asígnale tu nombre.

2. Crea una variable `edad` y asígnale tu edad actual.

3. Declara una variable `esEstudiante` y asígnale `true` si eres estudiante o `false` si no lo eres.

4. Crea una variable `mensaje` que contenga un saludo utilizando las variables `nombre` y `edad`.

5. Crea una variable `num1` y asígnale un número cualquiera.

6. Crea otra variable `num2` y asígnale otro número.

7. Realiza las siguientes operaciones:

   - Suma `num1` y `num2` y guarda el resultado en una variable llamada `suma`.
   - Resta `num1` y `num2` y guarda el resultado en una variable llamada `resta`.
   - Multiplica `num1` por `num2` y guarda el resultado en una variable llamada `multiplicacion`.
   - Divide `num1` entre `num2` y guarda el resultado en una variable llamada `division`.

8. Crea una cadena de texto llamada `frase` que contenga el siguiente mensaje: "Hola, mi nombre es [nombre] y tengo [edad] años. Soy estudiante: [true/false]."

```javascript
// Ejercicio 1: Variables y Tipos de Datos

// 1. Declara una variable llamada `nombre` y asígnale tu nombre.
let nombre = 'Juan'

// 2. Crea una variable `edad` y asígnale tu edad actual.
let edad = 25

// 3. Declara una variable `esEstudiante` y asígnale `true` si eres estudiante o `false` si no lo eres.
let esEstudiante = true

// 4. Crea una variable `mensaje` que contenga un saludo utilizando las variables `nombre` y `edad`.
let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años. Soy estudiante: ${esEstudiante}.`

// 5. Crea una variable `num1` y asígnale un número cualquiera.
let num1 = 10

// 6. Crea otra variable `num2` y asígnale otro número.
let num2 = 5

// 7. Realiza operaciones aritméticas.
let suma = num1 + num2
let resta = num1 - num2
let multiplicacion = num1 * num2
let division = num1 / num2

// 8. Crea una cadena de texto llamada `frase`.
let frase = `Hola, mi nombre es ${nombre} y tengo ${edad} años. Soy estudiante: ${esEstudiante}.`

console.log(mensaje)
console.log('Suma:', suma)
console.log('Resta:', resta)
console.log('Multiplicación:', multiplicacion)
console.log('División:', division)
console.log(frase)
```
