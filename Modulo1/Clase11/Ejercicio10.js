// Crea un programa donde la computadora seleccione un número al azar entre 1
// y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario
// acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén
// los intentos restantes. Si no acierta después de los 3 intentos, muestra el
// número secreto. Usa un for para resolver este ejercicio.
const prompt = require("prompt-sync")();
//Math random es una funcion que me da un numero random, le defino que me genere un numero random del 0 al 9
//Y le indico +1 para que en lugar de ser 0 y 9 sean 1 y 10 
let numero_random = Math.floor(Math.random() * 10) + 1;

let numero_usuario;
for(let i = 3; i > 0; i--){
    numero_usuario = parseInt(prompt(`Ingresa un numero del 1 al 10 a ver si lo adivinas, solo tienes ${i} intentos: `));
    
    if(numero_usuario == numero_random){
        console.log("Felicidades!!!! Haz adivinado el número");
        break;
    } else {
        console.log("No es el numero");
    }
    
    if(i == 1){
        console.log(`Perdiste :( el número era: ${numero_random}`);
    }
}