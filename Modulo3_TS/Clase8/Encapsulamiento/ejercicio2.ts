// 8. Ejercicio de Empleado
// Crea una clase Empleado que contenga propiedades privadas para nombre,
// salario, y departamento. Implementa métodos para cambiar el salario (que no
// puede ser menor a 0) y obtener la información del empleado. Si se intenta
// establecer un salario negativo, imprime un mensaje indicativo.
class Empleado{
    private nombre: string;
    private salario: number;
    private departamento: string;

    constructor(nombre: string, salario: number, departamento : string){
        this.nombre = nombre;
        this.departamento = departamento;
        
        if(salario < 0){
            console.log(`El salario no puede ser menor a 0`);
            this.salario = 0;
        } else {
            this.salario = salario;

        }
    }

    cambiarSalario(salario: number): void{
        if(salario < 0){
            console.log(`El salario no puede ser menor a 0`);
        }else {
            this.salario = salario;
        }
    } 

    obtenerInformacion():void{
        console.log(`Empleado: ${this.nombre} con salario ${this.salario} del departamento ${this.departamento}`);
    }
}

const empleado = new Empleado('Fiorella', 2500, 'IT');
empleado.cambiarSalario(-55550);
empleado.obtenerInformacion();