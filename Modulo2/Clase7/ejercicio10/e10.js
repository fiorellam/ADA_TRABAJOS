// Ejercicio 10: Servidor con Historial de Mensajes
// Consigna:
// Crea un servidor TCP que almacene un historial de los últimos 10
// mensajes enviados por los clientes. Cuando un nuevo cliente se conecte,
// el servidor debe enviarle el historial de mensajes. Los mensajes deben
// almacenarse en memoria y actualizarse cada vez que un cliente envía un
// nuevo mensaje.
// Requisitos:
// • Usa un array para almacenar el historial de mensajes.
// • Usa el evento data para recibir mensajes y actualizar el historial.
// • Usa el método socket.write() para enviar el historial al cliente
// cuando se conecta.
// • Limita el historial a los últimos 10 mensajes.
const net = require('net');
let historyMessages = [];

const server = net.createServer((socket) => {
    console.log('Cliente nuevo');

    if(historyMessages.length > 0){
        historyMessages.forEach((message, index) => {
            socket.write(`${index}: ${message}`);
        })
    } else {
        socket.write("Aun no existen mensajes en el historial");
    }
    
    socket.on('data', (data) => {
        const messageString = data.toString();
        if(historyMessages.length >= 10){
            historyMessages.shift(); //se elimina el mensaje mas antiguo
        } 
        historyMessages.push(messageString);
        
        for(let i = 0; i <historyMessages.length; i++){
            socket.write(historyMessages[i]);
        }
    })
})