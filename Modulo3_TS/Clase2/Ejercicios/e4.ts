// Ejercicio 4: Función que devuelve un objeto
// Consigna: Crea una función llamada crearLibro que acepte tres parámetros:
// titulo (string), autor (string) y paginas (number). La función debe devolver un
// objeto con esas propiedades. Luego, crea dos libros utilizando la función y
// muestra sus detalles en la consola.
function crearLibro(titulo:string, autor: string, paginas:number): Object{
    return {titulo, autor, paginas};
}
let libro1: object = crearLibro('La caba;a', 'cualquiera', 3);
let libro2: object = crearLibro('La caba;a', 'cualquiera', 3);

console.log(`Libro 1 `, libro1);
console.log('Libro 2 ', libro2);