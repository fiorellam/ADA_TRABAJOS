// Escribe un programa que pida al usuario que ingrese su nombre, su
// edad y su peso, y luego muestre un mensaje personalizado que incluya
// toda esta información.
// Desglosando el ejercicio deberás:
// Pista: En el ejercicio anterior, declaramos valores en las variables.
// Ahora nos toca pedir datos al usuario, por lo que usaremos promptsync para solicitar esta información.
const prompt = require("prompt-sync")({sigint:true});
// 1. Pide al usuario que ingrese su nombre.
let nombre = prompt("Escribe tu nombre: ");
// 2. Pide al usuario que ingrese su edad.
let edad = parseInt(prompt("Escribe tu edad: "));
// 3. Pide al usuario que ingrese su peso.
let peso = parseFloat(prompt("Escribe tu peso: "));

// 4. Muestra un mensaje personalizado que incluya el nombre, la edad
// y el peso del usuario.
console.log(`Tu nombre es ${nombre}, tu edad ${edad} y pesas ${peso}`);
