// Ejercicio 2: Servidor con Timeout
// Consigna:
// Crea un servidor TCP que cierre automáticamente la conexión con un
// cliente si no recibe datos en un período de 10 segundos. Si el cliente
// envía datos antes de que se cumpla el tiempo, el servidor debe reiniciar
// el contador de tiempo.
// Requisitos:
// • Usa el método socket.setTimeout() para establecer un tiempo de
// espera.
// • Usa el evento timeout para cerrar la conexión si se alcanza el
// tiempo límite.
// • Usa el evento data para reiniciar el contador de tiempo cada vez
// que se reciben datos.
const net = require('net');
const miliseconds = 4000;

const server = net.createServer((socket) => {
    console.log("Un cliente se ha conectado");

    socket.on('data', (data) => {
        console.log('Datos recibidos: ', data.toString());
        //Reiniciamos el contador de tiempo
        socket.setTimeout(miliseconds);
    })

    socket.on('timeout', () => {
        console.log('El tiempo de espera se ha terminado, no se han recibido datos');
        socket.end();
    })
    socket.setTimeout(miliseconds);
})

const PORT = 5000;
server.listen(PORT, () => {
    console.log("Server escuchando en el puerto ", PORT);
});