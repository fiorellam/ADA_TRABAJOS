// 1. Mueblería: Actualización de Precios

// En una mueblería, se requiere un sistema que permita actualizar los precios de
// los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y
// un identificador único. Implementa las siguientes funciones:
// • Añadir un nuevo mueble.
// • Actualizar el precio de un mueble después de 3 segundos utilizando
// setTimeout().
// • Mostrar el inventario de muebles.

class Mueble{
    protected id: number;
    protected nombre: string; 
    protected precio: number;

    constructor(nombre: string, precio: number){
        this.id = 0;
        this.nombre = nombre;
        this.precio = precio;
    }

    detalles(): void{
        console.log(`Mueble: ${this.id} ${this.nombre} precio: ${this.precio}`);
    }

    public getId():number{
        return this.id;
    }

    public setId(id:number): void{
        this.id = id;
    }
    public getNombre(): string{
        return this.nombre;
    }
    public setPrecio(nuevoPrecio: number): void {
        this.precio = nuevoPrecio;
    }

    public getPrecio(): number {
        return this.precio;
    }
}

class Muebleria{
    protected nombre: string;
    protected muebles: Mueble[];

    constructor(nombre: string){
        this.nombre = nombre;
        this.muebles = [];
    }

    agregarMueble(mueble: Mueble): void{
        mueble.setId(this.muebles.length+1);
        this.muebles.push(mueble);
    }

    actualizarPrecio(id: number, precio: number): void{
        if(precio > 0){
            let mueble = this.muebles.find((mueble) => mueble.getId() === id);
            if(mueble){
                setTimeout(() => {
                    mueble.setPrecio(precio);
                    console.log(`Precio del mueble ID ${id} actualizado a $${precio}`);
                },3000)
            } else {
                console.log(`El mueble ingresado no ha sido encontrado`);
            }
        } else {
            console.log(`El precio debe ser mayor a 0`);
        }
    }

    mostrarInventario(): void{
        console.log(`\n-------------------------------INVENTARIO------------------------------------`);
        
        this.muebles.forEach((mueble)=> {
            console.log(`Mueble: ${mueble.getId()} ${mueble.getNombre()} precio: ${mueble.getPrecio()}`);
            
        })
        console.log('-----------------------------------------------------------------------\n');
    }
}

const muebleria = new Muebleria('La Muebleria de Ensenada');
const silla = new Mueble('Silla',250);
muebleria.agregarMueble(silla)

muebleria.actualizarPrecio(silla.getId(), 300);
muebleria.mostrarInventario();