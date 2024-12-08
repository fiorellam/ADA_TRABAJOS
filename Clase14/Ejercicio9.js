// Ejercicio 9: Última aparición de un modelo de auto
// En este ejercicio, trabajaremos con una lista de modelos de autos.
// Implementa una función llamada ultimaAparicionModeloAuto(modelo) que
// encuentre y muestre la última posición en la lista donde aparece el modelo
// específico de auto dado por modelo.
// Datos Iniciales:
// ✓ Utiliza un array llamado modelosAutos que contiene varios modelos de
// autos, algunos repetidos para demostrar la funcionalidad.
// Funcionalidad:
// ✓ Implementa la función ultimaAparicionModeloAuto(modelo), que toma
// modelo como parámetro (un string).
// ✓ Debes recorrer el array de manera manual para encontrar la última
// aparición del modelo.
// ✓ Si el modelo se encuentra en el array, la función debe imprimir por
// consola la posición (índice + 1) en la que aparece (considerando que la
// numeración es de 1 a N).
// ✓ Si el modelo no está en el array, debe imprimir un mensaje indicando que
// el modelo no está presente.
let modelosAutosRenault = ['Capture', 'Kicks', 'Sedan', 'Logan', 'Kangoo', 'Kicks', 'Capture'];

function ultimaAparicionModeloAuto(modelo){
    let ultimaPosicion;
    let encontrado = false;
    for(let i = 0; i <= modelosAutosRenault.length; i++){
        if(modelo == modelosAutosRenault[i]){
            encontrado = true;
            ultimaPosicion = i;
        }
    }
    if(!encontrado){
        return `El modelo no fue encontrado`;
    }
    return ultimaPosicion + 1;
}
let ultimaPosicion = ultimaAparicionModeloAuto('Sedan');

console.log(`La ultima posicion del modelo se encuentra en la posicion ${ultimaPosicion}`);