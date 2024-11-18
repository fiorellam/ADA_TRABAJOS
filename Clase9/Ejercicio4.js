// Declara una variable nombre y pide al usuario que ingrese su nombre. 
// Verifica si el nombre ingresado es igual a tu nombre.
const prompt = require("prompt-sync")({sigint:true});

const my_name = 'Fiorella';
let user_name = prompt("Ingresa tu nombre ");

if(my_name.toLowerCase() == user_name.toLowerCase()){
    console.log(`Mi nombre ${user_name} y tu nombre ${user_name} son iguales`);
} else{
    console.log(`Los nombres no son iguales`);
}

