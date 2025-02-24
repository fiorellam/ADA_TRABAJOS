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

const PORT = 4000;
const HOST = '127.0.0.1';

const client = new net.Socket();

client.connect(PORT, HOST, () => {
    console.log(`Conectado al servidor`);
    client.write('Cliente conectado');
})
client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
    client.destroy(); // Cierra la conexión después de recibir la respuesta
});

client.on('close', () => {
    console.log('Conexión cerrada');
});

client.on('error', (err) => {
    console.error('Error en el cliente:', err);
});