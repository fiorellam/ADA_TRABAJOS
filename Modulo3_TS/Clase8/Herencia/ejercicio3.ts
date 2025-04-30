// Ejercicio 9: Sistema de Tienda en Línea
// Consigna: Desarrolla un sistema para una tienda en línea. Crea una clase base
// Producto que tenga propiedades como nombre, precio, y un método
// detallesProducto(). Luego, crea dos clases derivadas: Electronico y Ropa, ambas
// deben sobrescribir el método detallesProducto() con información más
// específica.
// Crea una interfaz Envio que defina el método calcularEnvio(). La clase
// Electronico debe implementar esta interfaz y el cálculo del envío será un 10%
// del precio del producto.
interface Envio{
    calcularEnvio(): void;
}
class Producto{
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number){
        this.nombre = nombre;
        this.precio = precio;
    }

    detallesProducto(): void{
        console.log(`Producto: ${this.nombre} - precio ${this.precio}`);
    }
}

class Electronico extends Producto implements Envio{
    constructor(nombre: string, precio: number){
        super(nombre, precio);
    }
    detallesProducto(): void{
        console.log(`Electronico: ${this.nombre} - precio ${this.precio}`);
    }
    calcularEnvio(): void {
        let totalEnvio = this.precio * 0.1; 
        console.log(`El total de envio por la ${this.nombre} es de ${totalEnvio} pesos`);
    }

}
class Ropa extends Producto{
    constructor(nombre: string, precio: number){
        super(nombre, precio);
    }
    detallesProducto(): void{
        console.log(`Ropa: ${this.nombre} - precio ${this.precio}`);
    }

    calcularEnvio(): void {
        let totalEnvio = this.precio * 0.15; 
        console.log(`El total de envio por la ${this.nombre} es de ${totalEnvio} pesos`);
    }
}

const blusa = new Ropa('Blusa', 50);
blusa.detallesProducto();
blusa.calcularEnvio();

const compu = new Electronico('Computadora', 15000);
compu.detallesProducto();
compu.calcularEnvio();

