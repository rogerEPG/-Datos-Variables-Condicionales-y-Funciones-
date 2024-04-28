//PRIMERO!!!!!!!!!!!!!!!!!!!!!!
let comensales = prompt("Ingrese numero de comensales")

const patata = 200
const huevos = 1
const cebolla = 60

let patataTotal = comensales * patata / 1000
let huevosTotal = comensales * huevos
let cebollaTotal = comensales * cebolla

console.log(comensales+" Comensales ")
console.log(patataTotal+" kg de papas ")
console.log(huevosTotal+" huevos")
console.log(cebollaTotal+" gr de cebolla")


//SEGUNDO!!!!!!!!!!!!!!!!!!!!!!!!!!
let numero = prompt("Ingresa un numero")
let resultado = numero % 2 === 0
console.log(numero+" ¿Es par?: "+resultado)


//TERCERO!!!!!!!!!!!!!!!!!!
let horas = prompt("Ingrese horas")
let minutos = prompt("Ingrese minutos")
let segundos = horas*60*60 + minutos*60
console.log(segundos+" segundos")
    

//4) CUARTO!!!!!!!!!!!!!!!!!!
let precio = parseInt(prompt("ingrese el precio del producto"))
let iva = (precio*21) /100
alert(`El precio con iva es: ${precio+iva}`)