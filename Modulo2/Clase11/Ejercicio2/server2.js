// Ejercicio 2: Servidor TCP que Normaliza Rutas
// Objetivo: Crear un servidor TCP que normalice las rutas recibidas
// utilizando path.normalize y envíe la ruta normalizada al cliente.
// Pasos:
// 1. Configuración del Servidor:
// o Crea un servidor TCP que escuche en un puerto específico
// (por ejemplo, 8081).
// 2. Comando para Normalizar Rutas:
// o El servidor debe recibir una ruta desde el cliente.
// o Usa path.normalize para normalizar la ruta.
// 3. Responder al Cliente:
// o Envía la ruta normalizada al cliente.
// Instrucciones:
// • Ejecuta el servidor y conecta un cliente.
// • Envía rutas con barras redundantes y puntos (e.g.,
// ./docs/../file.txt) para verificar la funcionalidad.
const net = require('net');
const path = require('path');
const PORT = 8081;

const server = net.createServer((socket) => {
    let buffer = '';
    socket.on('data', (data) => {
        buffer += data.toString();
        const routes = buffer.split('\n');
        routes.forEach((inputPath) => {
            inputPath = inputPath.trim();
            if(inputPath){
                const pathNormalized = path.normalize(inputPath);
                socket.write(`Normalizada: ${pathNormalized}\n`);
            }
        })
        buffer = routes[routes.length - 1];
    })
    socket.on('end', () => {
        console.log('Desconectado');
    })
});


server.listen(PORT, () => {
    console.log('Servidor escuchando en puerto', PORT);
})
