//Verificar si un número es positivo, negativo o cero
// En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un
// programa en JavaScript que:
// Requisitos:
// • Utiliza una estructura de control de flujo (if, else if, else) para hacer las
// verificaciones.
// • Usa parseFloat() para convertir la entrada del usuario a un número.
const prompt = require("prompt-sync")({sigint:true});

// 1. Pida al usuario que ingrese un número.
let numero = parseFloat(prompt("Ingrese un numero: "));

// 2. Verifique si el número es positivo, negativo o igual a cero.
// 3. Muestre un mensaje indicando cuál es el caso.
if(numero > 0){
    console.log(`El número ${numero} que ingresaste es positivo`)
} else if(numero < 0){
    console.log(`El número ${numero} que ingresaste es negativo`)
} else{
    console.log(`Lo que ingresaste no es un numero`);
}
