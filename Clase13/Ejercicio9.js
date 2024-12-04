// Ejercicio 9: Contar hasta un número
// Crea una función declarada llamada contarHasta que reciba un número y
// use un bucle para imprimir todos los números desde 1 hasta ese número. 
const prompt = require("prompt-sync")();
let numero = parseInt(prompt("Ingresa el numero hasta el que deseas contar: "));
function contarHasta(numero){
    for(let inicio = 1; inicio <= numero; inicio++){
        console.log(inicio);
    }
}
contarHasta(numero);