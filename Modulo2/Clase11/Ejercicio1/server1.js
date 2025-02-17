// Actividades:
// Ejercicio 1: Servidor TCP que Valida Rutas
// Objetivo: Crear un servidor TCP que acepte comandos desde el
// cliente para validar si una ruta es absoluta o relativa, y responder con
// la información correspondiente.
// Pasos:
// 1. Configuración del Servidor:
// o Crea un servidor TCP que escuche en un puerto específico
// (por ejemplo, 8080).
// 2. Comando para Validar Rutas:
// o El servidor debe recibir una ruta desde el cliente.
// o Usa path.isAbsolute para verificar si la ruta es
// absoluta o relativa.
// 3. Responder al Cliente:
// o Envía una respuesta al cliente indicando si la ruta es
// absoluta o relativa.
// Instrucciones:
// • Ejecuta el servidor y conecta un cliente
// • Envía diferentes rutas para verificar la funcionalidad.
// • IMPORTANTE: Cuando la consigna menciona que el servidor
// debe poder recibir "comandos" desde el cliente, se refiere a
// que el cliente enviará datos (en este caso, rutas) al servidor, y el
// servidor deberá procesar esos datos para determinar si son
// rutas absolutas o relativas. En el contexto de un servidor TCP,
// un "comando" puede ser cualquier tipo de dato que el cliente
// envíe al servidor para que lo procese. En este caso, el
// "comando" es una ruta de archivo que el cliente envía al
// servidor.
const net = require('net');
const path = require('path');
const PORT = 8080;

const server = net.createServer((socket) => {

    let buffer = ''; //Variable para acumular los datos
    socket.on('data', (data) => {
        //acumular los datos recibidos
        buffer += data.toString();
        // Verificar si el buffer contiene una ruta completa (ejemplo: delimitada por un salto de línea)
        const routes = buffer.split('\n');
        //procesar todas las rutas recibidas
        routes.forEach((inputPath) => {
            inputPath = inputPath.trim(); // Limpiar espacios innecesarios
            if(inputPath) {//verificar si la ruta no esta vacia
                const isAbsolute = path.isAbsolute(inputPath);
                const response = isAbsolute ? 'La ruta es absoluta' : 'La ruta es relativa';
                socket.write(response + '\n'); // Enviar la respuesta con salto de línea
            }
        })
        buffer = routes[routes.length - 1]; // buffer = '/home/usuarios/file.txt'
        // La línea buffer = routes[routes.length - 1] asegura que cualquier dato que no se haya procesado 
        // (porque llegó incompleto o en fragmentos) se guarde para ser procesado en la próxima iteración, 
        // evitando perder datos. Esto permite que el servidor maneje correctamente la recepción de datos 
        // fragmentados y continúe procesando la siguiente parte de los datos cuando esté disponible.
    })

    socket.on('end', () => {
        console.log('Cliente desconectado');
    })
});

server.listen(PORT, () => {
    console.log('Servidor escuchando en puerto ', PORT);
})