// Ejercicio 9: Servidor de Transferencia de Archivos
// Consigna:
// Crea un servidor TCP que permita a los clientes enviar un archivo de
// texto al servidor. El servidor debe guardar el archivo en el sistema y
// notificar al cliente cuando la transferencia se haya completado. Además,
// el servidor debe verificar que el archivo no exceda un tamaño máximo
// de 1 MB.
// Requisitos:
// • Usa el evento data para recibir el archivo en trozos (chunks).
// • Usa el método socket.write() para notificar al cliente sobre el
// progreso de la transferencia.
// • Usa el método fs.writeFile() para guardar el archivo en el servidor.
// • Si el archivo excede 1 MB, cierra la conexión y notifica al cliente.
const net = require('net');
const fs = require('fs');
const PORT = 4000;
const server = net.createServer((socket) => {
    console.log('Nuevo Cliente conectado.');

    let fileData = Buffer.alloc(0); //FileData se usa para almacenar los datos del archivo que llegan en partes(chunks)
    let fileSize = 0;

    socket.on('data', (data) => {
        fileData = Buffer.concat([fileData, data]);
        fileSize += data.length;

        if (fileSize > 1048576) { // 1 MB
            socket.write('El archivo excede el tamaño máximo (1 MB).\n');
            socket.end();
            return;
        }

        socket.write(`Recibidos ${fileSize} bytes...\n`);
    });

    socket.on('end', () => {
        if (fileSize <= 1048576) {
            fs.writeFile('archivo.txt', fileData, (err) => {
                if (err) {
                    console.error('Error al guardar el archivo:', err);
                } else {
                    console.log('Archivo guardado correctamente.');
                    socket.write('Archivo recibido y guardado.\n');
                }
            });
        }
    });

    socket.on('error', (err) => {
        console.error('Error en la conexión:', err.message);
    });
});

server.listen(4000, () => {
    console.log('Servidor de transferencia de archivos escuchando en el puerto 3000');
});