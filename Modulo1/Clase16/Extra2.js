// • Calcula el total de ventas de productos seleccionados
// Supón que tienes una lista de productos con sus precios en formato de
// objeto:
// const products = [
//  { name: 'Laptop', price: 1000 },
//  { name: 'Mouse', price: 25 },
//  { name: 'Teclado', price: 50 },
//  { name: 'Monitor', price: 200 },
//  { name: 'Audífonos', price: 75 }
// ];
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 25 },
    { name: 'Teclado', price: 50 },
    { name: 'Monitor', price: 200 },
    { name: 'Audífonos', price: 75 }
];
// o Seleccionar los productos cuyo precio sea mayor o igual a 50.
let productosMayorIgual50 = products.filter(function(producto){
    return producto.price >= 50;
});
console.log(productosMayorIgual50);

// o Obtener solo los nombres de esos productos.
let nombreProductos = productosMayorIgual50.map(function(producto){
    return  ' ' + producto.name;
});
// let nombreProductos2 = productosMayorIgual50.reduce(function(acum, producto){
//     return acum + ', ' + producto.name;
// }, '')

// o Calcular el precio total sumando los precios de los productos seleccionados.
let precioTotal = productosMayorIgual50.reduce(function(suma, producto){
    return suma + producto.price;
}, 0);

// o Imprime el total y los nombres de los productos seleccionados en la consola.
console.log(`El total de los productos ${nombreProductos} es de: ${precioTotal}`);
