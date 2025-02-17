//1. Empezamos con el modelo
//Hacemos las importaciones
//fs = fileSystem y es para trabajar con el sistema de archivos
//path = Nos ayuda a manejar las rutas de archivos
const fs = require('fs');
const path = require('path');


//2 . Definimos la ruta del archivo data.json que esta en el mismo directorio que este archivo
//__dirname es una variable global que contiene la ruta del directorio actual
const dataPath = path.join(__dirname, 'data.json');

//3. Creamos un objeto que contendra metodos para interactuar con los datos 
const VehicleModel = {
    // Metodo para obtener un vehiculo por id
    getVehicleById: (id) => {
        //Leemos el archivo json de manera sincrono 
        const rawData = fs.readFileSync(dataPath);
        //Convertimos el contenido del archivo que esta en formato json a un objeto javascript
        const vehicles = JSON.parse(rawData);
        //Buscamos el vehiculo cuyo id coincida con el id proporcionado
        //si no encuentra ningun vehiculo con ese id, retorna null
        return vehicles.find((vehicle) => vehicle.id === id || null)
    }
}
//Exportamos el objeto 'vehicleModel' para que pueda ser utilizado en otros archivos
module.exports = VehicleModel;