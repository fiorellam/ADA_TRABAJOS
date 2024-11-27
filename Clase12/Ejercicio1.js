// Ejercicio 1: While
// Crea un programa que solicite al usuario ingresar números continuamente
// hasta que el usuario ingrese un número negativo. Luego, imprime la suma
// de todos los números ingresados.
const prompt = require("prompt-sync")();
let numero = parseFloat(prompt("Ingresa un numero: "));
let suma = 0;

while (numero >= 0) {
    suma = suma + numero;
    numero = parseFloat(prompt("Ingresa un numero: "));
}
console.log(suma);