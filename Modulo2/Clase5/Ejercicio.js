const net = require('net');

const server = net.createServer((socket) => {
    //Ejercicio 1 y 2
    console.log("Un cliente se ha conectado");
    //Ejercicio 3
    socket.on('data', (data) => {
        console.log(`El mensaje del cliente ha sido recibido ${data.toString()}`);
    })

    //Ejercicio4 
    socket.write("Hola Cliente! Tu mensaje ha sido recibido correctamente");

    //Ejercicio5
    socket.on('end', () => {
        console.log("El cliente se ha desconectado");
    })

    const port = 5000;
    server.listen(port, () => {
        console.log(`El servidor esta escuchando desde el puerto ${port}`);
    })
})