// Ejercicio 10: Sistema de Gestión de Biblioteca
// Crea un sistema para gestionar libros y miembros de una biblioteca. Usa una
// clase abstracta Publicacion, clases concretas Libro y Revista, y una clase
// Biblioteca que gestione el préstamo de publicaciones.
abstract class Publicacion{
    protected _titulo: string;
    protected autor: string;
    protected anio: number;
    protected prestado: boolean
    
    constructor(titulo: string, autor: string, anio:number){
        this._titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.prestado = false;
    }
    
    public get titulo(): string {
        return this._titulo;
    }

    abstract mostrarInformacion(): void;
    
    estaPrestado(): boolean {
        return this.prestado;
    }
    
    prestar(): void {
        if(this.estaPrestado()) {
            console.log(`No puede prestarse porque ya se encuentra prestado`);
        } else {
            this.prestado = true;
            console.log(`✅ prestado`);
        }
    }
    
    devolver(): void {
        if(!this.prestado){
            console.log(`No puede ser devuelto ya que se encuentra en la biblioteca`);
        } else{
            this.prestado = false;
            console.log(`✅ Devuelto`);
        }
    }
}

class Libro extends Publicacion{
    private genero: string;

    constructor(titulo: string, autor: string, anio:number, genero: string){
        super(titulo, autor, anio);
        this.genero = genero;
    }

    mostrarInformacion(): void {
        console.log(`Libro: ${this.titulo}, autor: ${this.autor}, anio: ${this.anio}, genero: ${this.genero} disponible: ${this.prestado ? 'No': 'Si'}`);
    }
}

class Revista extends Publicacion{
    private numeroArticulos: number;
    constructor(titulo: string, autor: string, anio:number, numeroArticulos: number){
        super(titulo, autor, anio);
        this.numeroArticulos = numeroArticulos;
    }

    mostrarInformacion(): void {
        console.log(`Revista: ${this.titulo}, autor: ${this.autor}, anio: ${this.anio}, numeroArticulos: ${this.numeroArticulos} disponible: ${this.prestado ? 'No': 'Si'}`);
    }
}

class Biblioteca {
    protected nombre: string;
    private publicaciones: Publicacion [];

    constructor(nombre: string){
        this.nombre = nombre;
    }

    mostrarInformacion(): void{
        console.log(`BIBLIOTECA ${this.nombre.toUpperCase()}`);
        for(let i = 0 ; i < this.publicaciones.length ; i++){
            this.publicaciones[i].mostrarInformacion();
        }
    }

    agregarPublicacion(publicacion: Publicacion){
        this.publicaciones.push(publicacion);
    }

    prestarPublicacion(titulo: string){
        if(this.publicaciones.length > 0){
            const publicacionEncontrada = this.publicaciones.find(publicacion => publicacion.titulo.toLowerCase() === titulo.toLowerCase());
            if(publicacionEncontrada){
                publicacionEncontrada.prestar();
            } else {
                console.log(`La publicacion buscada no puede prestarse, no existe`);
                
            }
        } else {
            console.log(`Aun no existen publicaciones para prestar`);
            
        }

    }







}