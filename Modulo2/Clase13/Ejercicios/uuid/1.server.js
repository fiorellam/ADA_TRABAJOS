// Ejercicios:
// Ejercicio 1: Servidor TCP con UUID v4
// Objetivo:
// Crear un servidor TCP que asigne un UUID v4 único a cada conexión y
// envíe el UUID de vuelta al cliente.
// Pasos:
// 1. Servidor TCP (server.js):
// o Importar los módulos net y uuid.
// o Crear un servidor TCP que genere un UUID v4 para cada
// conexión y envíe el UUID al cliente.
// 2. Cliente TCP (client.js):
// o Importar el módulo net.
// o Conectar al servidor TCP, recibir el UUID y mostrarlo en la
// consola.
const net = require('net');
const {v4:uuidv4} = require('uuid');
const PORT = 4000;
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    const idv4 = uuidv4();
    console.log("UUID V4(aleatorio)", idv4);
    socket.write(`Enviando UUID V4: ${idv4}`);

    socket.on('data', (data) => {
        console.log(`Datos recibidos: ${data}`);
    })
})

server.listen(PORT, () =>{
    console.log('Server escuchando en puerto', PORT);
})
