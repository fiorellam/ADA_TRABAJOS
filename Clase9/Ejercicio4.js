// Declara una variable nombre y pide al usuario que ingrese su nombre. 
// Verifica si el nombre ingresado es igual a tu nombre.
const prompt = require("prompt-sync")({sigint:true});

const my_name = 'Fiorella';
let user_name = prompt("Ingresa tu nombre ");

//Convierto todos los caracteres a minisculas, para no tener problemas si el nombre esta con mayusculas o minusculas
let my_name_minusculas = my_name.toLocaleLowerCase();
let user_name_minusculas = user_name.toLocaleLowerCase();

if(my_name_minusculas == user_name_minusculas){
    console.log(`Mi nombre ${user_name} y tu nombre son iguales`);
} else{
    console.log(`Los nombres no son iguales`);
}

