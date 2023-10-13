// Escribe tu código aquí:
// Crea un Set vacío llamado `colors## Ejercicio Luego, agrega varios colores diferentes al Set y asegúrate de que no haya colores duplicado## Ejercicio Imprime la lista de colores en el Set 
// y verifica si un color específico existe en el Set.

// defino el set

const colores = new Set
// añado elementos
colores.add ('rojo')
colores.add ('marron')
colores.add ('azul')
colores.add ('verde')
colores.add ('rojo')
// hemos repetido el color rojo, pero en el set no se repite por lo que no lo pone
console.log(colores)

const verificarColor = 'verde'

console.log(`El color ${verificarColor} exixste en el set? ${colores.has(verificarColor)}`)


