// 4. Simulación de Proceso de Pago Asíncrono con Manejo de Errores
// Diseña una función que simule un proceso de pago que tarda 3 segundos en
// completarse. Si el monto del pago es superior a $1000, el proceso debe fallar y
// lanzar un error. Utiliza try/catch para manejar el error de manera adecuada.
// Esta simulación es relevante para entender cómo gestionar errores en procesos
// financieros o de pago, en los cuales las validaciones son cruciales.
function procesarPago(monto){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(monto < 1000){
                resolve("Pago realizado");
            } else {
                reject("Error al realizar el pago");
            }
        }, 3000)
    })
}

async function ejecutarPago(monto){
    try{
        const resultado = await procesarPago(monto);
        console.log(resultado);
    } catch(error){
        console.error("Ocurrio un error", error);
    } finally {
        console.log("Finalizando el pago");
    }
}
ejecutarPago(500);