/* Consigna:
Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa
que le pida al usuario un número cualquiera. El programa deberá analizar si el
número ingresado es positivo, negativo o cero. Utiliza estructuras if para
resolverlo y muestra un mensaje explicativo en cada caso.  */
const prompt = require("prompt-sync")();

let numero = parseFloat(prompt("Escribe un numero: "));

let mensaje1 = numero > 0  ? 'es positivo' : 'es negativo';
let mensaje2 = numero == 0 ? 'es cero' : mensaje1;

console.log("El resultado es ", mensaje2);