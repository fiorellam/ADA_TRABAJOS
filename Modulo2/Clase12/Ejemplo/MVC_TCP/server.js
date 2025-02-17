//Importamos el modulo net
const net = require('net');

//Importamos el controlador
const VehicleController = require('./controllers/vehicleController');

//creamos el servidor 
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    //evento data
    socket.on('data', (data) => {
        //convertimos los datos recibivos a una cadena de texto y eliminamos espacios
        const vehicleId = data.toString().trim();
        console.log(`Solicitud recibida: ID ${vehicleId}`);

        //llamamos al metodo handlerRequest del controlador para manejar la solicitud 
        //este metodo toma el id del vehiculo y devuelve una respuesta formateada
        const response = VehicleController.handleRequest(vehicleId);

        //enviamos la respuesta al cliente usando el metodo write
        socket.write(response);
    })

    //evento end
    socket.on('end', () => {
        console.log('Cliente desconectado');
    })
})
const PORT = 4000;
server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ', PORT);
})