// Ejercicio 2: Conversión de Objetos JavaScript a JSON
// 1.En la misma carpeta clase2, crea un nuevo archivo llamado
// actividad2.js.
// 2.Crea un objeto en JavaScript que represente a un estudiante con las
// siguientes propiedades: nombre, edad, curso, notas (un array de
// números).
// Instrucciones:
// • Convierte este objeto a una cadena JSON usando JSON.stringify().
// • Muestra la cadena JSON en la consola.
// • Luego, convierte la cadena JSON de nuevo a un objeto utilizando
// JSON.parse() y muestra el objeto en la consola.
const fs = require('fs')

const path = './estudiante.json';

fs.readFile(path, 'utf-8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }

    const estudiante = JSON.parse(data);
    //Objeto a cadena json
    const stringJsonStudent = JSON.stringify(estudiante, null, 2);
    console.log("Cadena JSON" , stringJsonStudent);

    // Convertir la cadena JSON a un objeto
    const objectStudent = JSON.parse(stringJsonStudent);
    console.log("Objeto", objectStudent);
})
