// Ejercicio 7: Herencia y Polimorfismo con Clases Abstractas y Métodos
// Sobrecargados
// Crea una clase abstracta InstrumentoMusical con un método tocar. Crea dos
// clases derivadas Guitarra y Piano, que sobrescriban este método para tocar el
// instrumento de manera diferente. Además, agrega una sobrecarga del método
// tocar en la clase base para permitir tocar con o sin acompañamiento
abstract class InstrumentoMusical{
    //metodo abstracto
    abstract tocar():void
    abstract tocar(conAcompanamiento: boolean): void
}

class Guitarra extends InstrumentoMusical{
    //sobrescritura del metodo tocar
    tocar(): void;
    tocar(conAcompanamiento: boolean): void;
    tocar(conAcompanamiento?: boolean): void {
        if(conAcompanamiento){
            console.log("Tocando la guitarra con acompanamiento");
        } else {
            console.log("Tocando la guitarra sin acompanamiento")
        }
    }
}
class Piano extends InstrumentoMusical{
    //sobreescritura del metodo tocar
    tocar(): void;
    tocar(conAcompanamiento: boolean): void;
    tocar(conAcompanamiento?: boolean): void {
        if(conAcompanamiento){
            console.log("Tocando el piano con acompanamiento");
        } else {
            console.log("Tocando el piano sin acompanamiento")
        }
    }
}

//prueba
const guitarra = new Guitarra();
guitarra.tocar(); //tocando la guitarra
guitarra.tocar(true);