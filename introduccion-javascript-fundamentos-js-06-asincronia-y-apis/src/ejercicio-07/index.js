// Escribe tu código aquí:
// Realiza una llamada a una API utilizando Axios. 
// Muestra los datos obtenidos en la consola.

// Nota: Axios ya esta incluido en las dependencias del fichero package.json. 
// Para poderlo utilizar ejecuta el siguiente comando en la raiz del repositorio para instalar las dependencias:

// Ese caso es muvho mas simple , ya que los datos ya viene cambiados a jason 
// al contrario que pasa con fetch()
// se instala axios con  require

const axios = require('axios')

// con axios.get obtenemos la información
axios.get('https://jsonplaceholder.typicode.com/posts/1')

// Utilizamos .then y .cath como ya sabemos then para response correcto
// catch para error

  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })