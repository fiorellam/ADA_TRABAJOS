//PropiedadesPARA STRINGS
let miSerie = 'Mad Men';
console.log(miSerie.length);

let saludo = '!Hola! Estamoss programando';
console.log(saludo.indexOf('Estamoss'));

let frase = 'Breaking Bad Rules!';

console.log(frase.slice(9,12));
console.log(frase.slice(13));
console.log(frase.slice(-10));

let descripcionPerro = '  El perro Aleman es un perro muy inteligente y leal.  ';
console.log('Cadena original: ', descripcionPerro);

//1. .length Devuelve la longitud de la cadena
console.log('La longitud de la cadena .length', descripcionPerro.length);

//2. Propiedad indexOf Devuelve el primer indice donde se encuentra
let indiceInteligente = descripcionPerro.indexOf('inteligente');
console.log(indiceInteligente);

let indiceLabrador = descripcionPerro.indexOf('Labrador');
console.log("Indice de 'Labrador con indexOf: ", indiceLabrador)

//METODOS
//3. Metodo Slice: Extrae una parte de la cadena entre dos indices
let subCadena = descripcionPerro.slice(2,17);
console.log("Subcadena despues de slice(2,17)",  subCadena);

//4. Metodo trim : Elimina los espacios en blanco de adelante y atras
let cadenaEspacios = descripcionPerro.trim();
console.log(`Cadena despues de trim:`, cadenaEspacios);

//5. Metodo Replace: Reemplaza una subcadena por otra
let reemplazo = descripcionPerro.replace('inteligente', 'gordito');
console.log('Cadena despues de replace, cambia inteligente por gordito', reemplazo);

//6. Metodo split: Divide la cadena en un array segun un delimitador
let palabras = descripcionPerro.split(" ");
console.log(palabras);