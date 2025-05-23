// Ejercicio 7: Cliente que destruye el socket al fallar
//  Consigna
// Crea un cliente que:
// 1. Se conecte al servidor.
// 2. Si hay un error en la conexión, use client.destroy() y muestre "
// Conexión destruida".
//  Pistas
// • client.destroy() libera los recursos del socket de inmediato.
const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log(`Conectado al servidor`);

})
client.on('data', (data) => {
    console.log('Datos recibidos del servidor', data.toString());
})

client.on('error', (err) => {
    console.log('Error en la conexion', err.message);
    client.destroy();
    console.log('Conexion destruida');
})