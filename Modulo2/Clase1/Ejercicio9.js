// Escribe una función que reciba un array de números y devuelva un nuevo
// array sin números repetidos.
// Consigna:
// • Usa el objeto Set para eliminar duplicados.
// • Convierte el Set a un array usando el operador spread (...).
let numeros = [1, 2, 3, 2, 4, 1, 5];

function sinRepeticiones(numeros){
    let setSinDuplicados = new Set(numeros);

    let arraySinDuplicados = [...setSinDuplicados];
    return arraySinDuplicados
}
console.log(sinRepeticiones(numeros));

//Referencia:
// https://matiashernandez.dev/blog/post/4-formas-de-eliminar-elementos-duplicados-en-un-arreglo-con-javascript