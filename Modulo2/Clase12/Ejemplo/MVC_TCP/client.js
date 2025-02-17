//Importacion del modulo net
const net = require('net');

//creamos una conexion tcp al servidor que esta escuchando en el puerto 4000
const client = net.createConnection({port: 4000}, () => {
    console.log('Conectado al servidor');

    //enviamos un id de vehiculo al servidor
    const vehicleId = '1';
    client.write(vehicleId) //enviando el id al servidor
});
//evento data
client.on('data', (data) => {
    console.log('Respuesta del servidor: ', data.toString());
    client.end();
})
client.on('end', () => {
    console.log('Conexion cerrada');
})
client.on('error', (error) => {
    console.log('Error', error.message);
})