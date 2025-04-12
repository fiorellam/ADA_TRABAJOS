// Para realizarlos deberán investigar un poco más. Por ejemplo,
// el concepto de super()
// Ejercicio 8: Integramos contenidos - Animales
// 1. Crea un pequeño sistema de gestión de Animales que incluya las clases
// Animal, Mascota, y MascotaExotica.
// o La clase Animal debe tener propiedades como nombre y tipo.
// o La clase Mascota debe extender Animal e incluir una propiedad para
// dueño.
// o La clase MascotaExotica debe extender Animal e incluir una
// propiedad para habitat.
// 2. Implementa métodos para mostrar información sobre cada tipo de animal
// y agrega ejemplos de instanciación.
class Animal{
    public nombre: string;
    public tipo: string;

    constructor(nombre: string, tipo: string){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    public descripcionAnimal(): void {
        console.log(`\nPresentando animal, nombre : ${this.nombre}, de tipo ${this.tipo}`);
    }
}
class Mascota extends Animal{
    public dueno: string;
    
    constructor(nombre: string, tipo: string, dueno: string ){
        super(nombre, tipo);
        this.dueno = dueno;
    }
    
    public descripcionAnimal(): void {
        // super.descripcionAnimal();
        console.log(`\nPresentando Mascota con dueno: ${this.dueno}`);  
    }
}
class MascotaExotica extends Animal{
    public habitat: string;
    
    constructor(nombre: string, tipo: string, habitat:string){
        super(nombre, tipo);
        this.habitat = habitat;
    }
    
    public descripcionAnimal(): void {
        // super.descripcionAnimal();
        console.log(`\nPresentando Mascota exotica con habitat: ${this.habitat}`);  
    }
}

const animalVaca = new Animal('Vaca', 'Mamifero');
animalVaca.descripcionAnimal();

const perroMascota = new Mascota("Maia", "Perro", "Patricia");
perroMascota.descripcionAnimal();

const serpienteExotica = new MascotaExotica("Serpiente Cascabel", 'Reptil', 'Terrestre');
serpienteExotica.descripcionAnimal();