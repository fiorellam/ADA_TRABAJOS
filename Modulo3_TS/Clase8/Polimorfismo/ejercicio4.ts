// Ejercicio 10: Polimorfismo y Sobreescritura Compleja con Interacción entre
// Clases
// Crea una clase Cliente que pueda asociarse a una CuentaBancaria. Crea
// diferentes tipos de clientes, como ClienteVIP que tiene beneficios adicionales.
// Cada tipo de cliente puede realizar depósitos y retiros, pero los clientes VIP
// pueden retirar sin comisiones.
export class CuentaBancaria {
    protected saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Depósito de $${cantidad} realizado. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("El depósito debe ser mayor que 0.");
        }
    }

    retirar(cantidad: number): boolean {
        if (cantidad <= 0) {
            console.log("El retiro debe ser mayor que 0.");
            return false;
        } else if (cantidad > this.saldo) {
            console.log("Fondos insuficientes.");
            return false;
        } else {
            this.saldo -= cantidad;
            console.log(`Retiro de $${cantidad} realizado. Nuevo saldo: $${this.saldo}`);
            return true;
        }
    }

    obtenerSaldo(): number {
        return this.saldo;
    }
}

class Cliente {
    protected nombre: string;
    protected cuenta: CuentaBancaria;

    constructor(nombre: string, cuenta: CuentaBancaria) {
        this.nombre = nombre;
        this.cuenta = cuenta;
    }

    depositar(cantidad: number): void {
        console.log(`Cliente ${this.nombre} realiza un depósito:`);
        this.cuenta.depositar(cantidad);
    }

    retirar(cantidad: number): void {
        const comision = 5;
        console.log(`Cliente ${this.nombre} realiza un retiro (con comisión de $${comision}):`);
        const total = cantidad + comision;
        this.cuenta.retirar(total);
    }

    verSaldo(): void {
        console.log(`Saldo de ${this.nombre}: $${this.cuenta.obtenerSaldo()}`);
    }
}

class ClienteVIP extends Cliente {
    constructor(nombre: string, cuenta: CuentaBancaria) {
        super(nombre, cuenta);
    }

    // Sobrescribe el retiro para eliminar comisión
    retirar(cantidad: number): void {
        console.log(`Cliente VIP ${this.nombre} realiza un retiro sin comisión:`);
        this.cuenta.retirar(cantidad);
    }
}

const cuentaNormal = new CuentaBancaria(1000);
const cliente1 = new Cliente("Sofía", cuentaNormal);

cliente1.depositar(200);
cliente1.retirar(100); // cobra comisión
cliente1.verSaldo();

console.log("-------------");

const cuentaVIP = new CuentaBancaria(2000);
const clienteVip = new ClienteVIP("Carlos", cuentaVIP);

clienteVip.depositar(500);
clienteVip.retirar(100); // sin comisión
clienteVip.verSaldo();
