// Ejercicio 7: Encuentra tu meta perdida
// Consigna:
// Revisa tu lista de metas en el archivo metas.json. Busca si una meta
// específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala.
//  Pista: Usa fs.readFile para leer el archivo y un método como find para
// buscar en la lista.
const fs = require('fs');
const filePath = './e6metas.json';

const metaEncontrar = 'Viajar a Japon'

if(fs.existsSync(filePath)){
    fs.readFile(filePath, 'utf-8', (err, data) => {
        const metas = JSON.parse(data);
        let meta = metas.find(meta => meta.nombre === metaEncontrar)
        if(meta != null){
            console.log(`La meta ${metaEncontrar} ha sido encontrada`);
        } else {
            metas.push({nombre: metaEncontrar, estado: 'pendiente'});
            fs.writeFile(filePath, JSON.stringify(metas, null, 2), (err) => {
                if(err){
                    console.error('Hay un error', err);
                } else {
                    console.log(`La meta ${metaEncontrar} se ha agregado`)
                }
            })
        }
    })
} else {
    console.log(`El archivo ${filePath} no existe`);
}