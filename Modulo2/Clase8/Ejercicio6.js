// Ejercicio 6: Cliente interactivo con la usuaria
//  Consigna
// Crea un cliente donde la usuaria pueda escribir mensajes en la consola y
// enviarlos al servidor.
// • Después de cada mensaje, la usuaria puede escribir otro.
// • Si escribe "salir", el cliente se desconecta.
//  Pistas
// • Usa readline para capturar texto de la usuaria.
// • Si el mensaje es "salir", cierra la conexión con client.end().
const readline = require('readline');
const net = require('net');

const PORT = 5000;
const HOST = 'localhost';
const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('Conectado al servidor')
})

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingresa un mensaje', (mensaje) => {
    if(mensaje === 'salir'){
        rl.close();
        client.end();
    } else {
        rl.question('Ingresa otro mensaje', (mensaje2) => {
            client.write(mensaje2);
            console.log(mensaje2);
        })
    }
})

client.on('error', (err) => {
    console.log('Error', err.message);
})