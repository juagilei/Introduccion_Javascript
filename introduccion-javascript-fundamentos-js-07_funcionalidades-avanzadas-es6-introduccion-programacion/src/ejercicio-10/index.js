// Escribe tu código aquí:
// Crea un Map llamado personas que almacene nombres como claves y edades como valore## Ejercicio Agrega algunas personas al Map y 
// luego realiza operaciones como obtener la edad de una persona y eliminar a alguien del Map.

const personas = new Map()
// A difefencia que con set aqui usamos set para añadir en vez de add
personas.set('Alice', 30)
personas.set('Bob', 25)
personas.set('Charlie', 35)

console.log(personas)

console.log(`La edad de Bob es : ${personas.get('Bob')}`)

const personaBorrar = 'Bob'
personas.delete(personaBorrar)
console.log(personas)


