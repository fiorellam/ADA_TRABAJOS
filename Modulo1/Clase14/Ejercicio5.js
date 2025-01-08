// Ejercicio 5: Verificar origen del auto
// Solicita al usuario ingresar la marca de un auto y utiliza una función flecha
// para verificar y mostrar si el auto es de origen nacional o importado. Considera
// que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen
// nacional.
// ✓ Solicita al usuario que ingrese la marca de un auto.
// ✓ Utiliza una función flecha para determinar si la marca ingresada
// corresponde a un auto de origen nacional o importado.
// ✓ Muestra un mensaje indicando si el auto es de origen nacional o
// importado, basado en la marca ingresada por el usuario.
const prompt = require("prompt-sync")();

let tipo_carro = prompt("Ingresa la marca de tu carro: ");

const verificarOrigenCarro = (type_car) => {
    if(type_car == 'Chevrolet' || type_car == 'Ford' || type_car == 'Fiat'){
        return `El carro es de origen nacional`;
    } else {
        return `El carro es importado`;
    }
}

let resultadoMarca = verificarOrigenCarro(tipo_carro);

console.log(`${resultadoMarca}`)