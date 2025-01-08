// Consigna:
// Los números pueden ser pares o impares. Escribe un programa que le pida al
// usuario un número y determine si es par o impar. Muestra un mensaje
// explicativo indicando qué significa cada caso.
const prompt = require("prompt-sync")();

let numero = parseFloat(prompt("Ingresa un numero entero: "));

let resultado = numero % 2 == 0 ? 'Es par' : 'Es impar';

console.log(resultado);