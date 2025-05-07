// 5. Banco: Transferencias Programadas

// Crea un sistema para gestionar cuentas bancarias en un banco. Cada cuenta
// debe tener un nombre del propietario, un saldo y un estado (activo o inactivo).
// Implementa las siguientes funciones:
// • Añadir una cuenta.
// • Realizar una transferencia entre cuentas después de un retraso de 8
// segundos utilizando setTimeout().
// • Mostrar todas las cuentas.
class Cuenta{
    private id:number;
    private nombrePropietario:string;
    private saldo: number;
    private activo: boolean;
    constructor(nombrePropietario: string, saldo: number){
        this.id = 0;
        this.nombrePropietario = nombrePropietario;
        if(saldo < 0){
            throw new Error("El saldo debe ser mayor o igual a 0");
        } else {
            this.saldo = saldo;
        }
        this.activo = true;
    }
    public getNombrePropietario(): string{
        return this.nombrePropietario;
    }
    public setNombrePropietario(nombre: string){
        this.nombrePropietario = nombre;
    }
    public getSaldo():number{
        return this.saldo;
    }
    public setSaldo(saldo: number){
        if(saldo < 0){
            console.log(`El saldo debe ser mayor a 0`);
        } else {
            this.saldo = saldo;
        }
    }
    public getActivo():boolean{
        return this.activo;
    }
    public getId(): number{
        return this.id;
    }
    public setId(id: number) {
        this.id = id;
    }

    public depositar(monto: number): void {
        this.saldo += monto;
    }

    public retirar(monto: number): boolean {
        if (this.saldo >= monto) {
            this.saldo -= monto;
            return true;
        }
        return false;
    }

    public mostrarDetalle(): void {
        console.log(`Id: ${this.id} propietario: ${this.nombrePropietario} saldo: ${this.saldo} activo: ${this.activo? 'Activo': 'Inactivo'}`);
    }
}

class Banco{
    private cuentas: Cuenta[];

    constructor(){
        this.cuentas = [];
    }

    anadirCuenta(cuenta: Cuenta){
        cuenta.setId(this.cuentas.length +1);
        this.cuentas.push(cuenta);
    }

    transferencia(origen: Cuenta, destino: Cuenta, monto: number){
        let cuentaOrigenExists = this.cuentas.find(cuenta => origen.getId() === cuenta.getId() && origen.getActivo());
        let cuentaDestinoExists = this.cuentas.find(cuenta => destino.getId() === cuenta.getId() && destino.getActivo());

        if(!cuentaOrigenExists || !cuentaDestinoExists){
            console.log("Una o ambas cuentas no están activas o no existen.");
            return;
        }
        if (monto <= 0) {
            console.log("❌ El monto debe ser mayor a cero.");
            return;
        }
    
        console.log(`⌛ Programando transferencia de $${monto} de ${origen.getNombrePropietario()} a ${destino.getNombrePropietario()} en 8 segundos...`);
        setTimeout(() => {
            if (cuentaOrigenExists.retirar(monto)) {
                cuentaDestinoExists.depositar(monto);
                console.log(`Transferencia completada de $${monto} de ${cuentaOrigenExists.getNombrePropietario()} a ${cuentaDestinoExists.getNombrePropietario()}.`);
            } else {
                console.log(`Transferencia fallida: saldo insuficiente en la cuenta de ${cuentaOrigenExists.getNombrePropietario()}.`);
            }
        }, 8000);
    }

    mostrarCuentas(){
        if(this.cuentas.length > 0){
            this.cuentas.forEach((cuenta) => cuenta.mostrarDetalle());
        }
    }   
}

const bancoSantander = new Banco();
const cuenta1 = new Cuenta('Fiorella', 1500);
const cuenta2 = new Cuenta('Luis', 500);
const cuenta3 = new Cuenta('Jesus', 500);
bancoSantander.anadirCuenta(cuenta1);
bancoSantander.anadirCuenta(cuenta2);
bancoSantander.anadirCuenta(cuenta3);
bancoSantander.mostrarCuentas();
bancoSantander.transferencia(cuenta1, cuenta2, 300);

setTimeout(() => {
    console.log("📋 Cuentas después de la transferencia:");
    bancoSantander.mostrarCuentas();
}, 10000);

