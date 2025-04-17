// Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios
// Crea una interfaz Usuario que tenga las propiedades:
// • nombre (obligatoria).
// • edad (opcional).
// • readonly id (solo lectura).
// Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta
// modificar la propiedad id para mostrar cómo se aplican las restricciones de solo
// lectura.
interface IUsuario{
    nombre: string,
    edad?: number,
    readonly id: number
}

class UsuarioConcreto implements IUsuario{
    nombre: string;
    edad?: number;
    readonly id: number;
    constructor(nombre: string, edad:number, id:number){
        this.nombre = nombre;
        this.edad = edad; 
        this.id = id;
    }

    mostrarInformacionUsuario(): void{
        console.log(`Nombre ${this.nombre}, edad: ${this.edad}, id: ${this.id}`);
    }
}

const usuario1 = new UsuarioConcreto('Fiorella', 26, 2757885);
usuario1.mostrarInformacionUsuario();
// usuario1.id = 5411616; //Cannot assign to id because it is a read-only property