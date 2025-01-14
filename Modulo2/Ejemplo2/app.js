const fs = require('fs');

const rutaArchivo = './productos.json';

fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return; //Detiene la ejecucion
    }
    //Convertimos  el contenido del archivo json
    const productos = JSON.parse(data);
    console.log('Productos actuales: ', productos);

    const nuevoProducto = {
        id: productos.length + 1,
        nombre: 'Webcam',
        precio: 40
    }

    //Agregamos el nuevo producto
    productos.push(nuevoProducto);
    console.log('Productos actualizados: ', productos);

    const contenidoActualizado = JSON.stringify(productos, null, 2);

    //Escribimos el nuevo contenido en el archivo json y mmomstramos error por consola
    fs.writeFile(rutaArchivo, contenidoActualizado, (err)=>{
        if(err){
            console.error("Error al escribir en el archivo: ", err);
            return;
        }else {
            console.log("Archivo actualizado correctamente");
        }
    })

})