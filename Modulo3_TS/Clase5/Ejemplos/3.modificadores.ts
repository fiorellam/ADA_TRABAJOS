class Animal{
    //propiedades
    public nombre: string;
    private tipoAlimento: string;
    protected especie: string;

    //constructor
    constructor(nombre:string, tipoAlimento: string, especie: string){
        this.nombre = nombre;
        this.tipoAlimento = tipoAlimento;
        this.especie = especie;
    }

    //metodo publico: accesible desde cualquier parte
    public describirAnimal(): void{
        console.log(`Este animal es ${this.nombre}, come: ${this.tipoAlimento} y es de la especie ${this.especie}`);
    }

    private mostrarTipoAlimento(): void{
        console.log(`${this.nombre} se alimenta con ${this.tipoAlimento}`);   
    }

    protected sonidoAnimal(): void{
        console.log(`${this.nombre} hace un sonido`);   
    }
}

//crear la instancia
const miAnimal = new Animal('Gato', 'Coquito', 'felino');
miAnimal.describirAnimal();
// miAnimal.mostrarTipoAlimento();
// miAnimal.sonidoAnimal();