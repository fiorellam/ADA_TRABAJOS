// Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación)
// Implementa una clase Calculadora que tenga un método sumar. El método debe
// estar sobrecargado para permitir la suma de:
// • Dos números enteros.
// • Tres números enteros.
// • Dos cadenas, concatenando las dos cadenas.
class Calculadora{

    sumar(a: number, b: number): number;
    sumar(a: number, b: number, c: number):number;
    sumar(a: string, b: string);

    sumar(a: any, b: any, c?:any): any{
        let tipoA = typeof a;
        let tipoB = typeof b;
        if(tipoA === 'number' && tipoB === 'number' && typeof c === 'number'){
            return a + b + c;
        } else if(tipoA === 'number' && tipoB === "number"){
            return a + b;
        } else if(tipoA === 'string' && tipoB === "string"){
            return a + b;
        } else {
            throw new Error("Parámetros no válidos");
        }
    }
}

const calculadora1 = new Calculadora();

console.log(calculadora1.sumar(2, 3));            // Salida: 5
console.log(calculadora1.sumar(1, 2, 3));         // Salida: 6
console.log(calculadora1.sumar("Hola, ", "mundo!")); // Salida: Hola, mundo!