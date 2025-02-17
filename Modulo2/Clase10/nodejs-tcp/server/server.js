//1. Importamos el modulo net
const net = require('net');

//2. Creamos el servidor

const server = net.createServer();

//3. Manejar el evento connection que emite cuando un 
// cliente se conecta al servidor
server.on('connection', (socket) => {
    //Manejando el evento data
    socket.on('data', (data) => {
        console.log('\nEl cliente' + socket.remoteAddress + socket.remotePort + "dice: " + data);
        //Confirmacion de envio de recepcion de datos
        socket.write('Recibi tu mensaje sr cliente!');
    })

    //Manejamos el evento close
    socket.on('close', () => {
        console.log('Comunicacion finalizada');
    })
    //Manejamos el evento error
    socket.on('error', (err) => {
        console.log(err.message);
    })
})

//Paso 4. Iniciamos el servidor 
server.listen(4000, () => {
    console.log('Servidor escuchando en el puerto', server.address().port);
})
