// Ejercicio 10 - Cálculo de Descuento: Escribe un programa que calcule el
// precio final de un producto después de aplicar un descuento. Pide al
// usuario que ingrese el precio original y el porcentaje de descuento, y
// muestra el precio final.
// Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
// Pista 2: La fórmula puede representarse asi:
// let montoDescuento = precioOriginal * (porcentajeDescuento / 100); 
const prompt = require("prompt-sync")({sigint: true});

let precio_original = parseFloat(prompt("Ingresa el precio original: "));
let porcentaje_descuento = parseFloat(prompt("Ingresa el porcentaje de descuento: "));

let monto_descuento = precio_original * (porcentaje_descuento / 100);
let total = precio_original - monto_descuento;

console.log("El total con el descuento es de ", total);