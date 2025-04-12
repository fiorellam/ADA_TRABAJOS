// Ejercicio 10: Registro de Estudiantes
// 1. Crea un sistema para registrar Estudiantes con las siguientes clases:
// o Estudiante: Clase que incluye propiedades como nombre, edad y
// curso, además de un método que muestre la información del
// estudiante.
// o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con
// métodos para agregar un estudiante y mostrar todos los estudiantes
// registrados.
enum Curso {
    Matematicas = "Matemáticas",
    Geografia = "Geografía",
    Espanol = "Español"
}
class Estudiante{
    public nombre: string;
    public edad: number;
    public curso: Curso;

    constructor(nombre: string, edad: number, curso: Curso){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    public mostrarInformacion(): string{
        return (`Estudiante: ${this.nombre}, edad: ${this.edad}, curso: ${this.curso}`);
    }
}

class RegistroEstudiantes{
    private estudiantes: Estudiante[] = [];

    //Agregar estudiante
    public agregarEstudiante (estudiante: Estudiante) : void{
        this.estudiantes.push(estudiante);
        console.log(`Ha sido agregado`);
    }

    //Mostrar todos los estudiantes
    public mostrarEstudiantes(): void{
        if(this.estudiantes.length > 0 ){
            console.log("--------------------LISTA DE ESTUDIANTES--------------------");
            
            for(let i = 0; i < this.estudiantes.length; i++){
                console.log(`${i+1}. ${this.estudiantes[i].mostrarInformacion()}`); 
            }
        } else {
            console.log("No hay estudiantes registrados");
        }
    }
}

const registro = new RegistroEstudiantes();

const estudiante1 = new Estudiante('Fiorella', 26, Curso.Matematicas);
const estudiante2 = new Estudiante('Giselle', 30, Curso.Geografia);
const estudiante3 = new Estudiante('Constanza', 27, Curso.Espanol);

registro.agregarEstudiante(estudiante1);
registro.agregarEstudiante(estudiante2);
registro.agregarEstudiante(estudiante3);

registro.mostrarEstudiantes();