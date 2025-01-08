let series = ['serie1', 'serie2'];

let ultimaSerie = series.pop();

console.log(series);
console.log(ultimaSerie);

//SHIFT
console.log('\n SHIFT');
let series2 = ['serie1', 'serie2'];

let ultimaSerie2 = series2.shift();

console.log(series2);
console.log(ultimaSerie2);

//SHIFT
console.log('\n UNSHIFT');
let marcas = ['Audi'];

marcas.unshift('Ford')
console.log(marcas);

marcas.unshift('Ferrari', 'BMW');
console.log(marcas);

// JOIN
console.log('\n JOIN');
let dias = ['Lunes', 'Martes', 'Jueves'];
let separadosPorComa = dias.join();
console.log(separadosPorComa);

let separadosPorGuion = dias.join('-');
console.log(separadosPorGuion);


// indexOf
console.log('\n IndexOf');
let frutas = ['Manzana', 'Pera' , 'Frutilla'];
console.log(frutas.indexOf('Frutilla'));

console.log(frutas.indexOf('Banana')); //No encontro lo que buscaba y devuelve -1

// last indexOf
console.log('\n last IndexOf');
let clubes = ['Racing', 'Boca' , 'Lanus', 'Boca'];
console.log(clubes.lastIndexOf('Boca')); //Devuelve la ultima posicion en la que lo encontro

console.log(clubes.lastIndexOf('River')); //No encontro lo que buscaba y devuelve -1

// includes devuelve un booleano 
console.log('\n last IndexOf');
let frutas2 = ['Manzana', 'Pera' , 'Frutilla'];

console.log(frutas.includes('Manzana'));
console.log(frutas.includes('Manz'));
