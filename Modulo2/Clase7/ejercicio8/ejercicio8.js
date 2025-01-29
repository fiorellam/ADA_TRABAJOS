// Ejercicio 8: Servidor con Autenticación Simple
// Consigna:
// Crea un servidor TCP que requiera que los clientes se autentiquen antes
// de poder enviar mensajes. El servidor debe solicitar un nombre de
// usuario y una contraseña. Si las credenciales son correctas, el servidor
// debe permitir que el cliente envíe mensajes. Si no, debe cerrar la
// conexión.
// Requisitos:
// • Usa el evento data para recibir las credenciales y validarlas.
// • Usa el método socket.write() para solicitar credenciales y enviar
// mensajes de éxito/error.
// • Usa el método socket.end() para cerrar la conexión si las
// credenciales son incorrectas.
const net = require('net');
require('dotenv').config();

const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;

const server = net.createServer((socket) => {
    console.log('Nuevo cliente conectado');

    socket.on('data', (data) => {
        socket.write('Ingresa tu nombre de usuario y tu contrasena')
        const dataString = data.toString();
        if(USER_NAME === dataString.user_name && PASSWORD === dataString.password){
            socket.write('Autenticacion exitosa')
        } else {
            socket.write('La infomacion es incorrecta, no pudiste autenticarte');
            socket.end();
        }
    })
})
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})