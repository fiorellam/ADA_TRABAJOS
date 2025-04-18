// Crea un sistema de inventario que gestione diferentes tipos de productos.
// Define una clase abstracta Producto con:
// • Propiedades protegidas: nombre, precio.
// • Un método abstracto calcularDescuento().
// Implementa dos subclases: Ropa y Electronica.
// • La subclase Ropa aplicará un 10% de descuento.
// • La subclase Electronica tendrá un 5% de descuento.
// Añade un método concreto en la clase abstracta para mostrar la información del
// producto.
abstract class Producto{
    protected nombre: string;
    protected precio: number;

    constructor(nombre:string, precio: number){
        this.nombre = nombre;
        this.precio = precio;
    }

    abstract calcularDescuento(): void;

    mostrarInformacion(): void{
        console.log(`Producto ${this.nombre}, precio: ${this.precio}`);
    }
}

class Ropa extends Producto{
    private porcentajeDescuento: number = 0.10;

    constructor(nombre:string, precio: number){
        super(nombre, precio);
    }

    calcularDescuento(): void {
        const total = this.precio - (this.precio * this.porcentajeDescuento);
        console.log(`El total de ${this.nombre} con el descuento de ${this.porcentajeDescuento*100}% es de ${total}`);
    }
}
class Electronica extends Producto{
    private porcentajeDescuento: number = 0.05;

    constructor(nombre:string, precio: number){
        super(nombre, precio);
    }
    
    calcularDescuento(): void {
        const total = this.precio - (this.precio * this.porcentajeDescuento);
        console.log(`El total de ${this.nombre} con el descuento de ${this.porcentajeDescuento*100}% es de ${total}`);
    }
}

console.log('----------------------------------------------');

const blusa = new Ropa('Blusa rosa', 150);
blusa.mostrarInformacion();
blusa.calcularDescuento();

console.log('----------------------------------------------');

const computadora = new Electronica('Computadora', 5000);
computadora.mostrarInformacion();
computadora.calcularDescuento();