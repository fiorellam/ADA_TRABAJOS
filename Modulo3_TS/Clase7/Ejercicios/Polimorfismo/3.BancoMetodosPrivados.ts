// Ejercicio 3: Encapsulamiento con Métodos Privados
// Crea una clase Banco con un saldo inicial privado. El saldo solo puede ser
// modificado a través de un método depositar y otro retirar, los cuales deben
// validar que la cantidad no sea negativa. Implementa métodos públicos para
// consultar el saldo.
class Banco{
    private _saldoInicial:number;

    constructor(saldoInicial: number){
        this._saldoInicial = 0;
        if(saldoInicial < 0){
            console.log("El saldo inicial no puede ser menor a 0");
        }
        this._saldoInicial = saldoInicial;
    }

    public get saldo(): number{
        return this._saldoInicial;
    }
    
    public depositar(cantidad:number): void{
        if(this.validarCantidad(cantidad)){
            this._saldoInicial += cantidad;
            console.log('Cantidad depositada');
        } else {
            console.log('La cantidad a depositar debe ser positiva');
        }
    }

    public retirar(cantidad: number): void{
        if(this.validarCantidad(cantidad)){
            if(cantidad > this._saldoInicial){
                console.log('No se puede retirar ya que la cantidad que se desea retirar es mayor al saldo');
            } else {
                this._saldoInicial -= cantidad
                console.log('Cantidad retirada');
                
            }
        } else {
            console.log("La cantidad a retirar debe ser positiva");
            
        }
    }

    private validarCantidad(cantidad: number): boolean{
        return cantidad > 0;
    }
}

const cuenta = new Banco(300);
cuenta.depositar(500);
cuenta.retirar(100);
console.log(`El total actual de la cuenta es de: ${cuenta.saldo}`);