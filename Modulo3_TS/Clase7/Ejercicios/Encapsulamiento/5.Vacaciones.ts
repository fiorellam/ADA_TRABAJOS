// 5. Ejercicio de Vacaciones
// Desarrolla una clase Vacacion que tenga propiedades privadas para destino,
// duracion (en días) y presupuesto. Implementa getters y setters, asegurándote de
// que duracion no sea menor que 1 y presupuesto sea mayor que 0.
class Vacacion{
    private _destino: string;
    private _duracion!: number;
    private _presupuesto!: number;
    public get destino(): string {
        return this._destino;
    }
    constructor(destino: string, duracion: number, presupuesto: number){
        this._destino = destino;
        this.duracion = duracion;
        this.presupuesto = presupuesto; 
    }
    public set destino(destino: string) {
        this._destino = destino;
    }
    public get duracion(): number {
        return this._duracion;
    }
    public set duracion(duracion: number) {
        if(duracion > 0){
            this._duracion = duracion;
        } else {
            console.log(`La duracion debe ser mayor a 0`); 
        }
    }
    public get presupuesto(): number {
        return this._presupuesto;
    }
    public set presupuesto(presupuesto: number) {
        if(presupuesto > 0){
            this._presupuesto = presupuesto;
        } else{
            console.log(`El presupuesto debe ser mayor a 0`);
        }
    }
    public mostrarInfo(): void {
        console.log(`Destino: ${this._destino}, Duración: ${this._duracion} días, Presupuesto: $${this._presupuesto}`);
    }
}


const viaje1 = new Vacacion("París", 5, 1500);
viaje1.mostrarInfo();

viaje1.duracion = 0;         //Inválido
viaje1.presupuesto = -500;   //Inválido

viaje1.duracion = 7;         //Válido
viaje1.presupuesto = 2000;   //Válido
viaje1.mostrarInfo();