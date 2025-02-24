// Ejercicio 2: Servidor TCP con UUID v5 y JSON
// Objetivo:
// Crear un servidor TCP que responda con un objeto JSON que contenga
// un UUID v5 basado en un nombre fijo y un espacio de nombres.
// Pasos:
// 1. Servidor TCP (server.js):
// o Importar los módulos net y uuid.
// o Crear un servidor TCP que genere un UUID v5 basado en un
// nombre y un espacio de nombres.
// o Enviar un objeto JSON con el UUID al cliente.
// 2. Cliente TCP (client.js):
// o Importar el módulo net.
// o Conectar al servidor TCP, recibir el objeto JSON, parsearlo y
// mostrar el UUID en la consola.
const net = require('net');
const {v3:uuidv3, v5:uuidv5} = require('uuid');

const PORT = 4000;
const server = net.createServer((socket) => {
    console.log('Cliente conectado');
    
    const NAMESPACE = uuidv3.URL;
    const namev5 = 'UsandoV5';
    const idv5 = uuidv5(namev5,NAMESPACE );
    console.log("UUID V5 Basada en nombre y espacio con nombre con SHA-1", idv5);
    socket.write(`Enviando UUID V5: ${idv5}`);

    socket.on('data', (data) => {
        console.log(`Datos recibidos: ${data}`);
    })
})

server.listen(PORT, () =>{
    console.log('Server escuchando en puerto', PORT);
})
