const net = require('net');
const PORT = 5000;
const server = net.createServer();

server.on('connection', (socket) => {
    console.log('Conexion con el servidor');
    socket.write('Bienvenido!!');

    socket.on('data', (data) => {
        socket.write('Mensaje recibido');
        socket.write(`El mensaje del cliente fue: ${data.toString()}`)
        console.log('\nEl cliente' + socket.remoteAddress + socket.remotePort + "dice: " + data);
    });

    socket.on('close', () => {
        console.log('Comunicacion finalizada')
    });

    socket.on('error', (err) => {
        console.log(err.message);
    });
});

server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ' , PORT);
})