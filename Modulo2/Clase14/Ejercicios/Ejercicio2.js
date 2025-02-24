// Ejercicio 2: Menú Interactivo con readline-sync
// Crea un script de Node.js que muestre un menú de opciones usando
// readline-sync. El menú debe permitir al usuario elegir entre tres acciones:
// ver un mensaje de bienvenida, generar un hash de un texto, o salir.
//Importamos el modulo readline-sync
const readlineSync = require('readline-sync');

const acciones = ['Mensaje Bienvenida', 'Generar hash de un texto', 'salir'];

const indiceSeleccionado = readlineSync.keyInSelect(acciones, 'Elige una opcion ');

if (indiceSeleccionado === -1){
    console.log('No haz seleccionado ninguna opcion');
} else if(indiceSeleccionado === 0){
    console.log(`Calculando hash`);
} else if(indiceSeleccionado === 1){
    console.log(`Hola! Bienvenido`);
}
