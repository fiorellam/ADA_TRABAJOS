// ▪ Controlador: Encargado de recibir la solicitud del
// cliente, llamar al modelo para obtener los datos y
// luego pasar esos datos a la vista para formatear la
// respuesta.
const {getBookById} = require ('../models/bookModel');
const {formatBookResponse} = require('../views/bookView');

//Manejar la solicitud del cliente
const handleBookRequest = (bookId) => {
    const book = getBookById(bookId);
    return formatBookResponse(book);
}

module.exports = {handleBookRequest};