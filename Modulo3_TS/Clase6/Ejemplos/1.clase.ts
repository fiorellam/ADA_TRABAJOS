//Clase base
class Animal{
    name: string;

    //constructor:inicializa la propiedad name
    constructor(name:string){
        this.name = name;
    }

    //metodo que imprime un sonido generico de animal
    makeSound(): void{
        console.log(`${this.name} hace un sonido`);
        
    }
}

//clase derivada - clase hija
class Dog extends Animal{
    breed: string;

    constructor(name: string, breed: string){
        super(name); //Llama al constructor de la clase base animal para inicializar 'name'
        this.breed = breed; //inicializamos la propiedad breed
    }

    //sobreescritura del metodo makeSound
    makeSound(): void {
        console.log(`${this.name} ladra`); //cambia el sonido especifico para los perros
    }

    //nuevo metodo especifico de la subclase Dog
    fetch():void{
        console.log(`${this.name} esta buscando la pelota`); //el perro realiza la accion de buscar
    }
}

//Instanciar objetos de la clase base y derivada
const animalGenerico = new Animal('Animal') //creacion de un objeto de la clase base
animalGenerico.makeSound();

const myDog = new Dog('Blaki', 'Caniche'); //creacion de un objeto de la clase hija
myDog.makeSound();
myDog.fetch();