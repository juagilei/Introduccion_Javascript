// Escribe tu código aquí:
// Dado un objeto con información de un producto (nombre, precio, categoría), utiliza destructuring para extraer 
// y mostrar cada propiedad.



const product = {
    name: 'Smartphone',
    price: 499.99,
    category: 'Electronics'
  }
  
  const { name, price, category } = product
  
  console.log(`Nombre: ${name}`)
  console.log(`Precio: $${price}`)
  console.log(`Categoría: ${category}`)