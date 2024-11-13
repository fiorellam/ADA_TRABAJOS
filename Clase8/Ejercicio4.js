// Determinar si un número es par o impar
// En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales.
// Debes escribir un programa que:
const prompt = require("prompt-sync")({sigint:true});
// 1. Solicite al usuario que ingrese un número entero.
let numeroEntero = parseInt(prompt("Ingresa un numero entero: "));
// 2. Determine si el número es par o impar.
// 3. Muestre un mensaje indicando si el número es par o impar.
if(numeroEntero % 2 == 0){
    console.log(`El numero ${numeroEntero} es par`);
} else{
    console.log(`El numero ${numeroEntero} es impar`);
    
}
// Requisitos:
// • Utiliza el operador módulo (%) para comprobar si el número es divisible
// por 2.
// • Usa una estructura if-else para mostrar el mensaje adecuado
