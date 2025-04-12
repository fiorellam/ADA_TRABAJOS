// Ejercicio 5: Interfaz

// 1. Define una interfaz llamada IPersona con propiedades nombre, edad y un
// método presentarse().
// 2. Crea una clase llamada Persona que implemente esta interfaz y
// proporciona la implementación del método presentarse().
interface IPersona {
    nombre: string,
    edad: number,
    presentarse:() => void
}

class Persona implements IPersona{
    nombre: string;
    edad: number;

    constructor(nombre: string, edad:number){
        this.nombre = nombre;
        this.edad = edad
    }

    public presentarse(): void{
        console.log(`Hola yo soy: ${this.nombre} y tengo ${this.edad} anios`);  
    }
}

const Fiore = new Persona("Fiore", 26);
Fiore.presentarse();