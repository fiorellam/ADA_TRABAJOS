//Calcular el doble de un número
// En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes
// escribir un programa en JavaScript que:
// Requisitos:
// • Utiliza la función prompt() para solicitar el dato al usuario.
// • Almacena el número ingresado en una variable.
// • Utiliza un operador aritmético para calcular el doble del número
const prompt = require("prompt-sync")({sigint:true});

// 1. Solicite al usuario que ingrese un número cualquiera.
let numero = parseFloat(prompt("Ingresa un numero: "));

// 2. Calcule el doble de ese número.
let doble = numero * 2;

// 3. Muestre el resultado en la consola.
console.log(`El doble del numero que ingresaste es: ${doble}`);