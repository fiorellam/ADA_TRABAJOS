//METODOS PARA ARRAYS
let razaPerros = ["Labrador", "BullDog", "Beagle", "Pug"];
console.log('Array Inicial', razaPerros);

//1. Metodo Push: Agrega uno o mas elementos al final de array
razaPerros.push('Husky');
console.log('\nArray despues de push (husky)', razaPerros);

//2. Metodo pop: Elimina el ultimo elemento del array y lo retorna
let razaEliminada = razaPerros.pop();
console.log('\nArreglo despues de hacer pop', razaPerros);
console.log('Raza eliminada:', razaEliminada);

//3. Metodo shift: Elimina el primer elemento del array y lo devuelve
let primeraRazaEliminada = razaPerros.shift();
console.log('\nArreglo despues de shift', razaPerros);
console.log('Raza eliminada con shift', primeraRazaEliminada);

//4. Metodo unshift: Agrega uno o mas elementos al inicio del arreglo
razaPerros.unshift("Chihuahua");
console.log('\nArreglo despues de unshift (Chihuahua)', razaPerros);

//5. Metodo Join: Une todos los elementos del array en un string, separados por un delimitador (opcional)
console.log('\n JOIN');
let razaEnString = razaPerros.join(' - ');
console.log(razaEnString);

//6. Metodo IndexOf: Devuelve el primer indice donde encuentra el elemento o devuelve -1 si no lo encuentra
console.log('\nIndexOf');
let indiceBeagle = razaPerros.indexOf('Beagle'); // Toma en cuenta iniciando en la posicion en 0 
console.log('Indice de Beagle', indiceBeagle);

let indicePastorAleman = razaPerros.indexOf('Pastor Aleman');
console.log('Indice de PastorAleman', indicePastorAleman);

//7. Metodo LastIndexOf: Devuelve el primer indice donde encuentra el elemento o devuelve -1 si no lo encuentra
console.log('\nLastIndexOf');
let razaDuplicada = ['Beagle','Bulldog', 'French','Beagle', 'San Bernardo']; // Toma en cuenta iniciando en la posicion en 0 
console.log('Ultimo indice de', razaDuplicada);

let ultimoIndiceBeagle = razaDuplicada.lastIndexOf('Beagle');
console.log('Ultimo Indice donde se encuentra Beagle', ultimoIndiceBeagle);

//8. Metodo includes: devuelve true si esta el elemento y false
let tienePug = razaPerros.includes('Pug');
console.log('El arrar contiene Pug? ', tienePug);

