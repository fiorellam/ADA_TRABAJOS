// 1. Ejercicio de Coche
// Diseña una clase Coche que represente un vehículo. Esta clase debe tener
// propiedades privadas para marca, modelo, año, y kilometraje. Implementa
// métodos para encender el coche y realizar un viaje, que incrementen el
// kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se
// inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta
// establecer un año o kilometraje no válido, imprime un mensaje indicando el
// error.

class Coche{
    private _marca: string;
    private _modelo: string;
    private _anio:number;
    private _kilometraje: number;

    constructor(_marca: string, _modelo: string){
        this._marca = _marca;
        this._modelo = _modelo;
        this._anio = 0;
        this._kilometraje = 0;
    }

    public encenderCoche(): void{
        console.log(`El carro ha sido encendido`);
    }

    public realizarViaje(): void{
        this._kilometraje++;
        console.log(`Nuevo kilometraje: ${this._kilometraje}`);
        
    }

    public set anio(anio: number){
        if(anio >= 1886){
            this._anio = anio;
        } else {
            console.log(`El año no debe ser menor que 1886`);
        }
    }

    public set kilometraje(kilometraje: number){
        if(kilometraje < 0){
            console.log(`El kilometraje no debe ser menor a 0`);
        } else {
            this._kilometraje = kilometraje;
        }
    }
}

const kicks = new Coche('Nissan', 'Kicks');
kicks.anio = 2025;
kicks.kilometraje = 0;
kicks.encenderCoche();
kicks.realizarViaje();


