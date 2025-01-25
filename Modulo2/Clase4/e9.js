// Ejercicio 9: Filtra tus metas completas
// Consigna:
// Supongamos que cada meta tiene un estado: “completa” o “pendiente”.
// Filtra las metas que ya completaste y muéstralas en la consola.
//  Pista: Modifica las metas para que sean objetos con un atributo
// estado. Usa el método filter para obtener las completas.
const fs = require('fs');
const filePath = './e6metas.json';

if(fs.existsSync(filePath)){
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err){
            console.error('No se pudo leer el archivo', err);
        } else {
            let metas = JSON.parse(data);
            if(metas.length > 0){
                let metasCompletadas = metas.filter(meta => meta.estado === 'completa');
                if(metasCompletadas.length > 0){
                    console.log(metasCompletadas);
                }else {
                    console.log("No hay metas completadas");
                }
            } else {
                console.log('No existen metas en el archivo');
            }
        }
    })
}else {
    console.log('El archivo no existe')
}