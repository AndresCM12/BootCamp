
/*
Los tipos de datos primitivos son inmutables y nos regresan una nueva variable
con los cambios realizados a la primer variable


let firstName = 'andres'

firstName.toUpperCase()
console.log(`Inmutable: ${firstName}`)

newFirstName= firstName.toUpperCase()
console.log(`Nos regresa una nueva variable con el cambio: ${newFirstName}`)

Lo mismo con arrays:

const list = []
list.push(33)
anotherList = list.concat([157,234])
console.log(list[0])
console.log(anotherList[1])
*/

const desarrollador = {
    nombre: 'andres',
    apellido: 'chavez',
    edad: 20,
    esBueno: false,
    gustos: ['patas', 'caca']
}
 


//function expresion a una variable se le asigna una funcion
const sumar = (operando1, operando2) =>{
    console.log(operando1)
    console.log(operando2)

    return operando1 + operando2
}

//declarar una funcion, nos permite utilizrla antes 
function restar(a,b){
    return a - b
}

const resultado = sumar(2, 2)
console.log(resultado)