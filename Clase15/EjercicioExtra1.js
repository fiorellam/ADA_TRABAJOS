// Gestión de inventario de una tienda
// Eres encargado de una tienda y tienes un inventario inicial de productos.
// La lista de productos es:
// let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
// Debes realizar las siguientes acciones:




let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
// 1. Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
inventario.push("Memoria Usb");
// 2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
let tabletEncontrada = inventario.includes("Tablet");
if(tabletEncontrada){
    console.log('La tablet está dentro del inventario')
} else {
    console.log('La tablet no está en el inventario');
}
// 3. Eliminar el primer producto del inventario.
inventario.shift();
// console.log(inventario);

// 4. Mostrar la lista actualizada de productos en una sola cadena, separados por comas
let listaCadena = inventario.join(", ");
console.log(listaCadena);