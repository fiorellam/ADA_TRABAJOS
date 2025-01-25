const net = require('net');

let clientesConectados = 0;
const server = net.createServer((socket) => {
    clientesConectados++;
    console.log(`Un cliente se ha conectado. Clientes Conectados: ${clientesConectados}`);

    socket.on('end', () =>{
        clientesConectados--;
        console.log(`Un cliente se ha desconectado. Clientes conectados: ${clientesConectados}`)
    })
});

const port = 5000;
server.listen(port, () => {
    console.log(`El servidor esta escuchando desde el puerto ${port}`);
})