// Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. 
// Muestra un mensaje personalizado según el caso.
const prompt = require("prompt-sync")({sigint: true});

let age = parseInt(prompt("Ingresa tu edad: "));

if(age >= 18){
    console.log("Eres mayor de edad");
} else {
    console.log('Eres menor de edad');
}