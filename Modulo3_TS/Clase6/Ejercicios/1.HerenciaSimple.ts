// Ejercicio 1: Herencia Simple
// Consigna: Define una clase base Torta que tenga propiedades generales como
// nombre y tipo, y un método hacerDescripcion() que devuelva una descripción
// general de la torta. Luego, crea una clase derivada TortaDeChocolate que
// extienda de Torta y sobrescriba el método hacerDescripcion() para que devuelva
// "Soy una torta de chocolate, deliciosa y suave."
export class Torta{
    nombre: string;
    tipo: string;

    constructor(nombre: string, tipo: string){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    hacerDescripcion(): void{
        console.log(`La torta ${this.nombre} es de tipo ${this.tipo}`);
    }
}

class TortaDeChocolate extends Torta{
    constructor(nombre:string, tipo: string){
        super(nombre, tipo);
    }

    hacerDescripcion(): void {
        console.log("Soy una torta de chocolate, deliciosa y suave.");
    }
}

const chocoBrownie = new TortaDeChocolate('Choco Brownie', 'Brownie');
chocoBrownie.hacerDescripcion();