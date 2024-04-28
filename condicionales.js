
//PRIMERO!!!!!!!!!!!
let kilometros = prompt("ingrese kilometros")
let horass = prompt("ingrese horas")
let velocidad = kilometros/horass

if(velocidad >= 40 && velocidad <= 60){
    console.log("Velocidad: "+velocidad+"km/h el conductor pasa la prueba")
} else {
    console.log("Velocidad: "+velocidad+"km/h el conductor es descalificado")
}


//SEGUNDO!!!!!!!!!!!!!!!!!
let nota1 = parseInt(prompt("ingresa primera nota"),10)
let nota2 = parseInt(prompt("ingresa segunda nota"),10)
let nota3 = parseInt(prompt("ingresa tercera nota"),10)

let promedio = (nota1+nota2+nota3)/3
if(promedio < 5){
    console.log("Promedio: "+promedio+" SUSPENDIDO")
} else if (promedio >=5 && promedio <=7){
    console.log("Promedio: "+promedio+" APROBADO")
} else if(promedio > 7){
    console.log("Promedio: "+promedio+" NOTABLE")
}


//TERCERO!!!!!!!!!!!!!!!!!!!
let bebida = prompt("ingrese una bebida")

let vino = bebida === "vino"
let cervesa = bebida === "cervesa"
let refresco = bebida === "refresco"
let agua = bebida === "agua"

if(vino || cervesa){
    console.log("Dirijase a la barra")
} else if(refresco || agua){
    console.log("Dirijase a la barra de comida")
} else {
    console.log("Algo salio mal")
}


//CUARTO!!!!!!!!!!!!!!!!!!!
let numero1 = parseInt(prompt("ingrese primer número"),10)
let numero2 = parseInt(prompt("ingrese segundo número"),10)

numero1 > numero2
? console.log("La diferencia es de: ", numero1-numero2)
: numero2 > numero1
? console.log("La diferencia es de: ", numero2-numero1)
: console.log("No hay diferencia: ", numero1-numero2)


//QUINTO!!!!!!!!!!!!!!!!!!!!!
let numeroo = parseInt(prompt("Ingrese un número"))
let cuadrado = parseInt(prompt("Ingrese el cuadrado del número"))

let resultadoo = numeroo**2

resultadoo === cuadrado
? console.log(resultadoo+" es el resultado: Correcto")
: console.error("Error: "+cuadrado+" no es el cuadrado de "+numeroo)