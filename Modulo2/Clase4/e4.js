// Ejercicio 4: ¿Existe tu perfil?
// Consigna:
// Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json
// existe. Si no existe, crea uno nuevo con un perfil básico.
// Pista: Usa fs.existsSync para verificar la existencia del archivo.
const fs = require('fs');
const pathFile = './e1perfil.json';

const profile = {
    nombre: 'Fio',
    edad: 26,
    ciudadFavorita: 'Ensenada'
}

if(!fs.existsSync(pathFile)){
    fs.writeFile(pathFile, JSON.stringify(profile, null, 2), (err) =>{
        if(err){
            console.error('Hubo un error al crear el archivo', err);
        } else {
            console.log('El archivo fue creado');
        }
    })
} else {
    console.log('Ya existe el archivo')
}