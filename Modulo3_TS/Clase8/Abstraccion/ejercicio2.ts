// Ejercicio 8: Sistema de Gestión de Cursos
// Crea un sistema que gestione cursos, profesores y estudiantes. Usa una clase
// abstracta Persona, clases concretas Estudiante y Profesor, y una clase Curso que
// contenga los estudiantes y el profesor
abstract class Persona{
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }

    abstract mostrarInformacion():void;
}
class Estudiante extends Persona{
    private _matricula: string;
    
    constructor(nombre: string, edad: number, matricula: string){
        super(nombre, edad);
        this._matricula = matricula;
    }
    mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre} con matricula ${this._matricula}`);
    }

}

class Profesor extends Persona{
    private materia: string;

    constructor(nombre: string, edad: number, materia: string){
        super(nombre, edad);
        this.materia = materia;
    }

    mostrarInformacion(): void {
        console.log(`Profesor ${this.nombre} de la materia ${this.materia}`)
    }
}

class Curso{
    nombreCurso: string;
    private estudiantes: Estudiante[];
    private maestro: Profesor;

    constructor(nombreCurso: string, maestro: Profesor){
        this.nombreCurso = nombreCurso;
        this.estudiantes = [];
        this.maestro = maestro;
    }

    agregarEstudianteAlCurso(estudiante: Estudiante){
        this.estudiantes.push(estudiante);
    }

    mostrarInformacion(): void{
        console.log(`Curso ${this.nombreCurso} con el maestro ${this.maestro.nombre} con una cantidad de ${this.estudiantes.length == 0? 'No hay estudiantes inscritos aun': `${this.estudiantes.length} estudiantes`}`);
    }
}

const maestraJavascript = new Profesor('Berni', 27, 'Backend');
const estudiante1 = new Estudiante('Fiore', 26, '#8757');
const estudiante2 = new Estudiante('Coti', 26, '#8777');

const cursoBackend = new Curso('Backend con Typescript y JS', maestraJavascript)
cursoBackend.agregarEstudianteAlCurso(estudiante1);
cursoBackend.agregarEstudianteAlCurso(estudiante2);

cursoBackend.mostrarInformacion();
