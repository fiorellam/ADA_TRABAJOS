// Ejercicio 1: ¡Crea tu perfil digital!
// Consigna:
// Imagina que acabas de unirte a una red social donde puedes crear tu perfil digital básico. Tu misión es:
// 1. Crear un archivo llamado perfil.json.
// 2. Dentro de este archivo, guarda información sobre ti: nombre, edad y tu ciudad favorita.
// 3. Usa el módulo fs para escribir este archivo desde Node.js.
//  Pista: Utiliza JSON.stringify para convertir tu información en un formato que pueda guardarse en el archivo.

//Importamos el modulo
const fs = require('fs');
const pathFile = './e1perfil.json';

//Creamos un objeto que represente nuestro perfil
const perfil = {
    nombre: 'Fiore',
    edad: 26,
    ciudadFavorita: 'Ensenada'
}

//convertimos el objeto en un formato json y escribimos el archivo
fs.writeFile(pathFile, JSON.stringify(perfil, null, 2), (err) => {
    if(err){
        console.error("Hubo un error al crear tu perfil: ", err)
    } else {
        console.log("Perfil creado exitosamente, Revisa el acrhivo perfil.json");
    }
})
