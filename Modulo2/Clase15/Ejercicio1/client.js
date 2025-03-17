//Paso 6: Importacion en el cliente
const net = require('net');
//Paso 7: creamos al cliente
const client = net.createConnection({port: 3000}, () => {
    console.log('conectado al servidor ');
    client.write('Hola servidor');
});
//evento data
client.on('data', (data) => {
    console.log('Respuesta del servidor: ', data.toString());
})
//evento end
client.on('end', () => {
    console.log('Desconectado del servidor');
})
client.on('error', () => {
    console.log('Error');
})
