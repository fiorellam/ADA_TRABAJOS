// Saludo personalizado
// Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de
// texto y la función prompt(). Escribe un programa que:
const prompt = require("prompt-sync")({sigint:true});
// 1. Solicite al usuario que ingrese su nombre.
let nombre = prompt("Escribe aquí tu nombre: ");

// 2. Muestre un saludo personalizado usando el nombre ingresado.
console.log(`Un gusto saludarte ${nombre} \nBienvenida a CURSADA! \nFelicidades por haber completado los 5 ejercicios de la clase!`);