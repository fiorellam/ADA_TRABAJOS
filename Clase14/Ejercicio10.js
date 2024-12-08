// • Ejercicio 10: Flores Favoritas
// Escribe un programa en JavaScript para contar cuántas veces el usuario
// menciona sus flores favoritas. Realiza las siguientes acciones:
// 1. Inicializa un array vacío para almacenar las flores favoritas.
// 2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y
// agrega cada una al array manualmente (sin usar métodos como push).
// 3. Pregunta al usuario por una flor específica y verifica si está entre sus
// favoritas.
// 4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto
// debe hacerse manualmente).
const prompt = require("prompt-sync")();
let floresFavoritas = [];

for(let i = 0; i < 3; i++){
    let flor = prompt(`Ingresa tu flor favorita ${i + 1}: `);
    let flor2 = prompt("Ingresa tu flor favorita " , i );
    floresFavoritas[i] = flor;
}
function encontrarFlor(nombreFlor){
    let contador = 0;
    for(let i = 0; i < floresFavoritas.length; i++){
        if(nombreFlor == floresFavoritas[i]){
            contador++; // contador = contador + 1;
        }
    }
    if(contador > 0){
        console.log(`Esa flor es de las favoritas y la encuentras ${contador} vez`);
    } else {
        console.log(`Esa flor no es de las favoritas`);
    }
}

let florBuscar = prompt("Ingresa una flor para buscar: ");
encontrarFlor(florBuscar);