// • Ejercicio 3: Clasificación de edades
// Solicita al usuario una edad y usa una función flecha para clasificarla en niño,
// adolescente, adulto o adulto mayor.
const prompt = require("prompt-sync")();

let edad = parseInt(prompt("Ingresa tu edad: "));

const clasificarEdad = age => {
    if(age > 0){
        if(age < 12){
            return `Eres un niño`;
        } else if (age >= 12 && age <= 18){
            return `Eres un adolescente`
        } else if( age >18 && age <= 59){
            return `Eres un adulto`;
        } else {
            return `Eres un adulto mayor`;
        }
    } else {
        return `Tu edad no es valida, estas ingresando una edad negativa`;
    }
}

let clasificacion = clasificarEdad(edad);

console.log(`Por tu edad tu ${clasificacion}`)
