// Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
// semana correspondiente. Si el número no está dentro de ese rango, 
// muestra un mensaje de error.
const prompt = require("prompt-sync")({sigint:true});

let number = parseFloat(prompt("Ingresa un numero: "));

if(number == 1){
    console.log("Lunes");
} else if(number == 2){
    console.log("Martes");
} else if(number == 3){
    console.log("Miercoles");
} else if(number == 4){
    console.log("Jueves");
} else if(number == 5){
    console.log("Viernes");
} else if(number == 6){
    console.log("Sabado");
} else if(number == 7){
    console.log("Domingo");
} else {
    console.log("El numero que ingresaste no es de ningun dia de la semana");
}