// Escribe tu código aquí:
// Crea una función asincrónica que realice una llamada a una API utilizando Axios y 
//luego manipule los datos recibidos para mostrar información específica.

const axios = require('axios')

async function obtenerDatosDeAPI() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const data = response.data
   
    const datosBuscar = data.filter((post)=>post.body.startsWith('c'))
    console.log(datosBuscar)
  } catch (error) {
    console.error(error)
  }
}

obtenerDatosDeAPI()

