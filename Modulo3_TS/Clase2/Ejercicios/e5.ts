// Ejercicio 5: Función con parámetros rest
// Consigna: Crea una función llamada sumarTodos que acepte una cantidad
// indefinida de números y devuelva su suma. Luego, llama a la función con varios
// números y muestra el resultado en la consola.
function sumarTodos(...numeros: number[]): number{
    return numeros.reduce((total, num) => total + num, 0);
}
let numeros : number[] = [1,2,4,5,6,7];
console.log(`Resultado suma res `, sumarTodos(5,4,3,3,2,1));
console.log(`Resultado suma res `, sumarTodos(...numeros));