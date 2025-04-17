// Ejercicio 3: Herencia Múltiple Indirecta (vía Interfaces)
// Consigna: Crea dos interfaces: Volador con el método volar() y Transportable
// con el método transportar(). Luego crea una clase Avion que implemente ambas
// interfaces y sobrescriba los métodos.

interface Volador{
    volar(): void;
}
interface Transportable{
    transportar() : void;
}

class Avion implements Volador, Transportable{
    protected modelo: string;

    constructor(modelo: string){
        this.modelo = modelo;
    }
    volar(): void {
        console.log(`El avion ${this.modelo} esta volando`);  
    }
    
    transportar(): void {
        console.log(`El avion ${this.modelo} esta transportando`);  
    }
}

const boeing = new Avion("Boeing 747");
boeing.volar();
boeing.transportar();

