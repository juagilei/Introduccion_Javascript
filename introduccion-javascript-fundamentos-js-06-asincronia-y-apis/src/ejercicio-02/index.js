// Escribe tu código aquí:
// Crea una Promise que se resuelva después de 3 segundos y 
// luego imprima "Promise resuelta" cuando se cumpla.
// creo un a promesa de la siguiente forma:
// en una constante introduzco la promise con new promise, esta 
// no deje de ser una función con argumentos (resolve para cuando es exitosa y reject cuando no lo es)

const miPromise = new Promise((resolve, reject)=>{
    // realizamos la función con una salida resolve 
    setTimeout(() => {
        resolve('Promise resuelta')
    },3000)
})
// Despues del promise se necesita un .then cuando la promise es exitosa
// o un .cath cuando la promise es erronea
miPromise.then((resultado)=> {
    console.log(resultado)
})
miPromise.catch(('error'))
