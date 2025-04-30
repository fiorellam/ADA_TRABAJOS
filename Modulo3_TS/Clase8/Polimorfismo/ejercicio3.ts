// Ejercicio 9: Encapsulamiento y Herencia con Protección de Datos
// Crea una clase CuentaBancaria con métodos para depositar y retirar dinero,
// pero protege el saldo para que solo pueda ser modificado dentro de la clase.
// Crea una subclase CuentaAhorros que agregue interés al saldo.
class CuentaBancaria{
    protected saldo:number;

    constructor(saldo: number){
        this.saldo = saldo
    }
    depositar(cantidad: number): void {
        if (cantidad <= 0) {
            console.log("La cantidad a depositar debe ser mayor que cero.");
            return;
        }
        this.saldo += cantidad;
        console.log(`Depósito exitoso. Nuevo saldo: $${this.saldo}`);
    }

    retirar(cantidad: number): void {
        if (cantidad <= 0) {
            console.log("La cantidad a retirar debe ser mayor que cero.");
        } else if (cantidad > this.saldo) {
            console.log("Fondos insuficientes.");
        } else {
            this.saldo -= cantidad;
            console.log(`Retiro exitoso. Nuevo saldo: $${this.saldo}`);
        }
    }

    obtenerSaldo(): void {
        console.log(`Saldo actual: $${this.saldo}`);
    }
}

class CuentaAhorros extends CuentaBancaria {
    private tasaInteres: number; // en porcentaje

    constructor(saldoInicial: number, tasaInteres: number) {
        super(saldoInicial);
        this.tasaInteres = tasaInteres;
    }

    agregarInteres(): void {
        const interes = this.saldo * (this.tasaInteres / 100);
        this.saldo += interes;
        console.log(`Interés de $${interes.toFixed(2)} agregado. Saldo actualizado: $${this.saldo.toFixed(2)}`);
    }
}

const cuenta1 = new CuentaAhorros(1000, 5);

cuenta1.depositar(500);       
cuenta1.retirar(200);         
cuenta1.agregarInteres();
cuenta1.obtenerSaldo();