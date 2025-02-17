// Ejercicio 2: Servidor TCP que Normaliza Rutas
// Objetivo: Crear un servidor TCP que normalice las rutas recibidas
// utilizando path.normalize y envíe la ruta normalizada al cliente.
// Pasos:
// 1. Configuración del Servidor:
// o Crea un servidor TCP que escuche en un puerto específico
// (por ejemplo, 8081).
// 2. Comando para Normalizar Rutas:
// o El servidor debe recibir una ruta desde el cliente.
// o Usa path.normalize para normalizar la ruta.
// 3. Responder al Cliente:
// o Envía la ruta normalizada al cliente.
// Instrucciones:
// • Ejecuta el servidor y conecta un cliente.
// • Envía rutas con barras redundantes y puntos (e.g.,
// ./docs/../file.txt) para verificar la funcionalidad.

const net = require('net');
const PORT = 8081;

const client = net.createConnection({port: PORT}, () => {
    console.log('Conectado al servidor');

    client.write("C:/Users//fiore/../Desktop/Work/Dev/../React\n")
    client.write("///Dev/../React//-intro-javascript\n")
    client.write("///-intro-javascript\n")
    client.write('./docs/../file.txt\n'); // Ruta con barras redundantes y puntos
    client.write('docs/./file.txt\n');    // Otra ruta con puntos
});

client.on('data', (data) => {
    console.log(data.toString());
    client.end();
})

client.on('end', () => {
    console.log('Desconexion del server');
})