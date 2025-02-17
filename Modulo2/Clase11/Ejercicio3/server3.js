// Ejercicio 3: Servidor TCP que Obtiene Información de la Ruta
// Objetivo: Crear un servidor TCP que acepte una ruta y responda con
// la base, el directorio, y la extensión del archivo usando
// path.basename, path.dirname, y path.extname.
// Pasos:
// 1. Configuración del Servidor:
// o Crea un servidor TCP que escuche en un puerto específico
// (por ejemplo, 8082).
// 2. Comando para Obtener Información de la Ruta:
// o El servidor debe recibir una ruta desde el cliente.
// o Usa path.basename, path.dirname, y path.extname para
// obtener la base del nombre, el directorio y la extensión
// del archivo, respectivamente.
// 3. Responder al Cliente:
// o Envía la información al cliente en un formato legible.
// Instrucciones:
// • Ejecuta el servidor y conecta un cliente.
// • Envía rutas completas (e.g., /home/user/docs/file.txt) para
// verificar la funcionalidad.
const net = require('net');
const path = require('path');
const PORT = 8082;

const server = net.createServer((socket) => {
    let buffer = '';

    socket.on('data', (data) => {
        buffer = data.toString();
        const paths = buffer.split('\n');
        paths.forEach((inputPath) => {
            inputPath = inputPath.trim();
            if(inputPath){
                const base = path.basename(inputPath);
                const dirname = path.dirname(inputPath);
                const extname = path.extname(inputPath);
                socket.write(`Base: ${base} DIRNAME: ${dirname} EXTNAME: ${extname}`);
            }
        })
    })

    socket.on('end', () => {
        console.log('Cliente desconectado');
    })
})
server.listen(PORT, () => {
    console.log('Servidor escuchando en puerto', PORT);
})
