// Ejercicio 5: ¡Despídete de tu perfil!
// Consigna:
// ¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json.
// Verifica que el archivo existe antes de intentar borrarlo.
//  Pista: Usa fs.unlink para eliminar archivos
const fs = require('fs');
const pathFile = './e1perfil.json';

if(fs.existsSync(pathFile)){
    fs.unlink(pathFile, (err) => {
        if(err){
            console.error('Hubo un error al eliminar el perfil', err);
        } else{
            console.log('El perfil ha sido borrado');
        }
    })
} else {
    console.log("El perfil no existe, no puede ser eliminado");
}