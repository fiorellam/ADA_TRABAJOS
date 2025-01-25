// Ejercicio 8: Cuenta tus metas
// Consigna:
// ¿Sabes cuántas metas has establecido? Escribe un programa que lea tu
// archivo metas.json y cuente cuántas metas tienes actualmente.
//  Pista: Usa length para obtener la cantidad de elementos en la lista.
const fs = require('fs');
const filePath = './e6metas.json';

if(fs.existsSync(filePath)){
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err){
            console.log('Error al leer el archivo', err);
        } else {
            const metas = JSON.parse(data);
            console.log('El total de metas es de : ', metas.length);
        }
    })
} else{
    console.log(`El archivo ${filePath} no existe`)
}