// Ejercicio 5: Uso de Arrays y Condicionales
// Crea un programa que solicite al usuario ingresar 5 nombres y los
// almacene en un array. Luego, solicita al usuario ingresar un nombre y
// verifica si ese nombre se encuentra en el array. (Pueden desglosar en
// pasos el código si eso les facilita su desarrollo)
const prompt = require("prompt-sync")();
let nombre;
let arrayNombres = [];
let nombreBusqueda;

//En este ciclo para llenar el arreglo
for(let i = 0 ; i < 5; i++){
    //Le solicito al usuario el nombre que quiere guardar en el arreglo
    nombre = prompt(`Ingresa el numero: ${i+1}`);
    //Aqui asigno el nombre en la posicion i del arreglo
    arrayNombres[i] = nombre;
}

//Pregunto al usuario el nombre que desea buscar
nombreBusqueda = prompt("Ingresa el nombre que buscas: ");
//Recorro el arreglo con el ciclo for, en busqueda del nombre que ingresó el usuario
for(let i = 0; i < arrayNombres.length; i++){
    //Si el nombre en esa posicion del arreglo es igual al nombre que busca, hemos encontrado el nombre en el arreglo
    if(arrayNombres[i] == nombreBusqueda){ 
        console.log(`El nombre:  ${nombreBusqueda} ha sido encontrado dentro del arreglo`);
    }
    else{
        console.log("El nombre no fue encontrado");
    }
}
