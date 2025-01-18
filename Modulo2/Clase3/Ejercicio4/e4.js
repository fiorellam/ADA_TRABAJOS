// Actividad 4: Control de inventario
// Consigna: Crea un programa para llevar el control de un inventario. El
// programa debe permitirte:
// 1. Agregar un producto: Registrar un producto con su nombre y
// cantidad disponible.
// 2. Listar los productos: Mostrar todos los productos registrados.
// 3. Actualizar la cantidad de un producto: Modificar la cantidad de
// un producto en el inventario.
// Pistas:
// • Usa un archivo JSON para guardar los productos.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada producto debe tener un ID único que se pueda utilizar para
// actualizar su cantidad.
const fs = require('fs');
const filePath = './productos.json';

const obtenerProductos = () => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');
    }
    const contenidoFile = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenidoFile);
}

const guardarProductos = (productos) => {
    fs.writeFileSync(filePath, JSON.stringify(productos, null, 2));
}

const agregarProducto = (nombre, cantidadDisponible) => {
    const productos = obtenerProductos();
    productos.push({id: productos.length + 1, nombre, cantidadDisponible});
    guardarProductos(productos);
    console.log("Producto agregado");
}

const listarProductos = () => {
    const productos = obtenerProductos();
    console.log("Lista de productos");
    console.log(productos);
}

const actualizarCantidadProducto = (idProducto, nuevaCantidad) => {
    const productos = obtenerProductos();
    let producto = productos.find((producto) => producto.id === parseInt(idProducto));
    if(producto){
        producto.cantidadDisponible = nuevaCantidad;
        guardarProductos(productos);
        console.log("Producto actualizado");
    } else {
        console.log('Producto no encontrado');
    }
}

// agregarProducto("Peine", 2);
// listarProductos();
// actualizarCantidadProducto(2, 10);