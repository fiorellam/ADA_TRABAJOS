// Ejercicio 10: Sistema de Gestión de Empleados
// Consigna: Crea una clase base Empleado con propiedades protegidas nombre y
// salario, y un método calcularSalario(). Crea dos clases derivadas
// EmpleadoTiempoCompleto y EmpleadoMedioTiempo. Ambas clases deben
// sobrescribir el método calcularSalario() con sus propias lógicas
// Además, crea una interfaz BeneficiosLaborales que tenga el método
// calcularBeneficios(). Solo los empleados de tiempo completo implementarán
// esta interfaz.
interface BeneficiosLaborales{
    calcularBeneficios() : void;
}
class Empleado{
    protected nombre: string;
    protected salario: number;
    
    constructor(nombre: string, salario: number){
        this.nombre = nombre; 
        this.salario = salario;
    }

    public getNombre(): string{
        return this.nombre;
    }

    public getSalario(): number{
        return this.salario;
    }
    
    public calcularSalario(){
        
    }
}

//  (empleados de tiempo completo tienen un salario fijo, 
class EmpleadoTiempoCompleto extends Empleado implements BeneficiosLaborales{
    constructor(nombre: string, salario: number){
        super(nombre, salario);
    }
    calcularBeneficios(): void {
        console.log('Sus beneficios son de seguro y vales de despensa');
    }

    public calcularSalario(): number {
        return this.salario;
    }
}

// mientras que los empleados de medio tiempo cobran por hora).
class EmpleadoMedioTiempo extends Empleado{
    private horasTrabajadas: number;
    
    constructor(nombre: string, salario: number, horasTrabajadas: number){
        super(nombre, salario);
        this.horasTrabajadas = horasTrabajadas
    }
    
    public calcularSalario(): number {
        return this.salario * this.horasTrabajadas;
    }
}

const empleado1 = new EmpleadoTiempoCompleto("María", 3000);
console.log(`Salario de ${empleado1.getNombre()} (Tiempo Completo): $${empleado1.calcularSalario()}`);

const empleado2 = new EmpleadoMedioTiempo("Carlos", 20, 80);
console.log(`Salario de ${empleado2.getNombre()} (Medio Tiempo): $${empleado2.calcularSalario()}`);