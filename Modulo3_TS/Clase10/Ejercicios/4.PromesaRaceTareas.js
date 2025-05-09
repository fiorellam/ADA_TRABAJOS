// Ejercicio 4: Promise.race() - Carrera entre Tareas
// Consigna:
// Crea tres promesas que representen tareas con tiempos de ejecución aleatorios.
// Usa Promise.race() para que el programa imprima solo la primera tarea que se
// complete. Luego:
// 1. Asegúrate de que se imprime qué tarea ganó la carrera.
// 2. Controla posibles errores si alguna de las promesas falla.

const darComidaPerrito = new Promise((resolve, reject) => {
    const numeroAleatorio = Math.random() * 10000;
    setTimeout(resolve, numeroAleatorio, 'Tu perrito ha comido')
})
const banarPerrito = new Promise((resolve, reject) => {
    const numeroAleatorio = Math.random() * 10000;
    setTimeout(resolve, numeroAleatorio, 'Tu perrito ha sido bañado')
})
const llevarAPasear = new Promise((resolve, reject) => {
    const numeroAleatorio = Math.random() * 10000;
    setTimeout(resolve, numeroAleatorio, 'Tu perrito ha sido paseado')
})

Promise.race(([darComidaPerrito, banarPerrito, llevarAPasear]))
    .then((resultado) => {
        console.log("Resultado de la promesa ganadora: ", resultado);
    })