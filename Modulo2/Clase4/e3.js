// Ejercicio 3: ¡Actualiza tu estilo!
// Consigna:
// ¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar
// tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios
// en el archivo perfil.json.  Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a escribirlo.
const fs = require('fs');
const pathFile = './e1perfil.json';

fs.readFile(pathFile, 'utf-8', function(err, data){
    if(err){
        console.error("Hubo un error", err);
    } else {
        const profile = JSON.parse(data);

        profile.hobby = "Bailar";

        fs.writeFile(pathFile, JSON.stringify(profile, null, 2), (err) => {
            if(err){
                console.log("No se actualizo el perfil");
            } else {
                console.log("Se actualizo el perfil");
            }
        })
        
    }
})

