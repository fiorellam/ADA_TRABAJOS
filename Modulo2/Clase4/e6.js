// Ejercicio 6: Tu lista de metas
// Consigna:
// Es momento de planear tus metas. Crea un archivo llamado metas.json
// con una lista vacía al principio. Luego, agrega metas como: “Aprender
// Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo.
//  Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la  lista.

const fs = require('fs');
const filePath = 'e6metas.json';

if(fs.existsSync(filePath)){
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err){
            console.error(err);
        } else {
            let listaMetas = JSON.parse(data);
            // listaMetas = [];
            listaMetas.push({nombre: 'Aprender Node.js', estado: 'pendiente'});
            listaMetas.push({nombre: 'Viajar a Japon', estado: 'pendiente'});
            fs.writeFile(filePath, JSON.stringify(listaMetas, null, 2), (err) => {
                if(err){
                    console.err('No se pudo guardar las metas');
                } else {
                    console.log('Metas guardadas');
                }
            })
        }
    })
} else {
    fs.writeFile(filePath, '[]', (err)=> {
        if (err) {
            console.error("Error al crear archivo:", err);
        } else {
            console.log("Se crea archivo vacio");
        }
    })
}