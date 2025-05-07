// Ejercicio 9: Implementación de Pac-Man con Herencia y Polimorfismo
// Crea un sistema que represente el juego Pac-Man utilizando clases. Define una
// clase Personaje que sirva como clase base para PacMan y Fantasma. Implementa
// métodos para moverse por el mapa y realizar acciones. Define una interfaz
// EntidadMovible que contenga el método moverse. Usa herencia para que PacMan y 
// los fantasmas compartan el comportamiento de moverse y polimorfismo
// para que cada personaje pueda implementar su propio comportamiento de
// movimiento.
interface EntidadMovible{
    moverse(): void;
}
class Personaje {
    nombre: string;
    posicion: [number, number];

    constructor(nombre: string, posicion: [number, number]){
        this.nombre = nombre;
        this.posicion = posicion;
    }

    mostrarPosicion(){
        console.log(`${this.nombre} se encuentra en la posicion: (${this.posicion[0]}, ${this.posicion[1]})`);
    }
}

class PacMan extends Personaje implements EntidadMovible{

    constructor(nombre: string, posicion: [number, number]){
        super(nombre, posicion);
    }
    moverse(): void {
        this.posicion[0] += 1; // se mueve hacia la derecha
        console.log(`${this.nombre} (Pac-Man) se mueve a la derecha.`);
        this.mostrarPosicion();
    }

}

class Fantasma extends Personaje implements EntidadMovible{

    constructor(nombre: string, posicion: [number, number]){
        super(nombre, posicion);
    }
    moverse(): void {
        this.posicion[1] -= 1; // se mueve hacia arriba
        console.log(`${this.nombre} (Pac-Man) se mueve hacia arriba`);
        this.mostrarPosicion();
    }
}

const pacman = new PacMan("Pac-Man", [0, 0]);
const fantasma = new Fantasma("Blinky", [5, 5]);

pacman.moverse();     // derecha
fantasma.moverse();   // arriba