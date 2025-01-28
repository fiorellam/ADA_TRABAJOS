// Ejercicio 6 (Extra): Explora métodos de readline
// Consigna:
// Este ejercicio te permitirá explorar algunos métodos adicionales del
// módulo readline, como rl.setPrompt() y el evento 'line'. Escribe un
// programa interactivo que solicite varias palabras al usuario y las muestre
// en mayúsculas. El programa finalizará cuando el usuario escriba "salir".
// Requisitos del programa:
// 1. Usa rl.setPrompt() para personalizar el mensaje que se muestra al
// usuario.
// 2. Usa el evento 'line' para procesar cada palabra que el usuario
// ingrese.
// 3. Si el usuario escribe "salir", el programa debe despedirse y finalizar.
// Indicaciones:
// 1. Crea un archivo llamado app.js para el código.
// 2. Configura la interfaz de readline y procesa las entradas del usuario.
// 3. Usa el evento 'line' para manejar cada palabra ingresada.
const readline = require('readline');
require('dotenv').config()
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt("Hola este ejercicio es para probar los metodos de readline, Escribe algo: ");
rl.prompt();//Mostrar el prompt

rl.on('line', (input) => {
    //Si el usuario escribe "salir"
    if(input.toLowerCase() === 'salir'){
        console.log('Seleccionaste "Salir", nos vemos');
        rl.close();
    } else{ 
        console.log(input.toUpperCase());
        rl.prompt();
    }
})