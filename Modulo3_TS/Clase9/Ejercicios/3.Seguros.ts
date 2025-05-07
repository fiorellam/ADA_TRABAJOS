// 3. Compañía de Seguros: Renovación Automática de Pólizas

// Desarrolla un sistema que gestione las pólizas de seguros de una compañía.
// Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y
// una fecha de renovación. Implementa las siguientes funciones:
// • Añadir una póliza.
// • Programar la renovación de la póliza utilizando setTimeout().
// • Mostrar todas las pólizas activas.
class Poliza{
    private id: number;
    private nombreCliente: string;
    private montoAsegurado: number;
    private fechaRenovacion: Date;
    private activa: boolean;
    
    constructor(nombreCliente: string, monto: number, fecha: Date){
        this.id = 0;
        this.activa = true;
        this.nombreCliente = nombreCliente;
        this.montoAsegurado = monto;
        this.fechaRenovacion = fecha;
    }
    public get getId(): number {
        return this.id;
    }
    public set setId(id: number) {
        this.id = id;
    }
    public get getNombreCliente(): string {
        return this.nombreCliente;
    }
    public set setNombreCliente(value: string) {
        this.nombreCliente = value;
    }
    public get getFechaRenovacion(): Date{
        return this.fechaRenovacion;
    }

    public set setFechaRenovacion(fechaNueva: Date){
        this.fechaRenovacion = fechaNueva;
    }

    public get getActiva(){
        return this.activa
    }

    public mostrarDetalle() :void {
        console.log(`Poliza de cliente: ${this.nombreCliente}, monto asegurado: ${this.montoAsegurado}, fecha renovacion: ${this.fechaRenovacion}, activa: ${this.activa}`);  
    }
}

class CompaniaSeguros{
    private nombre: string;
    private polizas: Poliza [];

    constructor(nombre:string){
        this.nombre = nombre;
        this.polizas = [];
    }

    agregarPoliza(poliza: Poliza): void{
        poliza.setId = (this.polizas.length + 1);
        this.polizas.push(poliza);
    }
    programarRenovacion(poliza: Poliza) : void{
        const tiempoHastaRenovacion = poliza.getFechaRenovacion.getTime() - Date.now();
        setTimeout(() => {
            poliza.setFechaRenovacion = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000); // +1 año
            console.log(`Póliza renovada automáticamente (ID: ${poliza.getId})`);
            this.programarRenovacion(poliza); // Reprogramar para la siguiente renovación
          }, tiempoHastaRenovacion);
    }
    mostrarPolizasActivas(): void{
        let polizasActivas = this.polizas.filter(poliza => poliza.getActiva === true);
        if(this.polizas.length > 0){
            if(polizasActivas.length > 0){
                polizasActivas.forEach((poliza) => poliza.mostrarDetalle());
            }
        } else {
            console.log(`No existen polizas todavia`);
        }
    }
}

const atlas = new CompaniaSeguros('Seguros Atlas');


const fechaEn5Seg = new Date(Date.now() + 5000); // 5 segundos desde ahora
const fechaEn10Seg = new Date(Date.now() + 10000); // 10 segundos desde ahora

const poliza1 = new Poliza("Carlos Rivera", 12000, fechaEn5Seg);
const poliza2 = new Poliza("Lucía Torres", 18000, fechaEn10Seg);

atlas.agregarPoliza(poliza1);
atlas.agregarPoliza(poliza2);

// Mostrar pólizas activas luego de 1 segundo
setTimeout(() => {
    atlas.mostrarPolizasActivas();
}, 1000);
