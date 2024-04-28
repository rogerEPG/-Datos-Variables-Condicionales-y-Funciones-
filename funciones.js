//CERO!!!!!!!!!!!!!!!!!!!
let userName = prompt("Ingrese su nombre")

function saludar(userName){
    alert("Hola "+userName+"!!!")
}

saludar(userName)


//PRIMERO!!!!!!!!!!!!!!!!!!
let num1 = parseInt(prompt("ingrese un numero"), 10)
let num2 = parseInt(prompt("ingrese un numero"), 10)

function sumar(num1, num2){
    return `La suma es: ${num1+num2}`
}

alert(sumar(num1, num2))


//SEGUNDO!!!!!!!!!!!!!!!!!!
let numer = prompt("ingrese un numero par")

function esPar(numer){
    if(numer > 0){
        alert(`${numer} ¿es par? = ${numer%2===0}`)
    } else if(numer ===""){
        alert("'Vacio'  ingrese un valor")
    } else if(typeof numer === "string"){
        alert(`${numer} no es un valor numerico`)
    }
}

esPar(numer)


//TERCERO!!!!!!!!!!!!!!!!!!!!!
let lado1 = parseInt(prompt("ingrese el lado 1"))
let lado2 = parseInt(prompt("ingrese el lado 2"))
let lado3 = parseInt(prompt("ingrese el lado 3"))

let equilatero = lado1 === lado2 && lado2 === lado3
let isosceles = lado1 === lado2 && lado2 !== lado3
let escaleno = lado1 !== lado2 && lado2 !== lado3

function triangulo(equilatero, isosceles, escaleno){
    if(equilatero){
        console.log("El triangulo es equilatero");
    } else if(isosceles){
        console.log("El triangulo es isosceles");
    } else if(escaleno){
        console.log("El triangulo es escaleno");
    } 
}

triangulo(equilatero, isosceles, escaleno)


//CUARTO!!!!!!!!!!!!!!!!!!!!!!!!
let numer1 = parseInt(prompt("ingrese un numero"), 10)
let operador = prompt("ingrese un operador |  +  |  -  |  *  |  /  |")
let numer2 = parseInt(prompt("ingrese un numero"), 10)

function calculadora(numer1, operador, numer2){
    if(operador === "+"){
        console.log("La suma es: ", numer1+numer2)
    } else if(operador === "-"){
        console.log("La resta es: ", numer1-numer2);
    } else if(operador === "*"){
        console.log("La multiplicacion es: ", numer1*numer2)
    } else if(operador === "/"){
        console.log("La division es :", numer1/numer2);
    }
}
calculadora(numer1, operador, numer2)


//QUINTO!!!!!!!!!!!!!!!!!!!!!!!!!1
let peso = parseFloat(prompt("Ingrese el peso"), 10)
let altura = parseFloat(prompt("Ingrese la altura"), 10)
altura = altura ** 2

function calcularIMC(peso, altura){
    let IMC = peso/altura
    IMC = IMC.toFixed(2)
    if(IMC < 18.5){
        console.log("IMC: "+IMC+" Bajo peso")
    } else if(IMC >= 18.5 && IMC <= 24.9){
        console.log("IMC: "+IMC+" Normal")
    } else if(IMC >= 25 && IMC <= 29.9){
        console.log("IMC: "+IMC+" Sobrepeso")
    } else if(IMC >= 30){
        console.log("IMC: "+IMC+" Obesidad");
    }
}

calcularIMC(peso, altura)