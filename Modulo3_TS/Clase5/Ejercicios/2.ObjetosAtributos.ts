// Ejercicio 2: Creación de Objetos y Atributos
// 1. Define un objeto que represente un libro con las siguientes propiedades:
// título, autor, y año de publicación.
let libro : { 
    titulo: string, 
    auto: string, 
    anioPublicacion: number
};
// 2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.
let libro1: { 
    titulo: string, 
    autor: string, 
    anioPublicacion: number
} = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anioPublicacion: 1967
};

// Mostrar las propiedades del objeto en la consola
console.log(`Título: ${libro1.titulo} Autor: ${libro1.autor} Año de publicación: ${libro1.anioPublicacion}`);