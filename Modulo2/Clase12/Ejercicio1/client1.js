// 2. Cliente TCP:
// o El cliente debe conectarse al servidor y enviar un ID de libro.
// o Debe recibir la respuesta del servidor y mostrarla en la
// consola.
// o El cliente debe permitir al usuario ingresar el ID del libro que
// desea consultar.
// Estructura del Proyecto:
// • models/bookModel.js: Modelo para manejar la lista de libros.
// • views/bookView.js: Vista para formatear la respuesta.
// • controllers/bookController.js: Controlador para manejar las
// solicitudes.
// • server.js: Servidor TCP.
// • client.js: Cliente TCP.
const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const PORT = 4000;
const HOST = '127.0.0.1';

const requestBook = (bookId) => {
    const client = new net.Socket();

    client.connect(PORT, HOST, () => {
        console.log(`Conectado al servidor`);
        client.write(bookId);
    })
    client.on('data', (data) => {
        console.log('Respuesta del servidor:', data.toString());
        client.destroy(); // Cierra la conexión después de recibir la respuesta
    });

    client.on('close', () => {
        console.log('Conexión cerrada');
        rl.close();
    });

    client.on('error', (err) => {
        console.error('Error en el cliente:', err);
        rl.close();
    });
};

// Solicita al usuario el ID del libro
rl.question('Ingrese el ID del libro que desea consultar: ', (bookId) => {
    requestBook(bookId);
});
