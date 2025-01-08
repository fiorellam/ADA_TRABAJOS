// • Ejercicio 1: Calcular el precio final con IVA
// Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una
// función flecha para calcular el precio final.


const prompt = require('prompt-sync')();
let precio = parseFloat(prompt('Escribe el precio de un producto: '));
let porcentaje_iva = parseFloat(prompt('Escribe el porcentaje de iva que quieres agregarle: '));

const calcularPrecioIva = (price, percentage) => price + (price * percentage / 100);

let precio_final = calcularPrecioIva(precio, porcentaje_iva);

console.log(`El precio final es de: ${precio_final}`);