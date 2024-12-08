// Ejercicio 1: While
// Crea un programa que solicite al usuario ingresar números continuamente
// hasta que el usuario ingrese un número negativo. Luego, imprime la suma
// de todos los números ingresados.
const prompt = require("prompt-sync")();
let numero = 0;
let suma = 0;

while (numero >= 0) {
    numero = parseInt(prompt("Ingresa un numero: "));
    if(isNaN(numero)){
        console.log("Lo que ingresaste no es un numero ");
        break;
    }
    suma = suma + numero;
}
console.log(suma);