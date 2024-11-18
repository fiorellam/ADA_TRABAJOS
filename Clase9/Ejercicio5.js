// Escribe un programa que pida al usuario que ingrese tres números y 
// determine cuál es el mayor de los tres.
const prompt = require("prompt-sync")({sigint:true});

const number1 = parseFloat(prompt("Ingresa un numero: "));
const number2 = parseFloat(prompt("Ingresa un 2do numero: "));
const number3 = parseFloat(prompt("Ingresa un 3er numero: "));

if (number1 > number2 && number1 > number3){
    console.log(`El numero ${number1} es mayor que ${number2} y ${number3}`);
} else if (number2 > number1 && number2 > number3 ){
    console.log(`El numero ${number2} es mayor que ${number1} y ${number3}`);
} else if (number3 > number1 && number3> number2){
    console.log(`El numero ${number3} es mayor que ${number1} y ${number2}`);
}