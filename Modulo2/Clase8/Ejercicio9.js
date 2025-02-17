// Ejercicio 9: Cliente que reconecta automáticamente
//  Consigna
// Crea un cliente que:
// 1. Si la conexión falla, reintente conectarse cada 3 segundos hasta
// que tenga éxito.
//  Pistas
// • Usa setTimeout() para intentar de nuevo tras 3 segundos.
// • Llama a net.createConnection() dentro del reintento.
const net = require('net');

const HOST= 'localhost';
const PORT = 3000;
const time = 3000; 

const client = net.createConnection({host: HOST, port: PORT}, () => {
    console.log('Conectando al servidor');
    client.write('Hola servidor!');
})
client.on('error', (err) => {
    console.error('Error en la conexión:', err.message);
    setTimeout(() => {
        console.log('Intentando conectar al servidor nuevamente...');
        client = net.createConnection({host: HOST, port: PORT});
    }, time);
});

client.on('close', () => {
    console.log('Conexión cerrada. ');
    client.end();
});
