// ▪ Vista: Encargada de formatear la respuesta que se
// enviará al cliente (en formato JSON).
//2. Creamos un objeto que contendra los metodos para formatear respuestas relacionadas
    //metodo para formatear la respuesta que se enviara al usuario
const formatBookResponse = (book) => {
    //Si no se encontro el vehiculo, devolvemos un objeto json
    if(!book) {
        return JSON.stringify({
            error: 'Libro no encontrado'
        })
    }
    //Si encontro el libro
    return JSON.stringify(book, null, 2);
}

module.exports = {formatBookResponse};