// Ejercicio 2: Do While
// Escribe un programa que solicite al usuario ingresar una contraseña. Si la
// contraseña es incorrecta, debe volver a pedirla hasta que el usuario
// ingrese la correcta. La contraseña correcta es "1234".
const prompt = require("prompt-sync")();
const PASSWORD = '1234';
let password_input;

do {
    password_input = prompt("Ingresa la contraseña correcta: ")
    if(password_input != PASSWORD){
        console.log("La contraseña es incorrecta, vuelve a intentarlo");
    } else{
        console.log("Haz iniciado sesión");
    }
} while( password_input != PASSWORD);

