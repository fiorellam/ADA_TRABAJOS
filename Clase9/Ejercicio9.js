// Define una constante PI con el valor de pi (3.14159). 
// Pide al usuario que ingrese el radio de un círculo y calcula su área y perímetro 
// utilizando la constante PI.
const prompt = require("prompt-sync")({sigint:true});
const PI = 3.1416;

let circle_ratio = parseFloat(prompt("Escribe el radio de un circulo "));

let circle_perimeter = PI * 2 * circle_ratio;
let circle_area = PI * (circle_ratio**2);

console.log(`El perímetro del círculo es ${circle_perimeter} y el área es de ${circle_area}`);