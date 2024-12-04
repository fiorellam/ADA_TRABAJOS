// Ejercicio 5: Concatenar nombres (función expresada)
// Crea una función expresada llamada concatenarNombres que reciba dos
// nombres (nombre y apellido) como parámetros y devuelva el nombre
// completo concatenado.
const prompt = require("prompt-sync")();

let nombre = prompt("Ingresa tu nombre: ");
let apellido = prompt("Ingresa tu apellido: ");

let concatenarNombres = function (nombre, apellido){
    return `${nombre}  ${apellido}`;
}
console.log(concatenarNombres(nombre, apellido));