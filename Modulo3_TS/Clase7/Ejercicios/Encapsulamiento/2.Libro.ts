// 2. Ejercicio de Libro
// Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe
// tener propiedades privadas para titulo, autor, anioPublicacion, y disponible.
// Implementa métodos para prestar y devolver el libro, asegurando que solo se
// pueda prestar si está disponible y que se pueda devolver solo si ha sido
// prestado. Imprime un mensaje en caso de que se intente realizar una acción no
// válida.
class Libro{
    private _titulo: string;
    private _autor: string;
    private _anioPublicacion: number;
    private _disponible: boolean;

    constructor(_titulo: string, _autor: string, _anioPublicacion: number){
        this._titulo = _titulo;
        this._autor = _autor;
        this._anioPublicacion = _anioPublicacion;
        this._disponible = true;
    }

    public prestarLibro(): void{
        if(this._disponible){
            this._disponible = !this._disponible;
        } else {
            console.log(`El libro no puede ser prestado, no esta disponible`);
        }
    }

    public devolverLibro(): void{
        if(!this.disponible){
            this._disponible = !this._disponible;
        } else {
            console.log(`El libro no puede ser regresado ya que no ha sido prestado`);
        }
    }

    public get disponible(){
        return this._disponible;
    }

    public obtenerInformacionLibro() :void{
        console.log(`Titulo: ${this._titulo}, disponible ${this._disponible ? 'si' : 'no'}`);
    }

}

const libro1 = new Libro('La Cabana', 'JS', 2000);
libro1.devolverLibro();
libro1.obtenerInformacionLibro();
libro1.prestarLibro();
libro1.obtenerInformacionLibro();

 