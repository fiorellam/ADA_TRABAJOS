//El proposito del for of es recorrer los valores de un iterable, como arrays,
//cadenas de texto, map, set, entre otros.

//Devuelve los valores de un iterable. Cuando se usa en arrays, devuelve los
//Elementos del array. No esta pensado para ser usado con objetos directament.

//Es util cuando quieres trabajar con los valores de un iterable y no necesitas 
//preocuparte por los indices o claves.

//Declaramos un array
//FOR IN se usa para recorrer las propiedades (claves) de un objeto
//FOR OF se usa para recorrer los valores de un iterable

export let lenguajes = ["Javascript", "Python", "TypeScript"];

for(let lenguaje of lenguajes){
    console.log(`Ejemplo array: ${lenguaje}`);
}

//Ejemplo de for of con cadena de texto (string)
let saludo = "Hola";
for(let letra of saludo){
    console.log(`Ejemplo con string Letra: ${letra}`);
}