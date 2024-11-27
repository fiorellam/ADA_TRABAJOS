// Ejercicio 3: Ciclo For
// Nuestra tarea es contar la cantidad de números impares que hay desde
// el número 0 hasta un número X (inclusive). Para esto, debes seguir los siguientes pasos:
// 7. Utiliza el operador módulo (%) para verificar si un número es
// impar.
// 8. Ejemplo de Ejecución: Si el usuario ingresa 10, el programa debe
// imprimir: “La cantidad de números impares desde 0 hasta 10 (inclusive) es: 5”
const prompt = require("prompt-sync")();
// 1. Solicitar al usuario que ingrese un número X.
let numeroX = parseInt(prompt("Ingresa un numero: "));
// 2. Inicializar una variable para contar los números impares.
let cantidadImpares = 0;

// 3. Utilizar un ciclo for para recorrer los números desde 0 hasta X (inclusive).
for(i = 0; i <= numeroX; i++){
    // 4. Dentro del ciclo, verificar si el número es impar.
    if(i % 2 != 0){
        // 5. Si el número es impar, incrementar el contador de números impares.
        cantidadImpares++;
    }
}
// 6. Al finalizar el ciclo, imprimir en consola la cantidad de números impares encontrados.
console.log(`La cantidad de numeros impares encontrados del 0 al ${numeroX} son: ${cantidadImpares}`);