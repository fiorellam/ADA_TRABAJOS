export const promesa1 = Promise.reject('Error en promesa 1');

export const promesa2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hola")
})
export const promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Hola")
})

Promise.any([promesa1, promesa2, promesa3])
    .then((resultado) => {
        console.log("Primera promesa que logra resolverse", resultado);
    })
    .catch((error) => {
        console.error("Todas las promesas fueron rechazadas: ", error);
    })