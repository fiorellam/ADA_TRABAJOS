// • Clasificación de palabras según su longitud
// Tienes una lista de palabras en una oración. Debes:
let oracion = "JavaScript es un lenguaje poderoso y versátil"

// 1. Dividir la oración en palabras individuales.
let oracionDivididaPorPalabras = oracion.split(" ");
console.log(oracionDivididaPorPalabras);
// 2. Clasificar las palabras en dos categorías:
// ▪ Cortas (menos de 5 letras)
// ▪ Largas (5 letras o más)
let palabrasCortas = [];
let palabrasLargas = [];
for(let i = 0; i < oracionDivididaPorPalabras.length; i++){
    let palabra = oracionDivididaPorPalabras[i];
    if(palabra.length >= 5){
        palabrasLargas.push(palabra);
    } else {
        palabrasCortas.push(palabra);
    }
}

// 3. Mostrar ambas listas de palabras clasificadas.
console.log(`Lista de palabras largas: ${palabrasLargas}`);
console.log(`Lista de palabras Cortas: ${palabrasCortas}`);