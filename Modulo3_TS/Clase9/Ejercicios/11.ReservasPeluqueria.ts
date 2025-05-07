// Ejercicio 11: Sistema de Reservas en una Peluquería con Herencia y
// Polimorfismo
// Crea un sistema de reservas para una peluquería. Define una clase Servicio con
// atributos comunes como nombre, duracion, y precio. Luego, crea clases
// concretas para diferentes servicios como CorteDeCabello y Manicura.
// Implementa una clase Cliente y una clase Reserva que asocie clientes con
// servicios. Usa polimorfismo para permitir la reserva de cualquier tipo de servicio
// y encapsulamiento para gestionar la disponibilidad de horarios. 

class Servicio{
    nombre: string;
    duracion: number;
    precio: number;

    constructor(nombre: string, duracion: number, precio: number){
        this.nombre = nombre;
        this.duracion = duracion;
        this.precio = precio;
    }
    public getNombre(): string {
        return this.nombre;
    }
}

class CorteDeCabello extends Servicio{
    constructor(){
        super('Corte de cabello', 30, 150);
    }

}
class Manicura extends Servicio{
    constructor(){
        super('Manicura', 45, 400);
    }
}

class Cliente{
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }

    public getNombre(){
        return this.nombre;
    }
    
}

class Reserva{
    horario: string;
    cliente: Cliente;
    servicio: Servicio;

    constructor(cliente: Cliente, servicio: Servicio, horario: string) {
        this.cliente = cliente;
        this.servicio = servicio;
        this.horario = horario;
    }

    public getHorario(): string {
        return this.horario;
    }

    public mostrarDetalle(): void {
        console.log(`📅 ${this.horario} - Cliente: ${this.cliente.getNombre()} - Servicio: ${this.servicio.getNombre()}`);
    }
}

class Peluqueria {
    reservas: Reserva[] = [];
    private horariosDisponibles: string[] = [
        "10:00", "11:00", "12:00", "13:00", "14:00"
    ];

    public reservarServicio(cliente: Cliente, servicio: Servicio, horario: string){
        if(!this.horariosDisponibles.includes(horario)){
            console.log(`Horario ${horario} no disponible.`);
            return;
        }
        let nuevaReserva = new Reserva(cliente, servicio, horario);
        this.reservas.push(nuevaReserva);
        this.horariosDisponibles = this.horariosDisponibles.filter(h => h !== horario);
        console.log(`✅ Reserva confirmada para ${cliente.getNombre()} a las ${horario}`);
    }

    public mostrarReservas(): void {
        console.log("📋 Reservas actuales:");
        this.reservas.forEach(r => r.mostrarDetalle());
    }

    public mostrarHorariosDisponibles(): void {
        console.log("🕒 Horarios disponibles:");
        console.log(this.horariosDisponibles.join(", "));
    }
}