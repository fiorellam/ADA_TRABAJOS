// Ejercicio 11: Sistema de Gestión de Vehículos
// Consigna: Crea una clase base Vehiculo con propiedades como marca, modelo,
// y un método detallesVehiculo(). Luego, crea dos clases derivadas: Automovil y
// Moto, cada una con propiedades adicionales y sobrescribiendo el método
// detallesVehiculo().
// Crea también una interfaz Mantenimiento que tenga el método
// calcularCostoMantenimiento(). Ambas clases derivadas deben implementar esta
// interfaz, pero con lógicas distintas para calcular el costo del mantenimiento.
interface Mantenimiento {
    calcularCostoMantenimiento(): number;
}
class Vehiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    detallesVehiculo(): void {
        console.log(`Vehículo: ${this.marca} ${this.modelo}`);
    }
}

class Automovil extends Vehiculo implements Mantenimiento {
    private cantidadPuertas: number;
    private kilometraje: number;

    constructor(marca: string, modelo: string, cantidadPuertas: number, kilometraje: number) {
        super(marca, modelo);
        this.cantidadPuertas = cantidadPuertas;
        this.kilometraje = kilometraje;
    }

    detallesVehiculo(): void {
        console.log(`Automóvil: ${this.marca} ${this.modelo}, Puertas: ${this.cantidadPuertas}, Kilometraje: ${this.kilometraje} km`);
    }

    calcularCostoMantenimiento(): number {
        return Math.ceil(this.kilometraje / 10000) * 100;
    }
}

class Moto extends Vehiculo implements Mantenimiento {
    private tipo: string;
    private cilindrada: number;

    constructor(marca: string, modelo: string, tipo: string, cilindrada: number) {
        super(marca, modelo);
        this.tipo = tipo;
        this.cilindrada = cilindrada;
    }

    detallesVehiculo(): void {
        console.log(`Moto: ${this.marca} ${this.modelo}, Tipo: ${this.tipo}, Cilindrada: ${this.cilindrada} cc`);
    }

    calcularCostoMantenimiento(): number {
        return Math.ceil(this.cilindrada / 250) * 50;
    }
}

const auto1 = new Automovil("Toyota", "Corolla", 4, 45000);
auto1.detallesVehiculo();
console.log(`Costo mantenimiento: $${auto1.calcularCostoMantenimiento()}`);

console.log('--------------------------------------------------');

const moto1 = new Moto("Yamaha", "MT-03", "Deportiva", 321);
moto1.detallesVehiculo();
console.log(`Costo mantenimiento: $${moto1.calcularCostoMantenimiento()}`);