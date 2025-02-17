//1/IMPORTACIONES
const net = require('net');
const readline = require('readline-sync');
//2. Definimos las opciones de conexion para el cliente

const options = {
    port: 4000,
    host: '127.0.0.1'
}
//3. Crear nueva conexion con el servidor
const client = net.createConnection(options);

//5. //Manejo de eventos 
client.on('connect', () => {
    console.log('Conexion satisfactoria!');
    sendLine(); //Llamo a la funcion sendLine para que el usuario ingrese los datos 
})

client.on('data', (data) => {
    console.log('El servidor dice: ' + data);
    sendLine();
})

client.on('error', (err) => {
    console.log(err.message);
})

//4. Definimos la funcion sendLine() que permite al usuario ingresar un mensaje y 
//decide qué hacer con el
function sendLine(){
    //Muestra un prompt y lee la entrada del usuario de manera sincrona
    let line = readline.question('\n Digita alguna cosa \t');
    if(line == "0"){ //Verifica si el usuario ingreso 0 
        client.end(); //cierra la conexion con el servidor si se ingreso 0
    } else {
        client.write(line) //Envia mennsaje ingresado por el usuario
    }
}