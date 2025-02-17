const net = require('net');

//2. Conexion del cliente
const client = net.createConnection({port: 5000}, () => {
    console.log('Conectando al servidor...');
    client.write('Hola servidor, soy el cliente');
})

//Eventos
client.on('data', (data) => {
    console.log('Mensaje recibido ', data.toString());
})

client.on('end', () => {
    console.log('El servidor ha cerrado la conexion');
})

client.on('close', () => {
    console.log('La conexion cerrada con el servidor');
})

client.on('error', (err) => {
    console.log('Error: ', err.message);
})

client.setTimeout(() => {
    console.log('Pausando la recepcion de datos');
    client.pause();
}, 2000)

client.setTimeout(3000, () => {
    console.log('Reanudando la recepcion de datos');
    client.resume();
})

client.setTimeout(() => {
    console.log('Destruyendo la conexion');
    client.destroy();
}, 2000)

client.setTimeout(() => {
    console.log('Eliminando la referencia del socket');
    client.unref();
}, 2000)

client.setTimeout(() => {
    console.log('Manteniendo la conexion activa');
    client.ref();
}, 2000)

client.setTimeout(() => {
    console.log('Cierre correcto de conexion');
    client.end();
}, 2000)