const express = require('express'); //Framework para manejar rutas
const fs = require('fs'); //Modulo nativo para leer y escribir archivos
const path = require('path'); //Modulo para manejar rutas de archivos
const router = express.Router(); //Creamos un enrutador de Express

const dataPath = path.join(__dirname, '../data/contacts.json'); //Ruta al archivo json que almacena los contactos
//Obtener todos los contactos

router.get('/', (req, res) => {
    const contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8')); //Leemos y parseamos el archivo JSON
    res.json(contacts); //Enviamos los contactos como respuesta
});

//Agregar un nuevo contacto
router.post('/', (req, res) => {
    const newContact = req.body; //Obtenemos el nuevo contacto del cuerpo de la solicitud
    const contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8')); //Leemos los contactos existentes
    contacts.push(newContact); //Agregamos el nuevo contacto al array
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2)); //Guardamos el array actualizado en el archivo JSON
    res.json({message: 'Contacto agregado', contact: newContact}); //Respondemos con un mensaje de exito
})

// Actualizar un contacto existente
router.put('/:id', (req, res) => {
    const { id } = req.params; // El id que viene en la URL
    if (!id) {
        return res.status(400).json({ error: 'ID no proporcionado' });
    }
    console.log('Recibiendo PUT para el contacto con ID:', id); 
    const updatedContact = req.body; // Obtenemos los nuevos datos del cuerpo de la solicitud
    let contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8')); // Leemos los contactos existentes
    contacts = contacts.map(contact => (contact.id === id ? updatedContact : contact)); // Aquí comparamos como strings
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2)); // Guardamos los cambios en el archivo JSON.
    res.json({ message: 'Contacto actualizado', contact: updatedContact }); // Respondemos con un mensaje de éxito
});

// Eliminar un contacto
router.delete('/:id', (req, res) => {
    const { id } = req.params; // El id que viene en la URL
    if (!id) {
        return res.status(400).json({ error: 'ID no proporcionado' });
    }
    console.log('Recibiendo DELETE para el contacto con ID:', id);  // Depuración
    let contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8')); // Leemos los contactos existentes.
    contacts = contacts.filter(contact => contact.id !== id); // Aquí también comparamos como strings
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2)); // Guardamos los cambios en el archivo JSON.
    res.json({ message: 'Contacto eliminado' }); // Respondemos con un mensaje de éxito
});

module.exports = router; //Exportamos el enrutador para usarlo en 'index.js'