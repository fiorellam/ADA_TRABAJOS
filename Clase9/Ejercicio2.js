// Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
// valores numéricos de tu elección. Pide al usuario que ingrese un 
// número y verifica si está dentro del rango definido por las constantes.
const prompt = require("prompt-sync")({sigint:true});
const RANGO_MAXIMO = 1200;
const RANGO_MINIMO = -5;

let number = parseFloat(prompt("Ingresa un numero: "));

if (RANGO_MAXIMO >= number && RANGO_MINIMO <= number){
    console.log(`Tu número esta dentro de los rangos establecidos 
        Es mayor que ${RANGO_MINIMO} y es menor que ${RANGO_MAXIMO}`);
} else {
    console.log(`Tu número NO esta dentro de los rangos establecidos 
        El minimo es ${RANGO_MINIMO} y el maximo es ${RANGO_MAXIMO}`)
}