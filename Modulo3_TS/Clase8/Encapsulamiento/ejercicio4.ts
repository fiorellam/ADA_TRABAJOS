// 10. Ejercicio de Taller de Reparaciones
// Diseña una clase Taller que tenga propiedades privadas para nombre, direccion,
// servicios (un array de objetos con nombreServicio, precio, y descripcion), y
// calificaciones (un array para almacenar las calificaciones de los clientes).
// Implementa métodos para agregar servicios, eliminar servicios, listar los
// servicios disponibles, agregar calificaciones y calcular el promedio de
// calificaciones. Si se intenta agregar un servicio con un precio negativo, imprime
// un mensaje informativo. También imprime un mensaje si se intenta agregar una
// calificación que no está entre 1 y 5.
interface Servicio{
    nombreServicio: string;
    precio: number;
    descripcion: string;
}
class Taller{
    private nombre: string; 
    private direccion: string;
    private servicios: Servicio [];
    private calificaciones: number [];

    constructor(nombre: string, direccion: string){
        this.nombre = nombre;
        this.direccion = direccion;
        this.servicios = [];
        this.calificaciones = [];
    }

    //Si se intenta agregar un servicio con precio negativo, se debe imprimir un mensaje
    agregarServicio(servicio: Servicio){
        if(servicio.precio < 0){
            console.log(`El precio del servicio debe ser mayor a 0`);
        } else {
            this.servicios.push(servicio);
            console.log(`El servicio ${servicio.nombreServicio} ha sido agregado`);
        }
    }

    eliminarServicio(servicioNombre: string){
        if(this.servicios.length > 0){
            let index = this.servicios.findIndex((servicio) => servicio.nombreServicio.toLowerCase() === servicioNombre.toLowerCase());
            if(index != -1){
                this.servicios.splice(index, 1);
                console.log(`Se eliminó el servicio ${servicioNombre}`);
            } else {
                console.log(`El servicio que se desea eliminar, no fue encontrado`);
            }
        } else {
            console.log(`Aun no existen servicios`);
        }
    }

    listarServicios(){
        if(this.servicios.length > 0){
            console.log(`\n-------------------------------------SERVICIOS-----------------------------------`);
            for(let i = 0; i < this.servicios.length; i++){
                console.log(`1. ${this.servicios[i].nombreServicio} precio: ${this.servicios[i].precio}`);
            }
            console.log(`---------------------------------------------------------------------------------\n`);
        } else {
            console.log('Aun no se han dado de alta servicios');
        }
    }
    //Imprimir mensaje si se quiere agregar una calificacion que no este entre 1 y 5
    agregarCalificacion(calificacion:number){
        if(calificacion >= 1 && calificacion <= 5){
            this.calificaciones.push(calificacion);
            console.log('La calificacion ha sido agregada');
        } else {
            console.log(`La calificacion debe estar entre 1 y 5`);
        }
    }

    calcularPromedioCalificaciones(){
        if(this.calificaciones.length > 0){
            let promedio = 0;
            let suma = 0;
            for(let i = 0 ; i < this.calificaciones.length; i++){
                suma += this.calificaciones[i];
            }
            promedio = suma / this.calificaciones.length;
            console.log(`El promedio de las calificaciones es ${promedio}`);
            
        } else {
            console.log('Aun no existen calificaciones');
        }
    }
}

const taller1 = new Taller('Taller Ensennada', 'Calle Obrera');
taller1.agregarServicio({nombreServicio: 'Cambio de Aceite', precio: 500, descripcion: 'Cambio de aceite, incluyendo la revisión'});
taller1.agregarServicio({nombreServicio: 'Cambio de Balatas', precio: 300, descripcion: 'Cambio de balatas'});

taller1.listarServicios();

console.log(`\n----------------------------AGREGANDO CALIFICACIONES----------------------------`);

taller1.agregarCalificacion(4);
taller1.agregarCalificacion(6);
taller1.agregarCalificacion(5);
taller1.agregarCalificacion(0);
console.log(`--------------------------------------------------------------------------------\n`);

taller1.calcularPromedioCalificaciones();

taller1.eliminarServicio('Cambio de Aceite');
taller1.listarServicios();

