## Ejercicio 10: Uso de Map

Crea un Map llamado `personas` que almacene nombres como claves y edades como valore## Ejercicio Agrega algunas personas al Map y luego realiza operaciones como obtener la edad de una persona y eliminar a alguien del Map.

```javascript
const personas = new Map()

personas.set('Alice', 30)
personas.set('Bob', 25)
personas.set('Charlie', 35)

console.log('Edad de Alice:', personas.get('Alice'))

const personToRemove = 'Bob'
personas.delete(personToRemove)

console.log('Personas en el Map después de eliminar a Bob:', personas)
```
