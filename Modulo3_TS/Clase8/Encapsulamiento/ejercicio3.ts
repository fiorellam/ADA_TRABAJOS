// 9. Ejercicio de Playlist
// Diseña una clase Playlist que contenga propiedades privadas para nombre y
// canciones (un array de títulos de canciones). Implementa métodos para agregar
// canciones, eliminar canciones y listar todas las canciones en la playlist.
// Asegúrate de que se imprima un mensaje si se intenta agregar una canción
// vacía o eliminar una canción que no existe.
class Playlist {
    private nombre: string;
    private canciones: string [];

    constructor(nombre: string){
        this.nombre = nombre;
        this.canciones = [];
    }

    agregarCancion(cancion: string){
        this.canciones.push(cancion);
    }

    eliminarCancion(nombreCancion: string){
        if(this.listaCancionesVacia()){
            console.log(`La lista de canciones se encuentra vacia`);
        } else {
            let index = this.canciones.findIndex((cancion) => cancion.toLowerCase() === nombreCancion.toLowerCase());
            if(index !== -1){
                this.canciones.splice(index, 1);
                console.log(`Cancion eliminada`);
            } else {
                console.log('No se encontro una cancion como la que buscas');
            }
        }
    }

    listarCanciones(): void{
        if(this.listaCancionesVacia()){
            console.log(`No existen canciones en la playlist`);
        } else {
            console.log('-------------LISTA DE CANCIONES------------');
            
            for(let i = 0; i < this.canciones.length ; i++){
                console.log(`${i+1}.${this.canciones[i]}`);
            }
        }
    }

    private listaCancionesVacia(): boolean{
        return this.canciones.length === 0;
    }
}

const salsaPlaylist = new Playlist('Salsa');
salsaPlaylist.agregarCancion('Yo no se mananaaa');
salsaPlaylist.agregarCancion('Yo no se manana');
salsaPlaylist.agregarCancion('Sayonara');
salsaPlaylist.eliminarCancion('Yo no se mananaaa');
salsaPlaylist.listarCanciones();