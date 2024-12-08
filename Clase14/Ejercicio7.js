// Ejercicio 7: Libros
// Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
// ✓ título: una cadena con el título del libro.
// ✓ autor: una cadena con el nombre del autor del libro.
// ✓ anioPublicacion: un número con el año de publicación del libro.
// Luego, crea una función llamada mostrarLibro que tome un arreglo de libros
// como parámetro y muestre por consola la información de cada libro en el
// formato especificado.
let libro1 = {
    titulo: 'Percy Jackson',
    autor: 'Rick Riordan',
    anioPublicacion: 2025
}
let libro2 = {
    titulo: 'La Cabaña',
    autor: 'JER UMA',
    anioPublicacion: 2020
}
function mostrarLibro (book_array) {
    for(let i=0; i<book_array.length; i++){
        let libro = book_array[i];
        console.log(`Libro: ${libro.titulo} autor: ${libro.autor} año de Publicacion: ${libro.anioPublicacion} \n`)
    }
}
let librosArreglo = [libro1, libro2];

mostrarLibro(librosArreglo);