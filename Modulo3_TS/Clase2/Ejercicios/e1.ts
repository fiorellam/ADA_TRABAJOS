// Ejercicio 1: Declarar y usar funciones con tipos
// Consigna: Crea una función llamada multiplicarNumeros que acepte dos
// parámetros, ambos de tipo number, y retorne el producto de ambos números.
// Luego, muestra el resultado en consola llamando a la función.

function multiplicarNumeros(num1: number, num2: number): number{
    return num1 * num2;
}

console.log(multiplicarNumeros(5, 10));