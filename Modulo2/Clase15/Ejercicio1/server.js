// Ejercicio 1: Crear un Servidor TCP con Persistencia de Datos
// Consigna:
// Crea un servidor TCP que reciba mensajes de los clientes y los guarde en
// un archivo JSON. Luego, permite a los clientes consultar todos los
// mensajes almacenados.
// Pasos:
// • Usa el módulo net para crear el servidor.
// • Usa fs para guardar los mensajes en un archivo mensajes.json.
// • Implementa un comando especial (ej: /historial) para que los
// clientes puedan consultar todos los mensajes.
//Paso 1: Importamos los modulos necesarios
const net = require('net');
const fs = require('fs');
const path = require('path');

//Paso 2: Definimos la ruta donde se guardaran los mensajes en formato json
const rutaMensajes = path.join(__dirname, 'mensajes.json');

//Paso 3: verificamos si el archivo json existe y si no que se cree con un array vacio dentro
if(!fs.existsSync(rutaMensajes)){
    fs.writeFileSync(rutaMensajes, '[]', 'utf-8');
}

//Paso 4: creamos el servidor
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    //Manejamos los datos recibidos del cliente
    socket.on('data', (data) => {
        const mensaje = data.toString().trim();

        //si el mensaje recibido es igual a /historial, enviamos todos los mensajes almacenados
        if(mensaje === '/historial'){
            //leemos el contenido del archivo mensaje.json
            const historial = fs.readFileSync(rutaMensajes, 'utf-8');
            //enviamos el historial(todos los mensajes)
            socket.write(`Historial de mensajes: \n ${historial}`);
        } else {
            //si no me mannda ese comando hacer lo siguiente
            //leemos el archivo json y los convertimos en un array de objetos
            const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8') || '[]');
            //agregamos el numero mensaje con la fecha y hora actual
            mensajes.push({fecha : new Date().toISOString(), mensaje});
            //guardamos el array actualizado en el archivo mensajes.json con un formato legible
            fs.writeFileSync(rutaMensajes, JSON.stringify(mensaje, null, 2), 'utf-8');
            socket.write('Mensaje guardado correctamente');
        }
    })

    //manejamos la desconexion del cliente
    socket.on('end', () => {
        console.log('cliente desconectado');
    })
    socket.on('error', () => {
        console.log('Error');
    })
    
})

//Paso 5 inicio del servidor
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000 ');
})