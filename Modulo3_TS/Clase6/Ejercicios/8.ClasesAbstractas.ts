// Ejercicio 2: Clases Abstractas - Sistema de Vehículos
// Crea una clase abstracta Vehiculo con una propiedad velocidad y un método
// abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa
// los modificadores de acceso para controlar la visibilidad de las propiedades. 
abstract class Vehiculo{
    protected velocidad: number;
    constructor(velocidad: number){
        this.velocidad = velocidad
    };

    abstract mover(): void;
}

// abstract class Vehiculo{
//     constructor(protected velocidad: number){};

//     abstract mover(): void;
// }


class Auto extends Vehiculo{
    constructor(velocidad: number){
        super(velocidad);
    }
    mover(): void {
        console.log(`El auto esta corriendo a una velocidad de ${this.velocidad} km/hr`);
    }
}
class Bicicleta extends Vehiculo{
    constructor(velocidad: number){
        super(velocidad);
    }
    mover(): void {
        console.log(`La bicicleta esta corriendo a una velocidad de ${this.velocidad} km/hr`);
    }
}

const miAuto = new Auto(120);
const miBicicleta = new Bicicleta(25); 

// Mover los vehículos
miAuto.mover();
miBicicleta.mover(); 