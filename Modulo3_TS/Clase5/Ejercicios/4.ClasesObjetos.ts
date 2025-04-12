// Ejercicio 4: Clases y Objetos
// 1. Define una clase llamada Animal con propiedades nombre y tipo, y un
// método hacerSonido().
// 2. Crea una instancia de la clase Animal y llama al método.

class Animal {
    public nombre: string;
    public tipo: string;

    //constructor
    constructor(nombre: string, tipo: string){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    //metodo
    public hacerSonido(sonido: string): void{
        console.log(`${this.nombre} hace este sonido: ${sonido}`); 
    }
}

let perro = new Animal("Guera", "Perro");
perro.hacerSonido("Woof");
