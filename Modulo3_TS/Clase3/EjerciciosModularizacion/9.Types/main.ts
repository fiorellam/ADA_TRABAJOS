// Exporta el tipo y la función como exportaciones nombradas. En main.ts, importa
// el tipo y la función, crea una persona y muestra su información en la consola.
import {Person, createPerson} from './types';

const usuario1: Person = {
    name: 'Fiore',
    age: 26
}

console.log(createPerson(usuario1.name, usuario1.age));