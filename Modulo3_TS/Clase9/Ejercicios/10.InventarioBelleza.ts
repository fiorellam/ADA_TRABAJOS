// Ejercicio 10: Sistema de Gestión de Inventario en una Tienda de Belleza
// Crea un sistema de gestión de productos en una tienda de belleza. Define una
// clase Producto con atributos como nombre, precio y categoria. Luego, crea una
// clase Inventario que gestione un conjunto de productos y tenga métodos para
// agregar, eliminar y buscar productos por categoría. Usa polimorfismo para
// manejar diferentes tipos de productos, como Cosmetico, TratamientoCapilar,
// etc. 
class Producto {
    private nombre: string;
    private precio: number;
    private categoria: string;

    constructor(nombre: string, precio: number, categoria: string){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    public getNombre(): string{
        return this.nombre;
    }
    public getCategoria(): string{
        return this.categoria;
    }

    mostrarDetalle(){
        console.log(`Producto: ${this.nombre}, precio: ${this.precio}, categoria: ${this.categoria}`);
    }
}

class Cosmetico extends Producto{
    constructor(nombre: string, precio: number) {
        super(nombre, precio, "Cosmetico");
    }
}

class TratamientoCapilar extends Producto{
    constructor(nombre: string, precio: number) {
        super(nombre, precio, "Tratamiento");
    }
}

class TiendaBelleza{
    private productos: Producto[];

    constructor(){
        this.productos = [];
    }

    agregar(producto: Producto){
        this.productos.push(producto);
    }
    eliminar(nombre: string){
        let index = this.productos.findIndex((product) => product.getNombre() === nombre);
        if(index != -1){
            this.productos.splice(index, 1)
        } else {
            console.log(`El producto que deseas eliminar no fue encontrado`);  
        }
    }

    buscarProductosPorCategoria(categoria: string){
        const filtrados = this.productos.filter(producto =>
            producto.getCategoria().toLowerCase() === categoria.toLowerCase()
        );
        if(filtrados.length > 0){
            console.log(`Productos de la categoria ${categoria}`);
            filtrados.forEach((producto) => producto.mostrarDetalle())
        } else {
            console.log('No existen productos con la categoria que ingresaste');
        }
    }
}

const nano = new TratamientoCapilar('Nanoplastia', 700);
const labial = new Cosmetico('Labial', 60);
const bronzer = new Cosmetico('Bronzer', 160);
const corrector = new Cosmetico('Corrector', 120);
const tiendaBelleza = new TiendaBelleza();
tiendaBelleza.agregar(nano);
tiendaBelleza.agregar(labial);
tiendaBelleza.agregar(bronzer);
tiendaBelleza.agregar(corrector);

tiendaBelleza.eliminar(bronzer.getNombre());

tiendaBelleza.buscarProductosPorCategoria('Cosmetico');

