const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataPath = path.join(__dirname, '../data/contacts.json'); //La ruta del archivo json

//Rutas

//Obtener todos los contactos
router.get('/', (req, res) => {
    const contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8')); //Leemos y parseamos el archivo json
    res.json(contacts);
})

//Agregar un nuevo contacto
router.post('/', (req, res) => {
    const newContact = req.body //obtenemos el nuevo contacto del cuerpo de la solicitud
    const contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    contacts.push(newContact) //agregamos
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2)); //guardalo en un array
    res.json({message: 'Contacto agendado', contact: newContact});
})

//Actualizar un contacto
router.put('/:id', (req, res) => {
    const {id} = req.params; //obtener el id de los parametros de la url
    const updateContact = req.body //obtenemos los nuevos datos del contacto del cuerpo de la solicitud
    let contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    contacts = contacts.map(contact => (parseInt(contact.id) === parseInt(id) ? updateContact : contact)); //actualizamos el contacto que corresponde
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2)); //guardalo en un array
    res.json({message: 'Contacto actualizado', contact: updateContact});
});

//Eliminar un contacto
router.delete('/:id', (req, res) => {
    const {id} = req.params; //obtener el id de los parametros de la url
    let contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    contacts = contacts.filter(contact => (parseInt(contact.id) !== parseInt(id))); //elimina el contacto con el id que se desea eliminar
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2)); //guardalo en un array
    res.json({message: 'Contacto eliminado'});
});

module.exports = router

