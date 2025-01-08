// Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El
// programa debe mostrar todos los números pares que se encuentran entre esos
// dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer
// los números entre el inicio y el fin. 
//Si el número inicial es mayor que el final, el
// programa debe mostrar un mensaje indicando que los valores son inválidos.
const prompt = require("prompt-sync")();

let inicio = parseInt(prompt("Ingresa un numero de inicio: "));
let fin = parseInt(prompt("Ingresa un numero de fin: "));

if(inicio < fin){
    for(let i = inicio; i <= fin; i++){
        //Una forma de hacerlo con un if ternario
        i % 2 == 0 ? console.log(i) : '';
        
        //Otra forma con el if normal
        // if(i % 2 == 0){
        //     let numero_par = i;
        //     console.log(numero_par);
        // }  
    }
} else{
    console.log("Los valores son invalidos");
}