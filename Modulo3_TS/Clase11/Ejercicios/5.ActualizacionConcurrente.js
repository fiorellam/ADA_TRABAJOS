// 5. Actualización Concurrente de Datos de Usuario y Pedidos
// En un sistema de e-commerce, las actualizaciones de datos de usuario y pedidos
// suelen ejecutarse de manera concurrente para mayor eficiencia. Escribe dos
// funciones asíncronas, una que actualice los datos del usuario y otra que
// actualice los pedidos, ambas con un tiempo de espera de 1.5 segundos. Usa
// Promise.all para ejecutar ambas funciones en paralelo y luego muestra un
// mensaje cuando ambas actualizaciones se hayan completado.
function actualizarDatosUsuario () {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Datos de usuario actualizados"), 1500);
    })
}
function hacerPedido(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Pedido realizado"), 1500);
    })
}
//Promise.all() permite ejecutar varias promesas en paralelo y esperar a que todas se resuelvan (o que una falle).
// ✅ Ejecuta promesas al mismo tiempo
// ✅ Espera que todas terminen
// ✅ Devuelve un array con los resultados
// ⚠️ Si una falla, se detiene todo y lanza error
async function ejecutar(){
    try{
        const actualizarDatos = actualizarDatosUsuario();
        const realizarPedido = hacerPedido();
        const resultados = await Promise.all([actualizarDatos, realizarPedido]);
        console.log(resultados);
    }catch(error){
        console.error("Error", error)
    }
}

ejecutar();
