// 3. Creamos un objeto que contendra los metodos para formatear respuestas relacionadas
const VehicleView = {
    //metodo para formatear la respuesta que se enviara al usuario
    formatResponse: (vehicle) => {
        //si no se encontro el vehiculo, devolvemos un objeto json con un
        if(!vehicle){
            return JSON.stringify({
                status: "error", //indicacion de que hubo un error
                message: 'Vehiculo no encontrado' //mensaje descriptivo
            })
        }
        //si se encontro el vehiculo, devolvemos un objeto json con los datos
        return JSON.stringify({
            status: "success", //Indicamos que fue exitoso
            data: vehicle //incluimos los datos del vehiculo
        })
    }
}

module.exports = VehicleView