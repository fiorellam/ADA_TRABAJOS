// Ejercicio 6: Servidor de Comandos
// Consigna:
// Crea un servidor TCP que permita a los clientes enviar comandos
// simples. Dependiendo del comando recibido, el servidor debe realizar
// una acción específica:
// • Si el cliente envía "fecha", el servidor debe responder con la fecha y
// hora actual.
// • Si el cliente envía "ip", el servidor debe responder con la dirección
// IP del cliente.
// • Si el cliente envía "salir", el servidor debe cerrar la conexión.
// • Para cualquier otro comando, el servidor debe responder
// "Comando no reconocido".
// Requisitos:
// • Usa el evento data para recibir y procesar los comandos.
// • Usa el método socket.write() para enviar respuestas.
// • Usa el método socket.end() para cerrar la conexión cuando el
// cliente envíe "salir".
// A PARTIR DE AQUÍ LOS EJERCICIOS TIENEN UNA DIFICULTAD MAYOR,
// NO SE ASUSTEN SI NO LOGRAN COMPLETARLOS:
const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        let dataString = data.toString();
        switch(dataString){
            case 'fecha':
                socket.write(`Fecha ${new Date()}`);
                break;
            case 'ip':
                socket.write(`Ip: ${socket.remoteAddress}`);
                break;
            case 'salir':
                socket.end();
                break;
            default: 
                socket.write("Instruccion no reconocida");
        }
    })
})
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${4000}`);
})