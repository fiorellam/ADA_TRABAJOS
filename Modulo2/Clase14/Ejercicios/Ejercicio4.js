const readline = require('readline');
// Ejercicio 4: Ordenar una Lista de Números
// Crea un script en Node.js que permita al usuario ingresar una lista de
// números separados por comas. Ordena los números de menor a mayor y
// muestra la lista ordenada.
// Crear la interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa una lista de números separados por comas: ', (input) => {
  
  // Convertir la entrada en un array de números
  let numeros = input.split(',')
  numeros = numeros.map(num => parseFloat(num.trim()));
  
  numeros.sort((a, b) => a - b);
  
  console.log('Lista ordenada de menor a mayor:', numeros);
  rl.close();
});