const personas = new Map()

personas.set('Alice', 30)
personas.set('Bob', 25)
personas.set('Charlie', 35)

console.log('Edad de Alice:', personas.get('Alice'))

const personToRemove = 'Bob'
personas.delete(personToRemove)

console.log('Personas en el Map después de eliminar a Bob:', personas)
