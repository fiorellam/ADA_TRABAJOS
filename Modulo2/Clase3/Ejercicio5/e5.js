// Actividad 5: Registro de contactos
// Consigna: Crea un programa que permita registrar contactos con
// nombre, teléfono y correo electrónico. El programa debe permitirte:
// 1. Agregar un contacto: Registrar un nuevo contacto.
// 2. Listar los contactos: Mostrar todos los contactos registrados.
// 3. Eliminar un contacto: Eliminar un contacto de la lista.
// Pistas:
// • Usa un archivo JSON para guardar los contactos.
// • Si el archivo no existe, comienza con un arreglo vacío.
const fs = require('fs');
const filePath = "./contactos.json";

const obtenerContactos = () => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');
    }
    const contenidoFile = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenidoFile);
}

const guardarContactos = (contactos) => {
    fs.writeFileSync(filePath, JSON.stringify(contactos, null, 2))
}

const registrarContacto = (nombre, telefono, correo) => {
    const contactos = obtenerContactos();
    const contacto = {id: contactos.length + 1, nombre, telefono, correo};
    contactos.push(contacto);
    guardarContactos(contactos);
    console.log("Contacto guardado");
}

const listarContactos = () => {
    const contactos = obtenerContactos();
    console.log(contactos);
}

const eliminarContacto = (idContacto) => {
    const contactos = obtenerContactos();
    let index = contactos.findIndex((contact) => contact.id === parseInt(idContacto));
    if(index != -1){
        contactos.splice(index, 1);
        guardarContactos(contactos);
        console.log("Contacto eliminado");
    } else {
        console.log("El contacto no fue encontrado");
    }
}

// registrarContacto("Berni", "64617895645", "b@gmail.com" );
// registrarContacto("Luisa", "64617895645", "l@gmail.com" );
// registrarContacto("Lui", "64617895645", "lll@gmail.com" );
// listarContactos();
// eliminarContacto(2);
// listarContactos();
