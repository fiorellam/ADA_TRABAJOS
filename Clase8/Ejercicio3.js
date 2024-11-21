// Suma de dos números ingresados por el usuario
// Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores
// aritméticos. Escribe un programa que:
// Requisitos:
// • Utiliza prompt() para recibir los números.
// • Utiliza parseFloat() para convertir las entradas a números.
// • Almacena los resultados en variables adecuadas y muestra el resultado.
const prompt = require("prompt-sync")({sigint:true});

// 1. Pida al usuario que ingrese dos números.
let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));

// 2. Sume ambos números.
let suma = numero1 + numero2;

// 3. Muestre el resultado de la suma.
console.log(`El resultado de la suma de ${numero1} y ${numero2} es: ${suma}`)