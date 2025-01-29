// Ejercicio 5: Servidor con Contador de Conexiones
// Consigna:
// Crea un servidor TCP que lleve un contador de cuántos clientes se han
// conectado. Cada vez que un nuevo cliente se conecta, el servidor debe
// enviarle un mensaje indicando cuántos clientes se han conectado hasta
// ese momento. Cuando un cliente se desconecta, el servidor debe reducir
// el contador.
// Requisitos:
// • Usa una variable global para mantener el contador de conexiones.
// • Usa el evento connection para incrementar el contador y enviar el
// mensaje al cliente.
// • Usa el evento close para reducir el contador cuando un cliente se
// desconecta.
const net = require('net');
let counterClientsConnected = 0;
const server = net.createServer((socket) => {
    counterClientsConnected++;

    console.log(`Un nuevo cliente se ha conectado, son ${counterClientsConnected} conectados` );
    socket.write(`Eres el cliente: ${counterClientsConnected}`);

    socket.on('close', () => {
        counterClientsConnected--;
        console.log('La conexion con el cliente se ha cerrado')
    });
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${3000}`);
})