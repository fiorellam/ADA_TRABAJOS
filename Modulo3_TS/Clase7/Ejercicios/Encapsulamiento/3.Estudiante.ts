// 3. Ejercicio de Estudiante
// Diseña una clase Estudiante que contenga propiedades privadas para nombre,
// edad, y calificaciones. Implementa métodos para agregar calificaciones y
// calcular el promedio. Imprime un mensaje en caso de que se intente agregar
// una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para
// calcular el promedio.
class Estudiante{
    private _nombre: string;
    private _edad: number;
    private _calificaciones: number [] = [];

    constructor(nombre: string, edad: number){
        this._nombre = nombre;
        this._edad = edad;
    }

    public agregarCalificacion(calificacion: number) : void {
        if(calificacion >= 0 && calificacion <= 100){
            this._calificaciones.push(calificacion);
        } else {
            console.log(`Calificacion invalida debe estar entre 0 y 100`);       
        }
    }
    
    public calcularPromedio() : void {
        let suma = 0;
        if(this._calificaciones.length > 0){
            this._calificaciones.forEach(calificacion => {
                suma += calificacion;
            });
            const promedio = suma / this._calificaciones.length
            console.log(`El promedio de ${this._nombre} es de ${promedio.toFixed(2)}`);
        } else {
            console.log("No existen calificaciones para sacar el promedio");
            
        }
    }
}

const fiore = new Estudiante('Fiorella', 26);
fiore.agregarCalificacion(90);
fiore.agregarCalificacion(90);
fiore.agregarCalificacion(100);
fiore.calcularPromedio();