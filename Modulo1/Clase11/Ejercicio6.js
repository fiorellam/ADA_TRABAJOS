// Consigna:
// Crea un programa que le pida al usuario un número y luego imprima su tabla de
// multiplicar desde el 1 hasta el 10. Usa un ciclo for.
const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingresa un numero: "));

let resultado_multiplicacion;
for(let i = 1; i <= 10; i++){
    resultado_multiplicacion = numero * i;
    console.log(`${numero} x ${i} = ${resultado_multiplicacion}` );
}