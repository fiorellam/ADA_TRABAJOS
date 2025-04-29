// 4. Ejercicio de Aviones
// Crea una clase Avion con propiedades privadas para el modelo, capacidad y
// velocidad. Implementa getters y setters para cada propiedad, asegurándote de
// validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa.
// Nota sobre la inicialización de propiedades
// En la clase Avion, se debe utilizar el operador de afirmación no nula (!) en las
// propiedades _capacidad y _velocidad. Esto se hace para evitar un error de
// TypeScript que indica que estas propiedades no estaban inicializadas en el
// constructor. Este enfoque asegura que las propiedades serán asignadas
// adecuadamente en el constructor mediante el uso de los setters, manteniendo
// así la validación de los valores. Tener esto en cuenta para los demás ejercicios.
class Avion{
    private _modelo:string;
    private _capacidad!: number;
    private _velocidad!: number;

    constructor(modelo: string, capacidad: number, velocidad: number){
        this._modelo = modelo;
        this.capacidad = capacidad;
        this.velocidad = velocidad
    }

    public get modelo() : string{
        return this._modelo;
    }

    public get capacidad(): number{
        return this._capacidad;
    }

    public get velocidad(): number{
        return this._velocidad;
    }

    public set modelo(modelo: string){
        this._modelo = modelo;
    }

    public set capacidad(capacidad: number){
        if(capacidad > 0){
            this._capacidad = capacidad;
        } else {
            console.log(`La capacidad debe ser mayor a 0`);
        }
    }

    public set velocidad(velocidad: number){
        if(velocidad > 0){
            this._velocidad = velocidad;
        } else {
            console.log(`La velocidad debe ser positiva`); 
        }
    }
    public mostrarInfo(): void {
        console.log(`Modelo: ${this._modelo}, Capacidad: ${this._capacidad}, Velocidad: ${this._velocidad} km/h`);
    }
}

const avion1 = new Avion("Boeing 737", -6, -10);
// avion1.mostrarInfo();

// avion1.capacidad = -10; // Inválido
// avion1.velocidad = -500; // Inválido

// avion1.capacidad = 200; // Válido
// avion1.velocidad = 900; // Válido
// avion1.mostrarInfo();