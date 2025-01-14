// Ejercicio 1: Creación y Manipulación de un Objeto JSON
// 1.Dentro de la carpeta ADA_TRABAJOS, crea una nueva carpeta llamada
// clase2.
// 2.En la carpeta clase2, crea un archivo JavaScript llamado actividad1.js.
// 3.En este archivo, crea un objeto JSON que represente un libro. El objeto
// debe tener las siguientes propiedades: titulo, autor, año, genero (puede
// ser un array de géneros).
// Instrucciones:
// • Muestra en la consola el título y el autor del libro.
// • Actualiza el año del libro a un valor más reciente.
// • Añade una nueva propiedad llamada páginas que indique el número
// de páginas del libro.
// • Muestra el objeto actualizado en la consola.
const fs = require('fs');
const rutaArchivo = "./libro.json";

fs.readFile(rutaArchivo, 'utf-8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }

    const libro = JSON.parse(data);
    console.log(`El titulo es: ${libro.titulo} y el autor es: ${libro.autor}`);

    let libroActualizado = {
        titulo: libro.titulo,
        autor: libro.autor,
        anio: libro.anio + 1,
        genero: libro.genero,
        paginas: 400
    };
    console.log("Libro actualizado " , libroActualizado);

    const libroModificado = JSON.stringify(libroActualizado, null, 2);

    fs.writeFile(rutaArchivo, libroModificado, (err) => {
        if(err){
            console.error("Error al escribir en el archivo: ", err);
            return;
        } else{
            console.log(`${rutaArchivo} ha sido actualizado correctamente`);
        }
    })
})