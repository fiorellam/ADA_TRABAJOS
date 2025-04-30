// Ejercicio 8: Polimorfismo y Herencia con Abstracción Compleja
// Implementa una clase abstracta Empleado con un método abstracto
// calcularSalario. Crea dos clases derivadas EmpleadoPorHora y EmpleadoFijo,
// que calculen el salario de acuerdo a las horas trabajadas y salario fijo
// respectivamente.
abstract class Empleado{
    protected nombre: string;
    protected salario;
    constructor(nombre:string, salario: number){
        this.nombre = nombre;
        this.salario = salario
    }

    abstract calcularSalario(): number;
} 
class EmpleadoPorHora extends Empleado{
    private horasTrabajo: number;

    constructor(nombre:string, salario:number, horasTrabajo:number){
        super(nombre, salario);
        this.horasTrabajo = horasTrabajo;
    }
    calcularSalario(): number {
        return this.horasTrabajo * this.salario;
    }

}
class EmpleadoFijo extends Empleado{
    constructor(nombre:string, salario:number){
        super(nombre, salario);
    }
    calcularSalario(): number {
        return this.salario;
    }
}

const empleado1 = new EmpleadoPorHora('Fiorella', 5000, 6);
console.log(empleado1.calcularSalario());

const empleado2 = new EmpleadoFijo('Fiorella', 5000);
console.log(empleado2.calcularSalario());