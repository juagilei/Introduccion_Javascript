// Escribe tu código aquí:
// Utiliza el método fetch() para obtener datos de una API 
// de tu elección. Imprime los datos resultantes en la consola.
// dento de fetch pongo la direccion a consultar
fetch('https://jsonplaceholder.typicode.com/posts/1')
// utilizo .then (response) para obtner los datos y los convierto
// a formato json para poder leerlos
  .then((response) => response.json())
// obtengo los datos con .then(data)
  .then((data) => {
    console.log(data)
  })
  