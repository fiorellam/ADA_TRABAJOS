//for in se utiliza para recorrer las propiedades enumerables de un objeto o los indices
//de un array

//El resultado es que devuelve las claves o indices, no los valores. Cuando se usa en objetos,
//recorre los nombres de las propiedades. Cuando se usa en arrays, recorre los indicces de los elementos.

//Es ideal para trabajar con objetos cuando quieres acceder a las propiedades, o con arrays 
//si necesitas los indices

//Ejemplo basico con un objeto
let alumna = {
    nombre: 'Fiore',
    edad: 22,
    curso: "Programacion"
}
//Este for... in va a iterar sobre las propiedades del objeto alumna. Se
//imprimen las claves y los valores correspondientes.

// keyof typeof alumna:
// Combina los dos operadores para obtener las claves del tipo del objeto.
// typeof alumna da el tipo de alumna, y luego keyof obtiene las claves de ese tipo, es decir, "nombre" | "edad" | "curso".

// Cuando usas alumna[propiedad as keyof typeof alumna], estás asegurándote de que la propiedad propiedad 
// que estás usando para acceder a los valores de alumna es una clave válida del objeto alumna.

// En el for...in, el valor de propiedad es una cadena de texto que podría ser cualquier clave del objeto 
// alumna, pero TypeScript no sabe por defecto si esa cadena corresponde a una clave válida del tipo alumna. 
// Por eso, usas as keyof typeof alumna para indicarle a TypeScript que confíe en que propiedad es una clave 
// válida del objeto, lo que garantiza que no haya errores de tipo.

// Esto ayuda a evitar errores de acceso a propiedades que no existen en el objeto, ya que TypeScript sabe que 
// solo estás accediendo a propiedades que existen dentro del tipo de alumna.
for(let propiedad in alumna){
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`);
}

//Ejemplo de for...in en arrays
let lenguajes = ["Javascript", "Python", "TypeScript"];

for(let lenguaje in lenguajes){
    console.log(`Ejemplo array: ${lenguaje}`);
}

//FOR IN se usa para recorrer las propiedades (claves) de un objeto
//FOR OF se usa para recorrer los valores de un iterable