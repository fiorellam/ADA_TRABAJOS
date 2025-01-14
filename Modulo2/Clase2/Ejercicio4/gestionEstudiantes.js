// Ejercicio 4: Gestión de Estudiantes
// Instrucciones
// 1. Dentro de la carpeta clase2/ejercicio4, crea dos archivos:
// o estudiantes.js
// o gestionEstudiantes.js
// 2. En estudiantes.js:
// o Crea un array de objetos que represente una lista de
// estudiantes.
// o Cada estudiante debe tener las propiedades: nombre, edad,
// curso y notas (un array de números).
// o Exporta este array usando module.exports.
// 3. En gestionEstudiantes.js:
// o Importa el array desde estudiantes.js.
// o Muestra en la consola los nombres de todos los estudiantes.
// o Calcula y muestra el promedio de notas de un estudiante
// específico.
// o Agrega un nuevo estudiante al array y muestra el array
// actualizado en formato JSON
const arrayEstudiantes = require('./estudiantes');

for(let i = 0 ; i < arrayEstudiantes.length; i++){
    let estudiante = arrayEstudiantes[i];
    console.log(estudiante.nombre);
}

function calcularPromedioEstudiante(nombreEstudiante){
    let arrayEstudianteEspecifico = arrayEstudiantes.filter(estudiante => estudiante.nombre.toLowerCase() == nombreEstudiante.toLowerCase());
    let estudiante = arrayEstudianteEspecifico[0];
    let suma = 0;
    for(let i = 0; i < estudiante.notas.length; i++){
        suma += estudiante.notas[i];
    }
    console.log(`El promedio de ${estudiante.nombre} es de: ${suma / estudiante.notas.length}`);
}
calcularPromedioEstudiante("Fiorella");

let nuevoEstudiante = {
    "nombre": "Luisa",
    "edad": 26,
    "curso": 'Backend',
    "notas": [7, 8, 10 , 9]
}
arrayEstudiantes.push(nuevoEstudiante);
// Mostrar el array actualizado en formato JSON
console.log("\nLista de estudiantes actualizada:");
console.log(JSON.stringify(arrayEstudiantes, null, 2));  // Formatea el JSON de manera legible