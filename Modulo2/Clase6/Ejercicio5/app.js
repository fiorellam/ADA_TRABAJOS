// Ejercicio 5: Convierte temperaturas como un profesional
// Consigna:
// Crea un programa interactivo que permita convertir temperaturas de
// grados Celsius a Fahrenheit. Este ejercicio te ayudará a practicar el uso
// del módulo readline para manejar entradas del usuario y aplicar cálculos
// básicos. Además, incluye un mensaje personalizado de bienvenida
// configurado a través de variables de entorno.
// Requisitos del programa:
// 1. Usa una variable de entorno llamada WELCOME_MESSAGE para
// mostrar un mensaje inicial. Si no se define, usa "¡Bienvenido al
// conversor de temperaturas!" por defecto.
// 2. Usa el módulo readline para solicitar al usuario una temperatura en
// grados Celsius.
// 3. Calcula la conversión a Fahrenheit usando la fórmula:
// (Se pueden ayudar buscando como es la fórmula en código en
// internet)
// 4. Muestra el resultado en la consola.
// 5. Despídete del usuario al final.
// Indicaciones:
// 1. Crea un archivo llamado app.js para el código.
// 2. Usa dotenv para cargar el mensaje de bienvenida desde el archivo
// .env.
// 3. Configura la interfaz con readline y calcula la conversión.
// 4. Ejecuta el programa y prueba ingresando diferentes valores de
// temperatura.
const readline = require('readline');
require('dotenv').config();

const initialMessage = process.env.WELCOME_MESSAGE || "Bienvenido al conversor de temperaturas";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log(initialMessage);
rl.question("Ingresa una temperatura en grados celsius: ", (celsius) => {
    const fahrenheit = parseFloat(celsius) * (9/5) + 32;
    console.log(`${celsius} celsius en fahrenheit es ${fahrenheit} grados fahrenheit`);
    console.log("Hasta luego!");
    rl.close();
})