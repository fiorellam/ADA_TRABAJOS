//Esta modulo nos permite leer y escribir archivos
const fs = require('fs')
//Modulo path para trabajar con rutas de archivos, ayuda 
//a construir rutas de forma segura y compatible con diferentes sistemas operativos.
const path = require('path');

const filePath = path.join(__dirname, '../data/vehicles.json');

//Definimos el modelo de vehiculos, que contiene funciones para leer y escribir en el archivo JSON
const vehicleModel = {
    readVehicles: () => {
        const data = fs.readFileSync(filePath);
        //Convertimos el buffer en una cadena de texto y luego parseamos los datos JSON a un objeto JS
        return JSON.parse(data);
    },

    writeVehicles: (vehicles) => {
        //Convertimos el objeto de vehiculos a una cadena JSON con formato e identacion
        //JSON.stringify toma un objeto y lo convierte a una cadena JSON
        //El segundo argumento es 'null (no se usa un reemplazo) y el tercer argumento es '2' (para identacion)
        const jsonData = JSON.stringify(vehicles,null,2);
        fs.writeFileSync(filePath, jsonData);
    }
}

//Exportamos el modelo de vehiculos para que pueda ser utilizado en otras partes de la app
module.exports = vehicleModel;