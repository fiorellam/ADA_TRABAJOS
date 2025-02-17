// DESAFÍO 3: Cliente con Timeout y Destrucción de Conexión
// Objetivo: Implementar un timeout que cierre la conexión si no recibe
// datos en 10 segundos.
// El cliente debe:
// Conectarse y enviar un mensaje inicial.
// Configurar un setTimeout() de 10 segundos para cerrar la conexión si
// no recibe datos.
// Escuchar el evento 'data' y cancelar el timeout si recibe información.
// Si no recibe datos en 10 segundos, usar client.destroy() y mostrar un
// mensaje en consola.
const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('Mensaje inicial');
    client.write('Mensaje inicial');
})

let timeout;
timeout = setTimeout(() => {
    console.log('Destruyendo la conexion');
    client.destroy()
}, 10000)

client.on('data', (data) => {
    console.log('data', data.toString());
    clearTimeout(timeout);
})

client.on('error', (err) => {
    console.error('Error:', err.message);
});