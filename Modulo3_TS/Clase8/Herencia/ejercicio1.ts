// Ejercicio 7: Herencia Múltiple Indirecta y Modificadores de Acceso
// Consigna: Define una clase base Negocio con un método protegido operar().
// Define otra clase Consultoria que herede de Negocio y sobrescriba el método
// operar() para mostrar un mensaje sobre cómo opera el negocio de consultoría.
//Clase base
class Negocio{
    protected operar(): void{
        console.log("El negocio esta operando de forma general");
    }
    public iniciarOperacion():void{
        this.operar();
    }
}
//Metodo publico para llamar al metodo protegido desde fuera
class Consultoria extends Negocio{
    protected operar(): void {
        console.log("El negocio de consultoria opera brindando asesoramiento");
    }
    public iniciarOperacion():void{
        this.operar();
    }
}
//Metodo publico para llamar al metodo protegido desde fuera

const miConsultoria = new Consultoria();
miConsultoria.iniciarOperacion();