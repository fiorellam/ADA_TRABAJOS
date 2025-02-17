// Implementar un sistema de reservas de hoteles donde el cliente pueda
// consultar la disponibilidad de habitaciones en un hotel específico. El
// servidor procesará la solicitud, buscará la disponibilidad en una base de
// datos simulada (archivo JSON) y devolverá la información al cliente.

// o El servidor debe escuchar en el puerto 4001.
// o Debe recibir solicitudes del cliente que incluyan el ID del
// hotel.
const net = require('net');
const {handleHotelRequest} = require('./controllers/hotelController');
const PORT = 4001;

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const hotelId = data.toString().trim();

        const response = handleHotelRequest(hotelId);
        socket.write(response);
        socket.end();
    })

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    socket.on('error', (err) => {
        console.error('Error en el servidor:', err);
    });
})
// Servidor escucha en el puerto 4001
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});