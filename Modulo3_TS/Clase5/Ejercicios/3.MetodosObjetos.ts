// Ejercicio 3: Métodos en Objetos

// 1. Modifica el objeto del ejercicio anterior para que incluya un método
// llamado descripcion() que devuelva una descripción del libro.
// 2. Llama al método y muestra el resultado en la consola.

export let libro1: { 
    titulo: string, 
    autor: string, 
    anioPublicacion: number,
    description: () => void
} = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anioPublicacion: 1967,
    description(){
        console.log(`Título: ${libro1.titulo} Autor: ${libro1.autor} Año de publicación: ${libro1.anioPublicacion}`);
    }
};
libro1.description();