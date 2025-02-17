// DESAFÍO 5: Cliente con Eventos y Control de Referencias
// Objetivo: Aplicar ref() y unref() para controlar la terminación del
// proceso de Node.js.
// El cliente debe:
// Conectarse y enviar un mensaje inicial.
// Escuchar los eventos 'data', 'end', 'close' y 'error'.
// Llamar a client.unref() a los 10 segundos para permitir que el proceso
// termine.
// A los 15 segundos, llamar a client.ref() para que el proceso se
// mantenga activo.
// Cerrar la conexión a los 20 segundos.
const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('Mensaje inicial');
    client.write('Mensaje inicial');
});

client.on('data', (data) => {
    console.log(data.toString());
    client.write(data.toString());
});

client.on('end', () => {
    console.log('Finalizando la conexion');
});

client.on('close', () => { 
    console.log('La conexion se ha cerrado');
});

client.on('error', (error) => {
    console.log('Error: ', error.message);
});

setTimeout(() => {
    console.log('Terminando el proceso de nodejs')
    client.unref();
}, 10000)

setTimeout(() => {
    console.log('Activando el proceso de nodejs')
    client.ref();
}, 15000)

setTimeout(() => {
    console.log('Cerrando la conexion')
    client.end();
}, 20000)