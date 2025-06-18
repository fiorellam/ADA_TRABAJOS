// Actividad 1: Crear una API REST con un Endpoint de Prueba
// Consigna:
// 1. Crea un proyecto de Node.js en una carpeta nueva.
// 2. Configura Express y express.json().
// 3. Define un endpoint GET en la ruta /api/message que devuelva un
// mensaje JSON como respuesta.
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/message', (req, res) => {
    res.json({message: "Bienvenido!!!"})
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/api/message`);
});
