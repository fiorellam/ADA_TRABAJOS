// Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución)
// Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y
// Moto. Cada clase debe sobrescribir el método arrancar de la clase base para
// proporcionar una implementación específica de cómo arrancar.

class Vehiculo{
    arrancar(){
        console.log(`Arrancó`);
    }
}

class Coche extends Vehiculo {
    arrancar(): void {
        console.log(`Coche arrancando`);
    }
}
class Moto extends Vehiculo { 
    arrancar(): void {
        console.log(`Moto arrancando`);   
    }
}

function iniciarArranque(vehiculo: Vehiculo){
    vehiculo.arrancar();
}

let coche = new Coche();
let moto = new Moto();
iniciarArranque(coche);
iniciarArranque(moto);

