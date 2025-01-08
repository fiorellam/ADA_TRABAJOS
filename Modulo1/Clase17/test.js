const prompt = require("prompt-sync")();

let condicion1 = true;
let condicion2 = true;

let usuario_uno = prompt("¿El día está soleado? (true/false): ").toLowerCase() == 'true'; // Convertimos la respuesta a booleano
let usuario_dos = prompt("¿El día está nublado? (true/false): ").toLowerCase() == 'true'; 

console.log(condicion1, condicion2, usuario_uno, usuario_dos);
// console.log(usuario_uno, usuario_dos);
if (condicion1 && usuario_uno) {
    // console.log(condicion1, usuario_uno);
    console.log("El día está soleado");
} else if (condicion2 && usuario_dos) {
    // console.log(condicion2, usuario_dos);
    console.log("El día está nublado");
} else {
    console.log("Nada");
}