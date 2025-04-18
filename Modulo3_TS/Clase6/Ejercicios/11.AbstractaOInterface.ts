// Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces
// Diseña un sistema de transporte público. Define:
// • Una interfaz VehiculoElectrico con el método cargarBateria().
// • Una clase abstracta Transporte con el método abstracto mover().
// Implementa ambas estructuras en una clase concreta AutobusElectrico.
interface IVehiculoElectrico{
    cargarBateria(): void;
}

abstract class Transporte{
    nombre: string;
    modelo: string;

    constructor(nombre:string, modelo: string){
        this.nombre = nombre;
        this.modelo = modelo
    }
    abstract mover(): void;
}

class AutobusElectrico extends Transporte implements IVehiculoElectrico{
    protected bateria: number;
    constructor(nombre: string, modelo: string, bateria: number){
        super(nombre, modelo);
        this.bateria = bateria
    }

    cargarBateria(): void {
        this.bateria = 100;
        console.log(`Bateria cargada! ${this.bateria}`);
    }

    mover(): void {
        if(this.bateria > 10){
            console.log(`${this.nombre} de modelo ${this.modelo} puede moverse ya que su bateria es mayor a 10%`);
        } else {
            console.log(`${this.nombre} de modelo ${this.modelo} ya puede NO PUEDE moverse, no tiene bateria suficiente`);
        }
    }
    
    mostrarDetalles(): void{
        console.log(`${this.nombre} de modelo ${this.modelo} tiene bateria de ${this.bateria}%`);
    }
}

const autoElectrico = new AutobusElectrico('Autobus Electrico', 'MF86', 10);
autoElectrico.mostrarDetalles();
autoElectrico.mostrarDetalles();
autoElectrico.mover();
autoElectrico.cargarBateria();