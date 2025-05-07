// 2. Florería: Envío Programado de Pedidos

// Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe
// contener el nombre del cliente, la cantidad de flores y el tipo de flores.
// Implementa las siguientes funciones:
// • Añadir un pedido.
// • Programar el envío de un pedido utilizando setTimeout() para simular un
// retraso de 5 segundos.
// • Mostrar todos los pedidos pendientes.
class Pedido {
    private nombreCliente:string;
    private cantidadFlores: number;
    private tipoFlores: string[];
    private estado: string;

    constructor(nombreCliente: string, cantidadFlores: number, tipoFlores: string[]) {
        this.nombreCliente = nombreCliente;
        this.cantidadFlores = cantidadFlores;
        this.tipoFlores = tipoFlores;
        this.estado = 'Pendiente';
    }

    public getNombreCliente(): string{
        return this.nombreCliente;
    }

    public getCantidadFlores():number{
        return this.cantidadFlores;
    }
    public getTipoFlores(): string[]{
        return this.tipoFlores;
    }

    public getEstado():string{
        return this.estado;
    }
    public setEstado(estado: string): void{
        this.estado = estado;
    }

    public mostrarDetalles(): void{
        let flores = this.tipoFlores.join('- ');
        console.log(`Cliente: ${this.nombreCliente}, #flores: ${this.cantidadFlores}, flores: ${flores} estado: ${this.estado} `);
    }
}

class Floreria{
    private nombre: string;
    private pedidos: Pedido [];

    constructor(nombre: string){
        this.nombre = nombre;
        this.pedidos = [];
    }

    public getNombre(): string{
        return this.nombre;
    }

    agregarPedido(pedido: Pedido):void{
        this.pedidos.push(pedido);
        console.log(`Pedido agregado para ${pedido.getNombreCliente()}`);
    }

    programarPedido(pedido: Pedido):void{
        if(pedido.getEstado() === 'Pendiente'){
            console.log(`El pedido del cliente ${pedido.getNombreCliente()} ha sido programado`)
            setTimeout(() => {
                pedido.setEstado('Finalizado');
                console.log(`✅ Pedido de ${pedido.getNombreCliente()} ha sido enviado.`);
                this.mostrarPedidosPendientes();
            },5000)
        } else {
            console.log('El pedido ya fue finalizado');
        }
    }

    mostrarPedidosPendientes(): void {
        let pedidosPendientes = this.pedidos.filter((pedido) => (pedido.getEstado() === 'Pendiente'));
        if(pedidosPendientes.length > 0){
            console.log(`\n--------------------PEDIDOS PENDIENTES----------------------`);
            pedidosPendientes.forEach(pedido => pedido.mostrarDetalles());
            console.log('-------------------------------------------------------------\n');
        } else {
            console.log(`No hay pedidos pendientes`);
        }
    }
}

let pedido1 = new Pedido('Fiorella Rodriguez', 10, ['Rosas', 'Tulipanes', 'Girasoles']);
let pedido2 = new Pedido('Ximena Lopez', 20, ['Rosas', 'Tulipanes', 'Girasoles']);
let pedido3 = new Pedido('Jose Luis', 20, ['Claveles', 'Margaritas', 'Geranios']);

let floreria1 = new Floreria('Florigrafia');
floreria1.agregarPedido(pedido1);
floreria1.agregarPedido(pedido2);
floreria1.agregarPedido(pedido3);
floreria1.mostrarPedidosPendientes();

floreria1.programarPedido(pedido1);
floreria1.programarPedido(pedido2);
floreria1.programarPedido(pedido3);
floreria1.programarPedido(pedido1);

// floreria1.mostrarPedidosPendientes();