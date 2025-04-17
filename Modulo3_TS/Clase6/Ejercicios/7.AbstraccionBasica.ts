// Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real
// Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método
// preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción
// para que ambas bebidas oculten su lógica de preparación interna pero
// expongan un comportamiento común.
interface Bebida{
    sabor: string;
    preparar() : void;
}

class Cafe implements Bebida{
    sabor: string;
    constructor(sabor: string){
        this.sabor = sabor
    }
    preparar(): void {
        console.log(`Se está preparando el café ${this.sabor}`);
        this.molerGranos();
        this.calentarAgua();
        this.servir();
    }

    private molerGranos(): void{
        console.log("Moliendo los granos de café"); 
    }
    private calentarAgua(): void{
        console.log("Calentando el agua...");
    }
    private servir(): void{
        console.log("Sirviendo el café");
    }
}
class Te implements Bebida{
    sabor: string;

    constructor(sabor: string){
        this.sabor = sabor;
    }

    preparar(): void {
        console.log(`Se está preparando el té sabor ${this.sabor}`);
        this.hervirAgua();
        this.ponerFiltranteSabor();
        this.servir();
    }
    private hervirAgua():void{
        console.log("Hirviendo agua");
    }
    private ponerFiltranteSabor(): void{
        console.log(`Poniendo el filtrante de sabor ${this.sabor}`);
    }
    private servir():void{
        console.log('Sirviendo te');
        
    }
}

const mocka =  new Cafe('Mocka');
const teNegro = new Te('Manzanilla');
console.log('-----------------------------------------------');
mocka.preparar();
console.log('-----------------------------------------------');
teNegro.preparar();


//OTRA MANERA DE HACERLO

// Interfaz Bebida que define el comportamiento común
interface Bebida2 {
    sabor: string;
    preparar(): void;
}

// Clase base abstracta que implementa la interfaz Bebida
abstract class BebidaBase implements Bebida{

    constructor(public sabor: string){}

    preparar(): void {
        console.log(`Se está preparando la bebida de sabor ${this.sabor}`);
        this.prepararBebida();
    }

    //Metodo abstracto que define el comportamiento especifico de la preparacion
    abstract prepararBebida(): void;
}

//Clase Cafe que heredad de BebidaBase
class Cafe2 extends BebidaBase{
    //Metodo abstracto para preparar el cafe
    prepararBebida() {
        this.molerGranos();
        this.calentarAgua();
        this.servir();
    }
    private molerGranos(): void{
        console.log("Moliendo los granos de café"); 
    }
    private calentarAgua(): void{
        console.log(`Calentando el agua... para el cafe ${this.sabor}`);
    }
    private servir(): void{
        console.log("Sirviendo el café");
    }
}

// Clase Te que hereda de BebidaBase
class Te2 extends BebidaBase {
    // Implementación del método abstracto para preparar el té
    prepararBebida(): void {
        this.hervirAgua();
        this.ponerFiltranteSabor();
        this.servir();
    }

    private hervirAgua(): void {
        console.log("Hirviendo agua");
    }

    private ponerFiltranteSabor(): void {
        console.log(`Poniendo el filtrante de sabor ${this.sabor}`);
    }

    private servir(): void {
        console.log("Sirviendo té");
    }
}

//Creacion de instancias y preparacion
const capuchino = new Cafe2('Capuchino');
const verde = new Te2('Te verde');

console.log('-----------------------------------------------');
capuchino.preparar();
console.log('-----------------------------------------------');
verde.preparar();