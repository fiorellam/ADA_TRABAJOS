// DESAFÍO 1: Cliente con Reconexión Automática
// Objetivo: Crear un cliente TCP que se conecte a un servidor, pero si la
// conexión se pierde, debe intentarlo nuevamente cada 3 segundos.
// El cliente debe:
// Conectarse al servidor en el puerto 5000.
// Enviar un mensaje inicial: "¡Hola, servidor!".
// Escuchar el evento 'close' y volver a conectarse tras 3 segundos.
// Escuchar y manejar 'error', mostrando el mensaje en consola.
const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('¡Hola, servidor!')
    client.write('¡Hola, servidor!')

});
client.on('data', (data) => {
    console.log(data.toString());
    client.write(data.toString());
})
client.on('close', () => {
    console.log('Conexion cerrada, reintentando conexión en 3 segundos');
    setTimeout(() => {
        client = net.createConnection({port: PORT, host: HOST}, () => {
            console.log('Reconectando con el servidor');
            client.write('Reconectando, hola servidor!');
        });
    }, 3000)
})
client.on('error', (err) => {
    console.error('Error:', err.message);
})

//OTRA FORMA DE HACERLO

function connectToServer() {
    const client = net.createConnection({port: PORT, host: HOST}, () => {
        client.write('Hola servidor!');
    })

    client.on('close', () => {
        console.log('Conexion cerrada. Reintentando en 3 segundos...')
        setTimeout(connectToServer, 3000);
    })

    client.on('error', (err) => {
        console.error('Error:', err.message);
    });
}

connectToServer();