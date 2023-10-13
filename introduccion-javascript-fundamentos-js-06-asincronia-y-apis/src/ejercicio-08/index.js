// Escribe tu código aquí:
// Después de realizar una llamada a una API con fetch(), utiliza el método .then() para filtrar los datos y 
// mostrar solo los elementos que cumplan ciertos criterios (por ejemplo, mostrar solo los body que comiencen con "q").

fetch('https://jsonplaceholder.typicode.com/posts')

.then((response) => response.json())
// con .then data obtengo los datos
.then((data) => { 
// Recojo en una constante los datos que quiero obtener en este caso os nombre que comiencen por a
// uso data como el archivo de dotos general y lo filtro con filter todo en la funcion data.filter

const filtroDatosA = data.filter((post)=> post.body.startsWith('q'))

console.log(filtroDatosA)
})