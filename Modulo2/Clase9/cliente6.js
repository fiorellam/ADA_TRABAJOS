// DESAFÍO 6: Cliente con Control Inteligente de Reintentos y Máximo
// de Fallos
//  Objetivo: Crear un cliente TCP que intente reconectarse si la
// conexión se pierde, pero que abandone después de 5 intentos fallidos.
//  El cliente debe:
//  Intentar conectarse al servidor.
//  Si se desconecta, volver a intentar cada 2 segundos.
//  Llevar un contador de intentos fallidos.
//  Si llega a 5 intentos fallidos, terminar el proceso con un mensaje de
// error.
//  Manejar adecuadamente los eventos 'error', 'close' y 'data'.
const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

let intentos = 0;

let client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('Mensaje inicial');
    client.write('Mensaje inicial');
});

client.on('close', () => {
    intentos++;
    console.log('Intento: ', intentos);
    if(intentos <= 5){
        setTimeout(() => {
            client = net.createConnection({port: PORT, host: HOST}, () => {
                console.log('Reconectado al servidor');
                client.write('¡Hola, servidor!');
            });
    
        }, 2000)
    } else {
        console.log('Se alcanzo el limite de intentos');
        return;
    }
});

client.on('data', (data) => {
    console.log('Datos recibidos:', data.toString());
});

client.on('error', (err) => {
    console.error('Error en la conexión:', err.message);
});

//OTRA FORMA

const net = require('net');

let intentosFallidos = 0;
const maxIntentos = 5;

function conectarCliente() {
    if (intentosFallidos >= maxIntentos) {
        console.log('Se alcanzó el máximo de intentos. Saliendo del programa.');
        return;
    }

    const client = net.createConnection({ port: 5000 }, () => {
        console.log('Conectado al servidor');
        client.write('¡Hola, servidor!');
        intentosFallidos = 0; // Resetear intentos si la conexión es exitosa
    });

    client.on('data', (data) => {
        console.log('Datos recibidos:', data.toString());
    });

    client.on('error', (err) => {
        console.error('Error en la conexión:', err.message);
    });

    client.on('close', () => {
        console.log(`Conexión cerrada. Intentando reconectar... (${intentosFallidos + 1}/${maxIntentos})`);
        intentosFallidos++;
        setTimeout(conectarCliente, 2000);
    });
}

conectarCliente();