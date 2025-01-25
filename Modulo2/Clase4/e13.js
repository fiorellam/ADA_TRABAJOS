// Ejercicio 13: Inventario de productos
// Consigna:
// Crea un programa para manejar un archivo inventario.json. Debes:
// 1. Agregar productos al inventario con nombre, cantidad y precio.
// 2. Actualizar la cantidad de un producto existente.
// 3. Calcular el valor total del inventario.
//  Pista: Usa un ciclo para calcular el valor total.
const fs = require('fs');
const filePath = './e13inventario.json'

// Función para leer el archivo de productos
function leerProductos() {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }
    return []; // Si no existe el archivo, devolvemos una lista vacía
}

// Función para guardar productos en el archivo
function guardarProductos(productos) {
    fs.writeFileSync(filePath, JSON.stringify(productos, null, 2));
}

function agregarProducto(nombre, cantidad, precio) {
    const productos = leerProductos();

    productos.push({id: productos.length +1, nombre, cantidad, precio });
    guardarProductos(productos);
    console.log(`Producto "${nombre}" agregado exitosamente. ✅`);
}

function actualizarCantidad(nombre, cantidad)  {
    const productos = leerProductos();
    let producto = productos.find(producto => producto.nombre === nombre);
    if(producto != null){
        producto.cantidad = parseInt(cantidad);
        guardarProductos(productos);
    } else{
        console.log('Tarea encontrada');
    }
}

function calcularValorTotalInventario(){
    const productos = leerProductos();
    let sumaTotal = 0;
    for(let i = 0; i <productos.length; i++){
        let producto = productos[i];
        sumaTotal += parseInt(producto.cantidad) * parseFloat(producto.precio); 
    }
    console.log('El total del inventario es de: $', sumaTotal);
}

// agregarProducto("Cepillo", 5, 15.5);
// agregarProducto("Shampoo", 2, 40);
actualizarCantidad('Shampoo', 3);
calcularValorTotalInventario();