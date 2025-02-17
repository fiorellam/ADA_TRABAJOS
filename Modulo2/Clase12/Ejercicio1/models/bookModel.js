//1. Modelo
// ▪ Modelo: Encargado de leer el archivo JSON
// (books.json) que contiene la lista de libros y buscar el
// libro por ID.
const fs = require('fs');
const path = require('path');

//2. Denfinimos la ruta del archivo books.json
const bookPath = path.join(__dirname, 'books.json');

//3. Creamos un objeto que contendra metodos para interactuar con los datos
const getBookById = (id) => {
    try{
        //Leemos el archivo json de manera sincrona
        const booksData = fs.readFileSync(bookPath);
        //convertimos el contenido en formato json a un objeto javascript
        const books = JSON.parse(booksData);
        //Buscamos el libro por id, si no coincide el id, retornamos null
        const book = books.find(book => book.id === parseInt(id,10));
        return book || null; // Si no se encuentra el libro, retornamos null

    } catch(error){
        console.error('Error al leer el archivo json', error);
        return null;
    }
}

//Exportamos el objeto vehicle model
module.exports = {getBookById};