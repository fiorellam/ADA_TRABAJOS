// Ejercicio 7: Servidor de Chat Grupal
// Consigna:
// Crea un servidor TCP que permita a múltiples clientes conectarse y enviar
// mensajes. Cada mensaje enviado por un cliente debe ser retransmitido a 
// todos los demás clientes conectados. El servidor debe notificar cuando
// un cliente se conecta o desconecta.
// Requisitos:
// • Usa un array para almacenar las conexiones de los clientes.
// • Usa el evento data para recibir mensajes y retransmitirlos a todos
// los clientes.
// • Usa el evento end para eliminar a un cliente del array cuando se
// desconecta.
// • Notifica a los demás clientes cuando alguien se conecta o
// desconecta.
const net = require('net');
let arrayClientsConnections = []
const server = net.createServer((socket) => {
    console.log('Nuevo cliente conectado');
    arrayClientsConnections.push(socket);
    socket.write('Nuevo cliente conectado');
    for(let i = 0; i < arrayClientsConnections.length; i++){
        let clienteActual = arrayClientsConnections[i];
        if(socket != arrayClientsConnections[i]){
            clienteActual.write('Nuevo cliente conectado');
        }
    }
    socket.on('data', (data) => {
        const dataString = data.toString();
        for(let i = 0; i < arrayClientsConnections.length; i++){
            let clienteActual = arrayClientsConnections[i]
            if(socket != clienteActual){
                clienteActual.write(`Retransmitiendo ${dataString}`);
            }
        }
    })
    
    socket.on('end', () => {
        arrayClientsConnections = arrayClientsConnections.filter(client => client != socket);
        console.log('Cliente desconectado');
        for(let i = 0; i < arrayClientsConnections.length; i++){
            let clienteActual = arrayClientsConnections[i];
            clienteActual.write('Un cliente se ha desconectado');
        }
        
    })
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})
