// Ejercicio 4: Comparación - Clases Abstractas vs Interfaces

// Crea una interfaz PagoOnline con un método procesarPago().
// Crea una clase abstracta Pago con un método concreto validarMonto() y un
// método abstracto completarPago().
// Implementa ambas estructuras en una clase concreta PagoConTarjeta.
interface IPagoOnline{
    procesarPago(): void;
}

abstract class Pago{
    protected monto: number;

    constructor(monto: number){
        this.monto = monto;
    }
    validarMonto(): boolean{
        if(this.monto > 0){
            console.log(`Monto valido ${this.monto}`);
            return true;
        } else{
            console.log(`Monto no valido ${this.monto}`);  
            return false;
        }
    }
    abstract completarPago(): void;
}

class PagoConTarjeta extends Pago implements IPagoOnline{
    private numeroTarjeta: string;

    constructor(monto: number, numeroTarjeta: string){
        super(monto);
        this.numeroTarjeta = numeroTarjeta;
    }

    completarPago(): void {
        console.log(`Completando pago con tarjeta con terminacion ${this.numeroTarjeta.slice(6, this.numeroTarjeta.length)}`);
    }

    procesarPago(): void {
        if(this.validarMonto()){
            this.completarPago();
        } else {
            console.log('No se pudo completar el pago');
        }
    }
}

const pago = new PagoConTarjeta(500, '5578985222');
pago.procesarPago();