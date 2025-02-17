// Ejercicios:
// Ejercicio 1: Sistema de Gestión de Libros
// Consigna:
// Vamos a implementar un sistema de gestión de libros donde el cliente
// pueda solicitar información sobre un libro específico a través de su ID. El
// servidor procesará la solicitud, buscará el libro en una base de datos
// simulada (archivo JSON) y devolverá la información al cliente.
// Pasos a seguir:
// 1. Servidor TCP:
// o El servidor debe escuchar en el puerto 4000.
// o Debe recibir solicitudes del cliente que incluyan el ID de un
// libro.
// o Utilizar el patrón MVC:
// o El servidor debe enviar la respuesta al cliente y cerrar la
// conexión.
const net = require('net');
const {handleBookRequest} = require('./controllers/bookController');
const PORT = 4000;

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const bookId = data.toString().trim();
        console.log(`Solicitud para el libro con id : ${bookId}`);

        const response = handleBookRequest(bookId);
        socket.write(response);
        socket.end();
    });
    socket.on('end', () => {
        console.log('Cliente desconectado');
    })
    socket.on('error', (err) => {
        console.error('Error en el servidor:', err);
    });
});

// Servidor escucha en el puerto 4000
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});