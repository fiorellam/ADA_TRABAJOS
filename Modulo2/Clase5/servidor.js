//Importar modulo NET
const net = require('net');

//2. Crear servidor tcp usando la funcion de create
const server = net.createServer((socket) => {
    //Este mensaje aparece cuando un cliente se conecta al servidor
    console.log('Un cliente se ha conectado!');

    //Escuchamos el evento data que se activa cuando el cleinte envia datos al servidor
    socket.on('data', (data) => {
        //Mostrara en consola el mensaje recibido de cliente
        console.log('Mensaje recibido:', data.toString());
    })

    socket.on('end', () => {
        console.log('El cliente se ha desconectado');
    })
})

//PASO 3: Definimos el puerto en el que el servidor estara escuchando conex
const PORT = 4000; 

//Iniciamos el servidor y lo ponemos a escuchar en el puerto especifico
server.listen(PORT, () => {
    //Mostramos un mensaje por consola indicando que el servidor esta listo
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
})