// Ejercicio 7: Mensaje según la hora
// Declara una variable global llamada horaActual (puedes asignarle un valor
// fijo). Crea una función declarada llamada mostrarSaludo que imprima
// "Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o
// "Buenas noches" en cualquier otro caso.
const prompt = require("prompt-sync")();

let horaActual = parseInt(prompt("Ingresa la hora actual: "));

function mostrarSaludo(horaActual){
   if(horaActual < 12 && horaActual > 0){
    console.log(`Buenos dias`);
   } else if(horaActual >= 12 && horaActual < 18){
    console.log("Buenas tardes");
   } else if (horaActual >= 18 && horaActual < 24){
    console.log("Buenas noches");
   } else {
    console.log("La hora que ingresaste no es valida");
   }
}

mostrarSaludo(horaActual);