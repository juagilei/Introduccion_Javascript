// Escribe tu código aquí:
// Escribe una función que utilice un callback para imprimir "Hola, mundo" 
//después de 2 segundos de ejecución.

function imprimirCallback(callback) {
    setTimeout(function () {
        callback('Hola Mundo')
    },2000)
}
imprimirCallback(function (mensaje) {
console.log(mensaje)
})


