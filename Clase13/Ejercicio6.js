// Ejercicio 6: Convertir a minutos
// Crea una función declarada llamada convertirHorasAMinutos que reciba
// un número de horas como parámetro y devuelva el total en minutos.
const prompt = require("prompt-sync")();
let numHrs = parseInt(prompt("Ingresa el numero de horas que quieres convertir a minutos: "));

function convertirHorasAMinutos(numHrs){
    let minutos = numHrs * 60;
    return minutos
}
console.log(`El total de ${numHrs} en minutos es de `, convertirHorasAMinutos(numHrs));