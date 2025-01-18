// Actividad 9: Registro de eventos
// Consigna: Crea un programa para registrar eventos. El programa debe
// permitirte:
// 1. Agregar un evento: Registrar un evento con nombre, fecha y
// lugar.
// 2. Listar los eventos: Mostrar todos los eventos registrados.
// 3. Eliminar un evento: Eliminar un evento de la lista.
// Pistas:
// • Usa un archivo JSON para guardar los eventos.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada evento debe tener un ID único.
const fs = require('fs');
const filePath = './eventos.json';

const getEvents = () => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');
    }
    const contentFile = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contentFile);
}

const saveEvents = (events) => {
    fs.writeFileSync(filePath, JSON.stringify(events, null, 2));
}

const addEvent = (nombre, fecha, lugar) => {
    const events = getEvents();
    events.push({id: events.length + 1, nombre, fecha, lugar});
    saveEvents(events);
    console.log("Event added");
}

const listEvents = () => {
    const events = getEvents();
    console.log(events);
}

const deleteEvent = (idEvent) => {
    const events = getEvents();
    let newList = events.filter(event => event.id != parseInt(idEvent));
    saveEvents(newList);
    console.log(newList);
}

// addEvent("Nacimiento", '25-01-2025', 'Ensenada');
// addEvent("Bautizo", '25-03-2025', 'Ensenada');
// addEvent("Cumpleanios", '25-01-2026', 'Ensenada');
// addEvent("Confirmacion", '25-01-2035', 'Ensenada');
// listEvents();
// deleteEvent(2);