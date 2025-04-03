//Declaracion e inicializacion de la tupla
let persona: [string, number];

//Inicializacion de la tupla
persona = ['Ana', 25];

//Accedemos a los elementos de la tupla
console.log("Nombre: ", persona[0]);
console.log("Edad: ", persona[1]);

//Modificamos la tupla
persona[1] = 27;
console.log("Edad personalizada: ", persona[1]);

//Desestructuracion de la tupla
let [nombre, edad] = persona;
console.log(`La persona se llama ${nombre} y tienne ${edad} anios`);

