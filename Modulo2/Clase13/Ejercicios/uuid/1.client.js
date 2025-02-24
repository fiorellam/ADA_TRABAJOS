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