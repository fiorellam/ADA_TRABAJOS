// Consigna:
// Escribe un programa que le pida al usuario un número entero positivo y
// muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for
// para resolverlo.
const prompt = require("prompt-sync")();

let numero_entero = parseInt(prompt("Ingresa un numero entero positivo: "));
let resultado;
let multiplo;

for(let i = 1; i <= 100; i++){
    //Un numero es multiplo si lo contiene una cantidad entera de veces.
    resultado = i % numero_entero;
    if(resultado == 0){
        multiplo = i;
        console.log(`${i} es multiplo de ${numero_entero}`);
    }
}