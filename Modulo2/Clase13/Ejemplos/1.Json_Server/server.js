//1. Importamos el modulo http para crear el servidor (solicitudes)
//importamos tambien fs para trabajar con los archivos
const http = require('http'); //Solicitudes que se mandan en los navegadores
const fs = require('fs');

//2. Definimos el puerto
const PORT = 3000;

//Creamos el servidor
const server = http.createServer((req, res) => {
    // leemos el archivo datos.json
    fs.readFile('datos.json', 'utf-8', (err, data) => {
        if(err){
            //si hay un error mostramos un mensaje
            res.end('No se pudo leer el archivo JSON '); //mensaje de error
            return;
        }
        //enviamos el contenido del archivo json al navegador
        res.setHeader('Content-Type', 'application/json');
        res.end(data); //enviamos el contenido del archivo json
    })
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})