// Ejercicio 6: Herencia Múltiple Simulada con Interfaces
// Crea dos interfaces, Volador y Nadador, con métodos volar y nadar,
// respectivamente. Implementa ambas interfaces en una clase Pato. Demuestra
// cómo una clase puede "heredar" múltiples comportamientos usando interfaces.

interface IVolador{
    volar(): void;
}
interface INadador{
    nadar(): void;
}

class Pato implements INadador, IVolador{
    volar(): void {
        console.log('Pato volando');
    }
    nadar(): void {
        console.log('Pato nadando');
    }
}
const patito = new Pato();
patito.nadar();
patito.volar();