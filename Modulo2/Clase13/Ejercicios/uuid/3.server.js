// Ejercicio 3: Servidor TCP con UUID v1 y JSON
// Objetivo:
// Crear un servidor TCP que responda con un objeto JSON que contenga
// un UUID v1 basado en el tiempo y la dirección MAC.
// Pasos:
// 1. Servidor TCP (server.js):
// o Importar los módulos net y uuid.
// o Crear un servidor TCP que genere un UUID v1 basado en el
// tiempo.
// o Enviar un objeto JSON con el UUID al cliente.
// 2. Cliente TCP (client.js):
// o Importar el módulo net.
// o Conectar al servidor TCP, recibir el objeto JSON, parsearlo y
// mostrar el UUID en la consola.
const net = require('net');
const {v1:uuidv1} = require('uuid');

const PORT = 4000;
const server = net.createServer((socket) => {
    console.log('Cliente conectado');
    
    const idv1 = uuidv1();
    const responseJSONObject = {
        uuid: idv1
    }
    console.log("UUID V1 Basada en tiempo", responseJSONObject);
    socket.write(JSON.stringify(responseJSONObject));

    socket.on('data', (data) => {
        console.log(`Datos recibidos: ${data}`);
    })

    socket.on('end', () => {
        socket.end();
    })
})

server.listen(PORT, () =>{
    console.log('Server escuchando en puerto', PORT);
})
