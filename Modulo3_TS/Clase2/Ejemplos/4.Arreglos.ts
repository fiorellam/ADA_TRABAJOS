//Declaracion de un array simple
let frutas : string[ ] = ['manzana', 'banana', 'pera'];

//agregamos una fruta al final
frutas.push('naranja');
console.log('Agregamos una fruta al final: ', frutas);

//eliminamos la ultima fruta
let ultimaFruta = frutas.pop();
console.log('Eliminamos la fruta que se encontraba al final', frutas);

//combinamos todos los elementos del array en una cadena
let cadenaFrutas = frutas.join(' - ');
console.log('combinamos todos los elementos del array en una cadena: ', cadenaFrutas);
