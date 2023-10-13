// Escribe tu código aquí:
// Crea un bucle que realice llamadas asincrónicas utilizando async/await 
// para procesar una lista de elementos uno por uno.

// creamos uan lista de elementos
const lista = [1,2,3,4]

// creo una función qe realice llamadas asincronas 

async function llamadas(lista) {

// recorro la lista y llamo a cada elemento de la lista para ver loque tiene
// ojo con la diferencia del (elemento in lista => mira los elemntos) o (elemento of lista => mira lo que tine cada elemnto)

    for (elemento of lista) {

// hago la promise e imprimo el elemento

        await new Promise((resolve) => setTimeout(resolve, 1000))
            console.log('El elemento es: ', elemento)
        
    }
}
// llamo la función

llamadas(lista)