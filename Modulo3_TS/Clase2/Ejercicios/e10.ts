// Ejercicio 10: Funciones y arrays de objetos
// Consigna: Crea una función llamada listarLibros que acepte un array de objetos
// libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La
// función debe recorrer el array y mostrar los detalles de cada libro en la consola.

type Libro = {titulo:string, autor:string};
function listarLibros(libros: Libro[]): void{
    for(let i = 0; i < libros.length; i++){
        console.log(`Título: ${libros[i].titulo}, Autor: ${libros[i].autor}`);
    }
}
const libros: Libro[] = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "1984", autor: "George Orwell" }
];

listarLibros(libros);