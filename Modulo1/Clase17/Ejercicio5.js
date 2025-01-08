// Ejercicio 5: Manipulación de Arrays y Cadenas
// A partir del siguiente array de frases, escribe la función “procesarFrases”

let frases = [
    "El clima es MALO hoy", 
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
];

function procesarFrases(listaFrases){
    
    // 1. Convierta cada frase a minúsculas. Investigar el método
    // “.toLowerCase()” para este punto.
    // https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/String/toLower
    // Case
    let frasesMinuscula = listaFrases.map(function(sentence){
        return sentence.toLowerCase();
    });
    // console.log('Frases en minuscula', frasesMinuscula);
    
    // 2. Divida cada frase en palabras.
    let palabrasPorFrase = frasesMinuscula.map(function(sentence){
        return sentence.split(" ");
    })
    // console.log('Palabras por frase', palabrasPorFrase);

    // 3. Reemplace las palabras "malo" por "bueno".
    let reemplazarMaloPorBueno = palabrasPorFrase.map(function(frase){
        return frase.map(palabra => {
            return palabra.replace(/malo/g, "bueno");
        })
    });
    // console.log(reemplazarMaloPorBueno);

    // 4. Combine las palabras de cada frase en una nueva cadena separada por espacios.
    let fraseModificada = reemplazarMaloPorBueno.map(function (frase)  {
        return frase.join(" ");
    });
    // 5. Devuelva un nuevo array con las frases modificadas
    console.log(reemplazarMaloPorBueno);
    console.log(fraseModificada);
}

procesarFrases(frases);