// Ejercicio 2: Herencia Simple con Acceso
// Consigna: Crea una clase base Maestro con propiedades protegidas nombre y
// materia, y un método enseñar(). Luego, crea una clase derivada
// MaestroMatematicas que extienda de Maestro y sobrescriba el método
// enseñar() para imprimir un mensaje específico de matemáticas.
class Maestro{
    protected nombre: string;
    protected materia: string;

    constructor(nombre:string, materia: string){
        this.nombre = nombre;
        this.materia = materia;
    }

    ensenar(): void {
        console.log('Enseñar desde clase padre');  
    }
}

class MaestroMatematicas extends Maestro{
    constructor(nombre: string, materia: string){
        super(nombre, materia);
    }

    ensenar(): void {
        console.log(`${this.nombre} da clases de ${this.materia}`);
    }
}

const nuevoMaestroMate = new MaestroMatematicas("Luis Torres", "Matematicas");
nuevoMaestroMate.ensenar();