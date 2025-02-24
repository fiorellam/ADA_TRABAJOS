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

// Dirección del servidor y puerto
const HOST = '127.0.0.1';
const PORT = 4000;

// Crear el cliente TCP
const client = net.createConnection({ host: HOST, port: PORT }, () => {
  console.log('Conectado al servidor');
});

// Recibir datos del servidor
client.on('data', (data) => {
  const responseObject = JSON.parse(data.toString());
  
  console.log('UUID recibido:', responseObject.uuid);
  client.end();
});

client.on('error', (err) => {
  console.error('Error en la conexión:', err);
});

client.on('end', () => {
  console.log('Desconectado del servidor');
});