// Consigna:
// Crea un programa que le pida al usuario dos números y una operación
// matemática a realizar: suma, resta, multiplicación o división. Según la operación
// ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario
// ingresa una operación inválida, el programa debe mostrar un mensaje de error.
// Usa switch para resolverlo.
const prompt = require("prompt-sync")();

let numero1 = parseInt(prompt("Escribe un numero: "));
let numero2 = parseInt(prompt("Escribe otro numero: "));
let operacion = prompt(`Elige la operación que deseas realizar  (suma, resta, multiplicacion, division): `);

let resultado;
switch(operacion){
    case 'suma':
        resultado = numero1 + numero2;
        console.log(`El resultado de la ${operacion} es : ${resultado} `)
        break;
    case 'resta':
        resultado = numero1 - numero2;
        console.log(`El resultado de la ${operacion} es : ${resultado} `)
        break;
    case 'multiplicacion':
        resultado = numero1 * numero2;
        console.log(`El resultado de la ${operacion} es : ${resultado} `)
        break;
    case 'division':
        resultado = numero1 / numero2;
        console.log(`El resultado de la ${operacion} es : ${resultado} `)
        break;
    default: 
        console.log("La opcion que elegiste no es valida");
        break;    
}