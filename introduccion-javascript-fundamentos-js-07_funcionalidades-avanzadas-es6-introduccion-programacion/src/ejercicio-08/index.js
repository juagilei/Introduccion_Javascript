// Escribe tu código aquí:
// Crea una función que acepte un número indefinido de argumentos y 
// devuelva su suma utilizando rest parameters.

function suma(...numeros) {
    // retorno la suma del argumento numeros en el que voy a introcuris varios eementos mediante el metodo rest (...numeros)
    // en reduce tengo que introducir un argumento que será el que acumule, otro (num) que será el que vaya sumando 
    // y que empice desde un numero, en este caso 0
    
    return numeros.reduce((acumulador,num) => acumulador+num,0)
    
}

const resultado = suma(1,2,3,4,5)
console.log(resultado)

