const net = require('net');
const readline = require('readline-sync');

const options = {
    port: 5000,
    host: 'localhost'
}

const client = net.createConnection(options);

client.on('connect', () => {
    console.log('Conexion satisfactoria');
    sendLine();
})

client.on('data', (data) => {
    console.log('El servidor dice: ' + data.toString());
    sendLine();
})

client.on('error', (err) => {
    console.log(err.message);
})

client.on('close', () => {
    console.log('Finalizando la conexion');
})

function sendLine(){
    let line = readline.question('\n Digita alguna cosa \t');
    if(line == "0"){ //Verifica si el usuario ingreso 0 
        client.end(); //cierra la conexion con el servidor si se ingreso 0
    } else {
        client.write(line) //Envia mennsaje ingresado por el usuario
    }
}