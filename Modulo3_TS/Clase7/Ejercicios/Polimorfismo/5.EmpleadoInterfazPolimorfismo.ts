// Ejercicio 5: Uso de Interfaces para Polimorfismo
// Crea una interfaz Empleado con un método trabajar. Implementa esta interfaz
// en clases Programador y Disenador, donde cada clase debe implementar el
// método con su propia lógica. Luego, crea una función que reciba un objeto de
// tipo Empleado y llame a su método trabajar.

interface IEmpleado{
    trabajar(): void;
}

class Programador implements IEmpleado{
    trabajar(): void {
        console.log('Programar');
    }
}

class Disenador implements IEmpleado{
    trabajar(): void {
        console.log('Buscar nuevas ideas creativas para ui');
    }
}

function comenzarATrabajar(trabajador: IEmpleado){
    trabajador.trabajar();
}

const dev = new Programador();
const des = new Disenador();

comenzarATrabajar(dev);
comenzarATrabajar(des);