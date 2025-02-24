// Ejercicio 3: Convertir Datos JSON a un Objeto y Acceder a sus
// Propiedades
// Objetivo: Convertir una cadena JSON a un objeto y acceder a sus
// propiedades.
// Instrucciones:
// • Crea un archivo llamado exercise3.js.
// • Define una cadena JSON que represente a un libro (incluye
// campos como title, author, y year).
// • Convierte la cadena JSON a un objeto y muestra cada
// propiedad en la consola.
const libroCadenaJson = `{
    "title": "Amarse con los ojos abiertos",
    "author": "Jorge Bucay",
    "year": 1998
}`

const objectBook = JSON.parse(libroCadenaJson);
console.log(objectBook.title)
console.log(objectBook.author)
console.log(objectBook.year)