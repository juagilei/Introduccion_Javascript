## Ejercicio 09: Uso de Set

Crea un Set vacío llamado `colors## Ejercicio Luego, agrega varios colores diferentes al Set y asegúrate de que no haya colores duplicado## Ejercicio Imprime la lista de colores en el Set y verifica si un color específico existe en el Set.

```javascript
const colors = new Set()

colors.add('Rojo')
colors.add('Verde')
colors.add('Azul')
colors.add('Rojo') // Intentar agregar un color duplicado

console.log('Colores en el Set:', colors)

const colorToCheck = 'Verde'
console.log(`¿${colorToCheck} existe en el Set? ${colors.has(colorToCheck)}`)
```
