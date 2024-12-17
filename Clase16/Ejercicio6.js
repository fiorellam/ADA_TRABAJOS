// Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra
// Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript'].
// Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un
// sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!".
let palabras = ['hola', 'mundo', 'javascript'];

let palabrasConSufijo = palabras.map(
    function(palabra){
        return `!${palabra}!`;
    }
)
console.log(palabrasConSufijo);

//2DA FORMA DE RESOLVERLO CON FOREACH
palabras.forEach(function(palabra){
    console.log(`!${palabra}!`);
})

