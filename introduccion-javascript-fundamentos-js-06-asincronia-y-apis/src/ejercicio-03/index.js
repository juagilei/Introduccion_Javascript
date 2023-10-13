// Escribe tu código aquí:
// Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que diga "Operación completada". Utiliza async/await.
// con async le tendo que introducir una función sin argumento que contenga 


async function operacionAsincronica() {
    // la promise con un await delante para indicar la espera el ser asincrono
    // async siempre lleva un await
    // hago lo mismo que en el ejercicio 02 per en estecaso utilizo una función flecha
    // de esta forma es mucho mas sencillo y facil e leer.
    await new Promise((resolve) => setTimeout(resolve,1000))
    return 'Operacion completada'
}
// si intento imprimir directamente la funcion me sale el estado de la promise
console.log(operacionAsincronica())

// tengo que hacer otra async para introducir el resultado de la primera funcion
// y poder ver el resultado
async function ejecutarOperacion() {
    const resultado = await operacionAsincronica()
    console.log(resultado)
  }
// ejecuto la segunda función
  ejecutarOperacion()
