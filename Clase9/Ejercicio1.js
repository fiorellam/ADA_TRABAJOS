// Declara dos variables numéricas numero1 y numero2. Pide al usuario 
// que ingrese dos números y muestra cuál es mayor o si son iguales.
const prompt = require("prompt-sync")({sigint:true});

let num1 =  parseFloat(prompt("Ingresa un numero: "));
let num2 = parseFloat(prompt("Ingresa otro numero: "));

if(num1 > num2) {
    console.log(`El numero ${num1} es mayor que ${num2}`);
} else if (num1 == num2) {
    console.log(`Los numeros son iguales`)
} else{
    console.log(`El numero ${num2} es mayor que ${num1}`);
}