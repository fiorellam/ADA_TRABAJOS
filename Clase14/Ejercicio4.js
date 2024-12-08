// • Ejercicio 4: Calcular descuento por cantidad
// Solicita al usuario la cantidad de productos comprados y el precio unitario.
// Usa una función flecha para calcular el total con descuento según la cantidad.
const prompt = require("prompt-sync")();

let cantidad_productos = parseInt(prompt("Cantidad de productos comprados: "));
let precio = parseFloat(prompt('Ingresa el precio: '));

const calcularDescuento = (quantity_products, price) => {
    let total = 0;
    let descuento = 0;
    if(quantity_products > 8 ){
        descuento = 0.50;
    } else if(quantity_products > 4){
        descuento = 0.20;
    }
    total = (quantity_products * price) * (1 - descuento);
    return total;
}

let total_articulo = calcularDescuento(cantidad_productos, precio);

console.log(`El total a pagar es de ${total_articulo}`);