// Ejercicio 6: Encapsulamiento en clases
// Crea una clase CuentaBancaria que tenga atributos privados como saldo y un
// método público para consultar el saldo y otro para depositar dinero.

class CuentaBancaria{
    private saldo: number;

    constructor(saldo:number){
        this.saldo = saldo;
    }

    public consultarSaldo(){
        return this.saldo;
    }

    public depositar(monto: number){
        if(monto > 0){
            this.saldo = this.saldo + monto;
        } else {
            console.log(`El monto a depositar debe ser mayor a 0`);
        }
    }
}

const cuenta = new CuentaBancaria(1000);
console.log("Saldo inicial:", cuenta.consultarSaldo()); // 1000

cuenta.depositar(500);
console.log("Saldo después del depósito:", cuenta.consultarSaldo()); // 1500

cuenta.depositar(-200); // Mensaje de error