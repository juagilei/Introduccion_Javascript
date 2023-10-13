// Escribe tu código aquí:
// Realiza tres Promises, algunas de las cuales se resuelvan y 
// otras se rechacen. Utiliza Promise.allSettled() para obtener 
// información sobre el estado de todas las Promises.

// A diferencia con promise.all que mira todas las promesas y 
// si una falla fallan todas en este caso se miran todos una por una

const promise1 = new Promise ((resolve)=>setTimeout(()=>resolve(1),1000))
const promise2 = new Promise ((reject)=>setTimeout(()=>reject('Error del promise 2'),2000))
const promise3 = new Promise ((resolve)=>setTimeout(()=>resolve(3),1500))

Promise.allSettled([promise1, promise2, promise3]).then((resultados)=>{
    console.log('Estado de todaslas promesas: ',resultados)
})
