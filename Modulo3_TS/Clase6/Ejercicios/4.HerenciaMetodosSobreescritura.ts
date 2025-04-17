// Ejercicio 4: Herencia de Métodos y Sobrescritura
// Consigna: Define una clase base Flor con el método describir(), que imprime un
// mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol,
// cada una sobrescribiendo el método describir() con un mensaje específico.
class Flor{
    protected nombreFlor: string;

    constructor(nombreFlor: string){
        this.nombreFlor = nombreFlor;
    }

    describir(): void {
        console.log(`La flor ${this.nombreFlor} es hermosa`);
    }
}

class Rosa extends Flor{
    constructor(nombreFlor: string){
        super(nombreFlor);
    }
    
    describir(): void {
        console.log(`${this.nombreFlor} es bella`);
    }
}

class Girasol extends Flor{
    constructor(nombreFlor:string){
        super(nombreFlor);
    }

    describir(): void {
        console.log(`${this.nombreFlor} es precioso`);
    }
}

const rosa = new Rosa('Rosa');
const girasol = new Girasol('Girasol');

rosa.describir();
girasol.describir();