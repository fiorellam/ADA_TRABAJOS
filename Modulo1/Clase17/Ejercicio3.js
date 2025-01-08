// Ejercicio 3: Gestión Compleja de Arrays
// A partir del siguiente array de productos, escriba la función
// ‘gestionarProductos’ que realice las siguientes tareas:

let productos = [
    {nombre: 'Computadora', precio: 158}, 
    {nombre: 'Mouse', precio: 111},
    {nombre: 'Escritorio', precio: 1891}
    
];

function gestionarProductos(products, producto){
    // 1. Añada un nuevo producto al array.
    products.push(producto);
    // 2. Elimine el último producto del array.
    products.pop();
    // 3. Encuentre el índice de un producto específico. En este punto
    // pueden usar forEach o investigar el método “findIndex()” https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    let posicionProducto = products.findIndex(function(element) {
        return element.nombre == producto.nombre;
    });
    console.log(posicionProducto);
    //OTRA FORMA DE RESOLVERLO CON FOREACH
    // products.forEach(function(element, index) {
    //     if(element.nombre == producto.nombre){
    //         console.log(`El producto fue encontrado en la posicion: ${index}`);
    //     }
    // });

    // 4. Verifique si existe un producto con precio mayor a 50. Para esto
    // investigar el método “.some()”
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Glo
    // bal_Objects/Array/some
    let encontrado = products.some(function(producto ){
        return producto.precio > 50; 
    })
    
    console.log('Se encontro un numero mayor a 50?', encontrado);
            
    // 5. Devuelva una cadena de nombres de productos separados por comas.
    let productosCadena = productos.map(function(producto){
        return `${producto.nombre}`
    });
    return productosCadena;
}
let resultado = gestionarProductos(productos, {nombre: 'Mouse', precio: 1500});
console.log(`${resultado}`);