// Ejercicio 9: Sistema de Gestión de Compras
// Crea un sistema que gestione productos y órdenes de compra. Usa una clase
// abstracta Producto, clases concretas Electrónico y Alimento, y una clase
// OrdenCompra que contenga múltiples productos.
abstract class Producto{
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number){
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInformacion(): void{};
}
class Electronico extends Producto{
    marca: string;

    constructor(nombre: string, precio: number, marca: string){
        super(nombre, precio);
        this.marca = marca;
    }
    mostrarInformacion(): void {
        console.log(`Producto Electrónico: ${this.nombre}, Marca: ${this.marca}, Precio: $${this.precio}`);
    }
}

class Alimento extends Producto{
    tipo: string;

    constructor(nombre: string, precio: number, tipo: string){
        super(nombre, precio);
        this.tipo = tipo;
    }

    mostrarInformacion(): void {
        console.log(`Alimento: ${this.nombre} con un precio de: ${this.precio}\n`);  
    }

}

class OrdenCompra{
    productos: Producto[];

    constructor(){
        this.productos = [];
    }

    agregarProducto(producto: Producto): void{
        this.productos.push(producto);
    }

    mostrarInformacionOrden(): void {
        console.log(`--------------------------------------------------------------`);
        console.log('-----------------------ORDEN DE COMPRA------------------------');
        for(let i = 0 ; i < this.productos.length; i++){
            this.productos[i].mostrarInformacion();            
        }
        console.log(`--------------------------------------------------------------`);
        this.calcularTotal();
    }

    calcularTotal(): void{
        if(this.productos.length > 0){
            let total = 0;
            for(let i = 0; i < this.productos.length; i++){
                total += this.productos[i].precio;
            }
            console.log(`El total de la orden de compra es de: ${total}`);
            
        } else {
            console.log(`No se puede calcular un total, ya que no se han añadido productos a la orden de compra`);
        }
    }
}

const carne = new Alimento('Carne', 50, 'Animal');
const compu = new Electronico('Computadora', 50, 'Asus');
const ordenCompra1 = new OrdenCompra();
ordenCompra1.agregarProducto(carne);
ordenCompra1.agregarProducto(compu);

ordenCompra1.mostrarInformacionOrden();