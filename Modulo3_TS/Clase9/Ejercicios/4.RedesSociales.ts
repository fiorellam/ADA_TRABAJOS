// 4. Redes Sociales: Notificaciones de Amigos

// Implementa un sistema de gestión de amigos en una red social. Cada amigo
// debe tener un nombre y un estado (en línea o fuera de línea). Utiliza un
// setInterval() para verificar el estado de los amigos cada 5 segundos y enviar una
// notificación si un amigo se pone en línea.

class Amigo{
    private nombre: string;
    private enLinea: boolean; 
    private estadoAnterior: boolean;
    
    constructor(nombre:string, enLinea: boolean){
        this.nombre = nombre;
        this.enLinea = enLinea;
        this.estadoAnterior = enLinea;
    }
    
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(value: string) {
        this.nombre = value;
    }
    public getEnLinea(): boolean {
        return this.enLinea;
    }
    public setEnLinea(value: boolean) {
        this.enLinea = value;
    }
    public getEstadoAnterior(){
        return this.estadoAnterior;
    }
    public setEstadoAnterior(estadoNuevo: boolean){
        this.estadoAnterior = estadoNuevo;
    }

    public detalles(){
        console.log(`Nombre: ${this.nombre} estado: ${this.enLinea ? 'En Linea': 'Fuera de linea'}`);
    }
}

class RedSocial{
    private amigos: Amigo[];

    constructor(){
        this.amigos = [];
    }

    agregarAmigo(amigo: Amigo): void {
        this.amigos.push(amigo);
    }

    verificarEstados(): void{
        this.amigos.forEach((amigo) => {
            if(amigo.getEnLinea() != amigo.getEstadoAnterior()){
                if(amigo.getEnLinea()){
                    console.log(`🔔 Notificación: ${amigo.getNombre()} se ha conectado.`);
                }else {
                    console.log(`🔕 Notificación: ${amigo.getNombre()} se ha desconectado.`);
                }
            }
            amigo.setEstadoAnterior(amigo.getEnLinea());
        })
    }

    public iniciarVerificacion(): void {
        setInterval(() => {
            this.verificarEstados();
        }, 5000);
    }
}
const redSocial = new RedSocial();
const amigo1 = new Amigo('Luis', false);
const amigo2 = new Amigo('Renata', true);

redSocial.agregarAmigo(amigo1);
redSocial.agregarAmigo(amigo2);
redSocial.iniciarVerificacion();

let random = false;
setInterval(() => {
    amigo1.setEnLinea(random);
    amigo2.setEnLinea(!random);
}, 3000);
