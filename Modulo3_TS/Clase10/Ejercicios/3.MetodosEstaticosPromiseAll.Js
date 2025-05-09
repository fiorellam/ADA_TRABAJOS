// Ejercicio 3: Métodos Estáticos - Gestionar múltiples tareas con Promise.all()
// Consigna:
// Simula la consulta a tres APIs diferentes que devuelven información sobre
// usuarios, productos y ventas. Cada consulta debe realizarse usando una función
// que retorne una promesa. Usa Promise.all() para esperar a que todas las
// consultas se completen y luego:
// 1. Imprime un mensaje con los resultados si todas las consultas fueron
// exitosas.
// 2. Si alguna falla, imprime un mensaje de error.
// 3. Usa un retraso distinto para cada promesa (por ejemplo, 2, 3 y 4
// segundos).
// Opcional: Modifica el comportamiento para que si alguna consulta falla, se
// devuelva el mensaje: "No se pudo completar la operación: [API que falló]"

function consultaUsuarios(tiempo){
    return new Promise((resolve, reject) => {
        console.log('Consultando usuarios...');

        const consultaExitosa = Math.random() > 0.5;
        setTimeout(() => {
            if(consultaExitosa){
                resolve('Usuarios obtenidos correctamente');
            } else {
                reject('Error API usuarios');
            }
        }, tiempo)
    })
}
function consultaProductos(tiempo){
    return new Promise((resolve, reject) => {
        console.log('Consultando productos...');

        const consultaExitosa = Math.random() > 0.5;
        setTimeout(() => {
            if(consultaExitosa){
                resolve('Productos obtenidos correctamente');
            } else {
                reject('Error API productos');
            }
        }, tiempo)
    })
}
function consultaVentas(tiempo){
    return new Promise((resolve, reject) => {
        console.log('Consultando ventas...');

        const consultaExitosa = Math.random() > 0.5;
        setTimeout(() => {
            if(consultaExitosa){
                resolve('Ventas obtenidos correctamente');
            } else {
                reject('Error API ventas')
            }
        }, tiempo)
    })
}

// Si todas las promesas se resuelven correctamente, entra en el .then() y ves los resultados.

// Si alguna promesa falla, entra directamente al .catch() y no se ejecuta el .then().
// Incluso si otras promesas se resolvieron correctamente, Promise.all() ignora sus resultados y se detiene en el primer error.

Promise.all([consultaProductos(1000), consultaUsuarios(500), consultaVentas(2000)])
    .then((resultados) => {
        console.log("Resultados de todas las promesas: ", resultados);
    })
    .catch((error) => {
        console.error("No se pudo completar", error)
    })