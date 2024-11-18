// Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. 
// Determina y muestra si el triángulo es equilátero, isósceles o 
// escaleno. (Investiga sobre los triángulos para determinar la formula)
const prompt = require("prompt-sync")({sigint:true});

let length1 = parseFloat(prompt("Ingresa una longitud: "));
let length2 = parseFloat(prompt("Ingresa una longitud: "));
let length3 = parseFloat(prompt("Ingresa una longitud: "));

if(length1 == length2 && length1 == length3){
    console.log('Las medidas que ingresaste son de un triangulo equilatero');    
} else if ((length1 == length2 || length1 == length3) || (length2 == length3)){
    console.log('El triangulo es isoceles');
} else if ((length1 != length2) && (length1 != length3) && (length3 != length2)){
    console.log("El triangulo es escaleno");
}