// • Ejercicio 2: Calcular promedio de calificaciones
// Solicita al usuario cinco calificaciones y usa una función flecha para calcular
// el promedio
const prompt = require("prompt-sync")();
let calificacionesArray = [];

for(let i = 0; i < 5; i++){
    let calificacion = parseFloat(prompt(`Ingresa la calificacion ${i + 1}: `));
    calificacionesArray[i] = calificacion;
}

const calcularPromedio = array => {
    let sumaCalificaciones = 0;
    for(let i = 0; i < array.length; i++){
        sumaCalificaciones += array[i];
    }
    return sumaCalificaciones / array.length;
}
let promedio = calcularPromedio(calificacionesArray);

console.log(`${promedio}`);