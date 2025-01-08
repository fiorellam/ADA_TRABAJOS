// Ejercicios Extra para seguir practicando:
// • Encuentra los nombres más cortos y transforma su formato
// Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis',
// 'José', 'Pablo']. Queremos realizar varias tareas con esta lista:
// o Primero, filtra los nombres que tengan menos de 5 letras.
// o Luego, transforma los nombres resultantes para que estén en
// mayúsculas.
// o Finalmente, construye una frase que diga: "Los nombres
// seleccionados son: [nombres]", donde [nombres] sea la lista
// resultante unida por comas.
// Al final, imprime la frase en la consola.
let personas = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];

let nombresMenorA5Letras = personas.filter(function(persona){
    return persona.length < 5;
});
// console.log(nombresMenorA5Letras);

let nombresMayusculas = nombresMenorA5Letras.map(function(nombre){
    return nombre.toUpperCase();
});
// console.log(nombresMayusculas);

let frase = nombresMayusculas.reduce(function(fraseCompleta, nombre){
    return fraseCompleta + ', '+  nombre;
})
console.log( "Los nombres seleccionados son:" , frase);