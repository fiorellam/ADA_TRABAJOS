// Ejercicio 8: Sistema de Nave Espacial con Gestión de Recursos
// Crea un sistema para gestionar una nave espacial en una misión de recolección
// de recursos en diferentes planetas. Define una clase NaveEspacial con atributos
// como combustible y capacidadDeCarga. Implementa métodos para viajar entre
// planetas, recolectar recursos (oxígeno, minerales, agua), y gestionar el
// combustible. Usa tuplas para representar las coordenadas espaciales de los
// planetas y una interfaz para los tipos de recursos recolectados.
interface Recursos {
    oxigeno:number;
    minerales:number;
    agua: number;
}
interface Planeta{
    nombre: string;
    coordenada: [number, number, number];
    recursos: Recursos;
}
class NaveEspacial{
    protected combustible: number;
    protected capacidadDeCarga: number;
    protected ubicacionActual: [number, number, number];
    protected cargaActual: Recursos;

    constructor(combustible: number, capacidadDeCarga: number){
        this.combustible = combustible;
        this.capacidadDeCarga = capacidadDeCarga;
        this.ubicacionActual = [0,0,0];
        this.cargaActual = { oxigeno: 0, minerales: 0, agua: 0 };
    }

    viajarA(planeta: Planeta){
        const consumo =  this.combustible * 0.5;
        if(this.combustible >= consumo){
            this.combustible -= consumo;
            this.ubicacionActual = planeta.coordenada;
            console.log(`Viajamos al planeta ${planeta.nombre}. Combustible restante: ${this.combustible.toFixed(2)}`);
        } else {
            console.log("No hay suficiente combustible para viajar.");
        }
    }

    recolectarRecurso(planeta: Planeta){
        let totalRecolectado  = this.cargaActual.agua + this.cargaActual.minerales + this.cargaActual.oxigeno;
        let espacioDisponible = this.capacidadDeCarga - totalRecolectado;
        if(this.capacidadDeCarga >= totalRecolectado){
            const oxigenoRecolectado = Math.min(planeta.recursos.oxigeno, espacioDisponible);
            const mineralesRecolectados = Math.min(planeta.recursos.minerales, espacioDisponible - oxigenoRecolectado);
            const aguaRecolectada = Math.min(planeta.recursos.agua, espacioDisponible - oxigenoRecolectado - mineralesRecolectados);

            planeta.recursos.oxigeno -= oxigenoRecolectado;
            planeta.recursos.minerales -= mineralesRecolectados;
            planeta.recursos.agua -= aguaRecolectada;

            this.cargaActual.oxigeno += oxigenoRecolectado;
            this.cargaActual.minerales += mineralesRecolectados;
            this.cargaActual.agua += aguaRecolectada;

            console.log(`Recursos recolectados: Oxigeno${oxigenoRecolectado}, Minerales: ${mineralesRecolectados}, Agua: ${aguaRecolectada}`);
        }
    }
    mostrarEstado(): void {
        console.log(`Estado nave - Combustible: ${this.combustible}, Carga:`, this.cargaActual);
    }

    

}

class Mision{
    private nombreMision: string;
    private nave: NaveEspacial;
    private planeta: Planeta;

    constructor(nombreMision: string, nave:NaveEspacial, planeta: Planeta){
        this.nombreMision = nombreMision;
        this.nave = nave;
        this.planeta = planeta;
    }

    iniciarMision(): void {
        this.nave.viajarA(this.planeta);
        this.nave.recolectarRecurso(this.planeta);

        this.nave.mostrarEstado();
    }
}
const nave1 = new NaveEspacial(100, 200);
const nave2 = new NaveEspacial(80, 100);
const marte : Planeta = { nombre: "Marte", coordenada: [10,20,40], recursos: { oxigeno: 50, minerales: 100, agua: 80 } }
const mision1 = new Mision('Mision Marte', nave1, marte);

mision1.iniciarMision();