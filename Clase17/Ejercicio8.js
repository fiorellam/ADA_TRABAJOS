// • Ejercicio 8: Lugar y números
// Para practicar la implementación del algoritmo de búsqueda binaria,
// vamos a empezar con un ejemplo simple. Quiero que se familiaricen con
// la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la
// solución.
// Dada la siguiente lista:
// Utilizar el algoritmo de búsqueda binaria para responder los siguientes
// ítems:
// o ¿Cuál es la posición del número 1?
// o ¿Cuál es la posición del número 5?
// o ¿Cuál es la posición del número 6?
// o ¿Cuál es la posición del número 9?
// o ¿Cuál es la posición del número 11?
// Sabemos que responder estas preguntas es extremadamente fácil, ya
// que podemos leer el array, y determinar con un cálculo visual la posición
// de cada elemento, pero, la propuesta que les hago es que codeen un
// algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el
// 6, y nos indique por consola la posición del mismo.
// El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir
// complejidad extra.
const lista = [1, 3, 5, 6, 9, 11];

function BusquedaBinaria(lista, elementoBuscar){
    let first = 0;
    let last = lista.length-1;

    while(first <= last){
        const mitad = Math.floor((last + first) /2);
        // console.log(mitad);

        let numMitad = lista[mitad];
        // console.log(numMitad);
        if(numMitad == elementoBuscar){
            return mitad;
        }

        if(elementoBuscar > numMitad){
            first = mitad + 1;
        } else{
            last = mitad - 1;
        }
    }
    return null; //Si no encontramos nada
}
console.log("Posicion del numero 1: ", BusquedaBinaria(lista, 1));
console.log("Posicion del numero 5: ", BusquedaBinaria(lista, 5));
console.log("Posicion del numero 6: ", BusquedaBinaria(lista, 6));
console.log("Posicion del numero 9: ", BusquedaBinaria(lista, 9));
console.log("Posicion del numero 11: ", BusquedaBinaria(lista, 11));