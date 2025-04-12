// Ejercicio 9: Sistema de Gestión de Vehículos
// 1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases:

// o Vehiculo: Clase base con propiedades como marca, modelo y un
// método para mostrar información del vehículo.
class Vehiculo{
    public marca: string;
    public modelo: string;
    
    constructor(marca: string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
    }
    
    public mostrarInformacion(): void{
        console.log(`Marca ${this.marca}, modelo: ${this.modelo}`);
    }
}
// o Coche: Clase que extiende Vehiculo e incluye una propiedad para
// tipoCombustible y un método para mostrar la información completa
// del coche.
export class Coche extends Vehiculo{
    public tipoCombustible: string;
    
    constructor(marca: string, modelo: string, tipoCombustible:string){
        super(marca, modelo);
        this.tipoCombustible = tipoCombustible;
    }
    //sobreescribo el metodo de la clase padre(Vehiculo)
    public mostrarInformacion(): void {
        console.log(`Coche con tipo de combustible: ${this.tipoCombustible} Marca ${this.marca}, modelo: ${this.modelo}`);   
    }
}
// o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad
// para cilindrada y un método para mostrar la información completa
// de la motocicleta.

class Motocicleta extends Vehiculo{
    public cilindrada: number;

    constructor(marca: string, modelo: string, cilindrada: number){
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }
    //sobreescribo el metodo de la clase padre(Vehiculo)
    public mostrarInformacion(): void {
        console.log(`Motocicleta con cilindrada: ${this.cilindrada}cc,  Marca ${this.marca}, modelo: ${this.modelo}`);   
    }
}

const kicks = new Coche('Nissan', 'Kicks', 'Gasolina');
kicks.mostrarInformacion();

const yamaha = new Motocicleta('Yamaha', 'Yamaha MT-07', 689);
yamaha.mostrarInformacion();