// Escribe una función que reciba un nombre completo y devuelva las
// iniciales en mayúsculas.
// Consigna:
// • Usa el método split() para dividir el nombre.
// • Usa un bucle for y métodos de string.

let nombre = "juan perez gomez";

function devolverInicialesMayusculas(nombreCompleto){
    let arrayNombre = nombreCompleto.split(" ");
    
    for(let i = 0; i < arrayNombre.length; i++){
        arrayNombre[i] = arrayNombre[i][0].toUpperCase() + arrayNombre[i].slice(1).toLowerCase();
    }
    return arrayNombre.join(" ");
}
console.log(devolverInicialesMayusculas(nombre));