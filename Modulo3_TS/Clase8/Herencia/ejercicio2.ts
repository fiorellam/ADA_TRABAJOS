// Ejercicio 8: Sistema de Reserva de Hotel
// Consigna: Crea un sistema para gestionar las reservas de un hotel. Define una
// clase base Cliente con propiedades privadas como nombre, numeroHabitacion,
// y un método reservar(). Luego, crea dos clases derivadas ClientePremium y
// ClienteCorporativo que sobrescriban el método reservar() para añadir
// funcionalidades adicionales.
// Adicionalmente, crea una interfaz Beneficios con un método accederBeneficios().
// Ambas clases derivadas deben implementar esta interfaz. En la clase
interface Beneficios{
    accederBeneficios(): void;
}

class Cliente{
    private _nombre: string;
    private _numeroHabitacion: number;
    
    constructor(nombre: string, numeroHabitacion: number){
        this._nombre = nombre;
        this._numeroHabitacion = numeroHabitacion;
    }

    public getNombre() : string {
        return this._nombre;
    }

    public getNumHabitacion() : number {
        return this._numeroHabitacion;
    }
    
    reservar(): void {
        console.log(`El cliente ${this._nombre } ha reservado la habitación ${this._numeroHabitacion}`)
    }
}

// ClientePremium, el cliente podrá acceder al spa y desayuno gratis, y en la clase
class ClientePremium extends Cliente implements Beneficios{
    constructor(nombre: string, numeroHabitacion: number){
        super(nombre, numeroHabitacion);
    }
    reservar(): void {
        console.log(`El cliente ${this.getNombre() } PREMIUM ha reservado la habitación ${this.getNumHabitacion()}`) 
    }
    
    accederBeneficios(): void {
        console.log('Los beneficios PREMIUM son el acceso al spa y el desayuno gratis');
    }
    
}

// ClienteCorporativo, el cliente podrá acceder a salas de reuniones y descuentos.
class ClienteCorporativo extends Cliente implements Beneficios{
    constructor(nombre: string, numeroHabitacion: number){
        super(nombre, numeroHabitacion);
    }
    reservar(): void {
        console.log(`El cliente ${this.getNombre() } CORPORATIVO ha reservado la habitación ${this.getNumHabitacion()}`) 
    }
    accederBeneficios(): void {
        console.log('Los beneficios CORPORATIVOS son el acceso a salas de reuniones y descuentos');
    }
}

const clientePremium1 = new ClientePremium('Fiorella', 103);
clientePremium1.reservar();
clientePremium1.accederBeneficios();

console.log('---------------------------------------------------------------');

const clienteCorportativo1 = new ClientePremium('Luisa', 105);
clienteCorportativo1.reservar();
clienteCorportativo1.accederBeneficios();