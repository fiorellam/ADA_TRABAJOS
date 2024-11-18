// Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
// libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
// kg a libras, Pista: 2.20462)

const prompt = require("prompt-sync")({sigint: true});
const VALUE_POUND_IN_KG = 2.20462;

let weight = parseFloat(prompt("Ingresa tu peso en KG: "));
let weight_in_pounds = weight * VALUE_POUND_IN_KG;

console.log(`Tu peso en libras es : ${weight_in_pounds} libras`);