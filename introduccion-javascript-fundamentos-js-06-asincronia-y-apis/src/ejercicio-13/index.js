// Escribe tu código aquí:
// Realiza una llamada a una API con Axios y maneja posibles errores utilizando 
// try/catch para mostrar un mensaje de error en caso de fallo.
// En este caso provocamos un error en la llamada dondo una direccion erronea
// trabajamos con la parte catch

const axios = require('axios')

async function obtenerDatosDeAPI() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/invalid')
    console.log(response.data)
  } catch (error) {
// error message nos indica que tipoo de error tenemos
    console.error('Error al obtener datos:', error.message)
  }
}

obtenerDatosDeAPI()

