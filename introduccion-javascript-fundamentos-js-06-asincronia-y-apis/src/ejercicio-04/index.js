// Escribe tu código aquí:
// Crea una Promise que se rechace después de 2 segundos y 
// captura el error para imprimir "Error: Promise rechazada".

// Es el mismo ejercicio que el 02 pero gestinado el error 
// por lo que en vez de usar resolve se usa reject

const miPromiseRechazada = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise rechazada')
    }, 2000)
  })
  
  miPromiseRechazada.catch((error) => {
    console.log('Error:', error)
  })