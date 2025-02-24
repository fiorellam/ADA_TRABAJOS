const fs = require('fs');
const filePath = './data.json';
// • Lee el archivo data.json, modifica el campo age a un nuevo valor, y
// guarda el archivo modificado.

fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err){
        console.log('error', err);
        return
    }
    jsonPerson = JSON.parse(data);
    jsonPerson.age = 80;

    const updatedData = JSON.stringify(jsonPerson, null, 2);
    fs.writeFile(filePath, updatedData, 'utf-8', (err) => {
        if (err) {
            console.error('Error al guardar el archivo:', err);
        } else {
        console.log('El archivo ha sido modificado y guardado correctamente');
        }
    })
})