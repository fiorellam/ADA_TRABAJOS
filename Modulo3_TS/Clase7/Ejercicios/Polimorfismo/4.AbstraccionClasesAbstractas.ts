// Ejercicio 4: Abstracción con Clases Abstractas
// Implementa una clase abstracta DispositivoElectronico con métodos abstractos
// encender y apagar. Crea dos clases concretas Televisor y Radio, que
// sobrescriban estos métodos.
abstract class DispositivoElectronico{
    protected estaEncendido: boolean;

    constructor(){
        this.estaEncendido = false;
    }
    abstract encender(): void;
    abstract apagar(): void;
}
class Televisor extends DispositivoElectronico{
    
    encender(): void {
        if(this.estaEncendido){
            console.log('El televisor ya estaba encendido');
        } else {
            this.estaEncendido = true;
            console.log('El televisor se ha encendido');
        }
        
    }
    apagar(): void {
        if(this.estaEncendido){
            this.estaEncendido = false;
            console.log('El televisor se ha apagado');
        } else {
            console.log('El televisor ya estaba apagado');
        }
    }

}
class Radio extends DispositivoElectronico{
    encender(): void {
        if(!this.estaEncendido){
            this.estaEncendido = true;
            console.log('Se ha encendio la radio');
        } else {
            console.log('Ya estaba prendida la radio');
        }
    }
    apagar(): void {
        if(this.estaEncendido){
            this.estaEncendido = false;
            console.log('Se ha apagado la radio');
        } else {
            console.log('Ya estaba apagada la radio');
        }
    }
}

const tele = new Televisor();
const radio = new Radio();

tele.encender();
tele.apagar();

radio.encender();
radio.apagar();