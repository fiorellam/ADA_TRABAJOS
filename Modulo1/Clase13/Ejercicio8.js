// Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
// Crea una función expresada llamada convertirCelsiusAFahrenheit que
// reciba una temperatura en grados Celsius y devuelva la temperatura en
// Fahrenheit.
// Fórmula:
const prompt = require("prompt-sync")();
let temperaturaCelsius = parseFloat(prompt("Ingresa los grados celsius: "));

let convertirCelsiusAFahrenheit = function(temperaturaCelsius){
    let fahrenheit = (temperaturaCelsius * (9 / 5)) + 32;
    return fahrenheit;
}
console.log(`${temperaturaCelsius} grados Celsius es equivalente a ${convertirCelsiusAFahrenheit(temperaturaCelsius)} grados fahrenheit`);